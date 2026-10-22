#!/usr/bin/env node
/* =========================================================
   BUSTRACKING — Geocodificação dos pontos de parada
   ---------------------------------------------------------
   Lê os pontos de js/data.js, busca latitude/longitude no
   Nominatim (OpenStreetMap) e grava js/stops-geo.js.

   Uso (Node 18+), a partir da raiz do projeto:
     node tools/geocode-stops.js            # todos os pontos
     node tools/geocode-stops.js --limit 20 # teste rápido

   - Respeita o limite do Nominatim: 1 requisição por segundo.
   - Guarda cache em tools/geocode-cache.json: pode parar com
     Ctrl+C e rodar de novo que ele continua de onde parou.
   - Antes de rodar, troque CONTACT pelo e-mail do grupo
     (a política de uso do Nominatim exige identificação).
   ========================================================= */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const CONTACT = 'adrielduarte@alunos.fho.edu.br';
const ROOT = path.resolve(__dirname, '..');
const DATA_FILE = path.join(ROOT, 'js', 'data.js');
const CACHE_FILE = path.join(__dirname, 'geocode-cache.json');
const OUT_FILE = path.join(ROOT, 'js', 'stops-geo.js');

// Região de Araras e entorno (inclui as fazendas das linhas 1401–1404).
const VIEWBOX = '-47.60,-22.15,-47.15,-22.55'; // esquerda,topo,direita,base
const DELAY_MS = 1100;

const limitArg = process.argv.indexOf('--limit');
const LIMIT = limitArg > -1 ? Number(process.argv[limitArg + 1]) : Infinity;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function loadStops() {
  const sandbox = { window: {} };
  vm.runInNewContext(fs.readFileSync(DATA_FILE, 'utf8'), sandbox);
  return sandbox.window.BUS_DATA.stops.map((stop) => stop.name);
}

/** Separa "Avenida Loreto, 376-432" em rua + número (ponto médio da faixa). */
function parseStop(name) {
  let text = name
    .replace(/\([^)]*\)/g, ' ')
    .replace(/^Av\.?\s/i, 'Avenida ')
    .replace(/^R\.\s/i, 'Rua ')
    .replace(/\s+/g, ' ')
    .trim();

  const range = text.match(/(\d+)\s*-\s*(\d+)/);
  const single = text.match(/\b(\d+)\b/);
  let number = null;
  if (range) number = Math.round((Number(range[1]) + Number(range[2])) / 2);
  else if (single) number = Number(single[1]);

  // Rua = texto antes de ",", de " - " ou do primeiro número.
  const street = text.split(/\s-\s|,/)[0].replace(/\s*\d.*$/, '').trim();
  return { text, street, number };
}

async function nominatim(params) {
  const query = new URLSearchParams({
    format: 'jsonv2', limit: '1', countrycodes: 'br',
    viewbox: VIEWBOX, bounded: '1', email: CONTACT, ...params
  });
  const response = await fetch(`https://nominatim.openstreetmap.org/search?${query}`, {
    headers: { 'User-Agent': `BusTracking-projeto-academico/1.0 (${CONTACT})`, 'Accept-Language': 'pt-BR' }
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const [hit] = await response.json();
  return hit ? { lat: Number(hit.lat), lng: Number(hit.lon), label: hit.display_name } : null;
}

async function geocode(name) {
  const { text, street, number } = parseStop(name);
  const base = { city: 'Araras', state: 'São Paulo', country: 'Brasil' };

  if (/^Terminal Urbano/i.test(name)) {
    const hit = await nominatim({ q: 'Terminal Urbano, Araras, São Paulo, Brasil' });
    if (hit) return { ...hit, quality: 'text' };
  }
  if (street && number) {                                  // 1) rua + número
    const hit = await nominatim({ ...base, street: `${number} ${street}` });
    if (hit) { await sleep(DELAY_MS); return { ...hit, quality: 'number' }; }
    await sleep(DELAY_MS);
  }
  if (street) {                                            // 2) só a rua
    const hit = await nominatim({ ...base, street });
    if (hit) { await sleep(DELAY_MS); return { ...hit, quality: 'street' }; }
    await sleep(DELAY_MS);
  }
  const hit = await nominatim({ q: `${text}, Araras, São Paulo, Brasil` }); // 3) texto livre
  return hit ? { ...hit, quality: 'text' } : { quality: 'none' };
}

async function main() {
  if (CONTACT.includes('exemplo.com')) {
    console.warn('⚠ Edite a constante CONTACT no topo do arquivo com o e-mail do grupo.\n');
  }
  const names = loadStops();
  const cache = fs.existsSync(CACHE_FILE) ? JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8')) : {};
  const cached = names.filter((name) => cache[name]).length;
  const pending = names.filter((name) => !cache[name]).slice(0, LIMIT);
  console.log(`${names.length} pontos • ${cached} já em cache • ${pending.length} a buscar agora`);

  let done = 0;
  for (const name of pending) {
    try {
      cache[name] = await geocode(name);
    } catch (error) {
      console.warn(`  erro em "${name}": ${error.message} (será tentado de novo na próxima execução)`);
      await sleep(5000);
      continue;
    }
    done += 1;
    if (done % 10 === 0 || done === pending.length) {
      fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 1));
      console.log(`  ${done}/${pending.length}`);
    }
    await sleep(DELAY_MS);
  }
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 1));

  const geo = {};
  const stats = { number: 0, street: 0, text: 0, none: 0, missing: 0 };
  names.forEach((name) => {
    const hit = cache[name];
    if (!hit) { stats.missing += 1; return; }
    stats[hit.quality] += 1;
    if (hit.quality !== 'none') {
      geo[name] = { lat: +hit.lat.toFixed(6), lng: +hit.lng.toFixed(6), quality: hit.quality };
    }
  });
  fs.writeFileSync(OUT_FILE,
    '/* Gerado por tools/geocode-stops.js — não edite à mão.\n' +
    '   quality: number = rua + número · street = só a rua (aproximado) · text = busca livre */\n' +
    `window.STOPS_GEO = ${JSON.stringify(geo, null, 1)};\n`);

  console.log('\nResumo:', stats);
  console.log(`Gravado: ${path.relative(ROOT, OUT_FILE)} (${Object.keys(geo).length} pontos com coordenadas)`);
}

main().catch((error) => { console.error(error); process.exit(1); });

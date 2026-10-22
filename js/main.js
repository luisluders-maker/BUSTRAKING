/* =========================================================
   BUSTRACKING — Comportamentos compartilhados
   ========================================================= */

const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

/** Escapa texto antes de inseri-lo em HTML gerado pelo JavaScript. */
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#039;'
}[character]));

/** Configura o menu móvel presente no cabeçalho de cada página. */
function loadHeader() {
  const headerTarget = $('[data-header]');
  if (!headerTarget) return;
  setupMobileMenu(headerTarget);
}

function setupMobileMenu(context) {
  const toggle = $('.menu-toggle', context);
  const menu = $('#mobile-menu', context);
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    menu.hidden = isOpen;
  });

  $$('a', menu).forEach((link) => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
      menu.hidden = true;
    });
  });
}

/** Atualiza as estatísticas exibidas na página inicial. */
function homeStats() {
  const busCount = $('#bus-count');
  const lineCount = $('#line-count');
  const stopCount = $('#stop-count');

  if (!busCount || !lineCount || !stopCount || !window.BUS_DATA) return;

  busCount.textContent = (BUS_DATA.buses || []).length;
  lineCount.textContent = (BUS_DATA.lines || []).length;
  stopCount.textContent = (BUS_DATA.stops || []).length;
}

/* =========================================================
   Mapa (Leaflet) e simulação de posição
   ========================================================= */

const ARARAS_CENTER = [-22.3572, -47.3842];

/** 1 s real = SIM_SPEEDUP s de viagem simulada. Use 1 para tempo real; 3 ou 4 deixam a demonstração mais dinâmica. */
const SIM_SPEEDUP = 2;

const hasCoords = (stop) => Number.isFinite(stop?.lat) && Number.isFinite(stop?.lng);

/** Junta as coordenadas de js/stops-geo.js (gerado por tools/geocode-stops.js) aos pontos de BUS_DATA. */
function applyGeo() {
  if (!window.BUS_DATA?.stops || !window.STOPS_GEO) return;

  // Coordenada repetida = o serviço devolveu o centro da rua, não o número exato.
  const uses = new Map();
  Object.values(STOPS_GEO).forEach((point) => {
    const key = `${point.lat},${point.lng}`;
    uses.set(key, (uses.get(key) || 0) + 1);
  });

  BUS_DATA.stops.forEach((stop) => {
    const point = STOPS_GEO[stop.name];
    if (!point) return;
    stop.lat = point.lat;
    stop.lng = point.lng;
    stop.precision = point.quality === 'number' && uses.get(`${point.lat},${point.lng}`) === 1
      ? 'address'
      : 'approx';
  });
}

/** Cria o mapa dentro de um painel; devolve null (e avisa na tela) se o Leaflet não carregou. */
function createMap(panel) {
  if (!window.L) {
    panel.insertAdjacentHTML('afterbegin',
      '<p class="map-fallback">Não foi possível carregar o mapa. Verifique a conexão com a internet e recarregue a página.</p>');
    return null;
  }

  const canvas = document.createElement('div');
  canvas.className = 'map-canvas';
  panel.insertBefore(canvas, panel.firstChild);

  const map = L.map(canvas, { center: ARARAS_CENTER, zoom: 13, preferCanvas: true });
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  return map;
}

/** Distância em metros entre dois pontos {lat, lng} (fórmula de haversine). */
function distanceMeters(a, b) {
  const rad = Math.PI / 180;
  const dLat = (b.lat - a.lat) * rad;
  const dLng = (b.lng - a.lng) * rad;
  const h = Math.sin(dLat / 2) ** 2
    + Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLng / 2) ** 2;
  return 12742000 * Math.asin(Math.sqrt(h));
}

/** Monta o trajeto de um sentido usando só os pontos que têm coordenadas. */
function buildRoute(lineId, directionLabel) {
  const line = BUS_DATA.lines.find((item) => item.id === lineId);
  const direction = line?.directions.find((item) => item.direction === directionLabel);
  if (!direction) return null;

  const byName = new Map(BUS_DATA.stops.map((stop) => [stop.name, stop]));
  const points = [];
  direction.stops.forEach((name) => {
    const stop = byName.get(name);
    if (!hasCoords(stop)) return;
    const last = points[points.length - 1];
    if (last && last.lat === stop.lat && last.lng === stop.lng) return;
    points.push({ name, lat: stop.lat, lng: stop.lng, at: 0 });
  });

  let total = 0;
  points.forEach((point, index) => {
    if (index) total += distanceMeters(points[index - 1], point);
    point.at = total;
  });
  return points.length >= 2 ? { points, total } : null;
}

/** Posição do ônibus depois de percorrer `progress` metros do trajeto. */
function positionAt(route, progress) {
  const { points } = route;
  let nextIndex = points.findIndex((point) => point.at > progress);
  if (nextIndex < 1) nextIndex = points.length - 1;
  const from = points[nextIndex - 1];
  const to = points[nextIndex];
  const span = to.at - from.at || 1;
  const t = Math.min(1, Math.max(0, (progress - from.at) / span));
  return {
    lat: from.lat + (to.lat - from.lat) * t,
    lng: from.lng + (to.lng - from.lng) * t,
    next: to,
    remaining: Math.max(0, to.at - progress)
  };
}

/** Escolhe o trajeto inicial de cada ônibus e espalha os ônibus da mesma linha ao longo dele. */
function initSimulation() {
  BUS_DATA.buses.forEach((bus) => {
    const line = BUS_DATA.lines.find((item) => item.id === bus.lineId);
    if (!line) return;

    const label = bus.directionLabel || String(bus.direction).split(' · ').pop();
    const first = Math.max(0, line.directions.findIndex((item) => item.direction === label));
    const seed = [...String(bus.id)].reduce((hash, char) => (hash * 31 + char.charCodeAt(0)) >>> 0, 7);

    for (let step = 0; step < line.directions.length; step += 1) {
      const dirIndex = (first + step) % line.directions.length;
      const route = buildRoute(line.id, line.directions[dirIndex].direction);
      if (route) {
        const start = bus.status === 'Parado' ? 0 : route.total * (10 + (seed % 70)) / 100;
        bus.sim = { dirIndex, route, progress: start };
        return;
      }
    }
  });
}

/** Avança a simulação `seconds` segundos e atualiza posição, próximo ponto e chegada de cada ônibus. */
function stepSimulation(seconds) {
  BUS_DATA.buses.forEach((bus) => {
    const sim = bus.sim;
    if (!sim) return;
    const line = BUS_DATA.lines.find((item) => item.id === bus.lineId);
    const metersPerSecond = (bus.status === 'Em operação' ? bus.speed : 0) / 3.6 * SIM_SPEEDUP;

    sim.progress += metersPerSecond * seconds;

    // Ao chegar ao fim do trajeto, o ônibus segue no outro sentido da linha.
    if (sim.progress >= sim.route.total) {
      for (let step = 1; step <= line.directions.length; step += 1) {
        const dirIndex = (sim.dirIndex + step) % line.directions.length;
        const route = buildRoute(line.id, line.directions[dirIndex].direction);
        if (route) {
          bus.sim = { dirIndex, route, progress: 0 };
          break;
        }
      }
      if (bus.sim === sim) sim.progress = 0;
    }

    const current = bus.sim;
    const position = positionAt(current.route, current.progress);
    bus.lat = position.lat;
    bus.lng = position.lng;
    bus.nextStop = position.next.name;
    bus.etaSeconds = metersPerSecond > 0 ? position.remaining / metersPerSecond : null;
    bus.eta = bus.etaSeconds === null ? 0 : Math.ceil(bus.etaSeconds / 60);
    bus.direction = `${line.name} · ${line.directions[current.dirIndex].direction}`;
  });
}

function tracking() {
  const list = $('#busList');
  const panel = $('#liveMap');
  if (!list || !panel || !window.BUS_DATA) return;

  const map = createMap(panel);
  const routeLayer = map ? L.layerGroup().addTo(map) : null;
  const markers = new Map();
  let drawnRoute = null;

  initSimulation();
  stepSimulation(0);

  const etaText = (bus) => {
    if (bus.etaSeconds === null || bus.etaSeconds === undefined) return bus.eta ? `${bus.eta} min` : 'Agora';
    return bus.etaSeconds < 45 ? 'Chegando' : `${Math.ceil(bus.etaSeconds / 60)} min`;
  };

  const renderPopup = (bus) => {
    $('#busPopup').innerHTML = `
      <strong>Ônibus ${escapeHTML(bus.number)}</strong>
      <div class="popup-row"><span>Próximo ponto</span><b>${escapeHTML(bus.nextStop)}</b></div>
      <div class="popup-row"><span>Chegada</span><b>${etaText(bus)}</b></div>
      <div class="popup-row"><span>Velocidade</span><b>${bus.speed} km/h</b></div>
      ${bus.sim ? '' : '<div class="popup-row"><span>Mapa</span><b>sem posição</b></div>'}
    `;
  };

  /** Desenha o trajeto e os pontos do ônibus selecionado. */
  const drawRoute = (bus, fit) => {
    if (!map || !bus.sim) return;
    routeLayer.clearLayers();
    drawnRoute = bus.sim.route;

    const latlngs = drawnRoute.points.map((point) => [point.lat, point.lng]);
    L.polyline(latlngs, { color: '#2563eb', weight: 5, opacity: .55 }).addTo(routeLayer);
    drawnRoute.points.forEach((point) => {
      L.circleMarker([point.lat, point.lng], {
        radius: 4, color: '#1d4ed8', weight: 2, fillColor: '#fff', fillOpacity: 1
      }).bindTooltip(escapeHTML(point.name)).addTo(routeLayer);
    });
    if (fit) map.fitBounds(L.latLngBounds(latlngs), { padding: [50, 50] });
  };

  const activeBus = () => {
    const item = $('.bus-item.active', list);
    return item ? BUS_DATA.buses.find((entry) => entry.id === item.dataset.bus) : null;
  };

  const select = (id, { fit = false } = {}) => {
    const bus = BUS_DATA.buses.find((item) => item.id === id);
    if (!bus) return;

    $$('.bus-item', list).forEach((item) => {
      item.classList.toggle('active', item.dataset.bus === id);
    });
    markers.forEach((marker, key) => {
      marker.getElement()?.classList.toggle('is-selected', key === id);
    });

    renderPopup(bus);
    drawRoute(bus, fit);
  };

  const render = () => {
    list.innerHTML = BUS_DATA.buses.map((bus, index) => `
      <article class="bus-item ${index === 0 ? 'active' : ''}" data-bus="${escapeHTML(bus.id)}">
        <div class="bus-row">
          <span class="bus-number">${escapeHTML(bus.number)}</span>
          <div>
            <strong>Linha ${escapeHTML(bus.number)}</strong><br>
            <small>${escapeHTML(bus.status)} · ${bus.speed} km/h</small>
          </div>
        </div>
        <small>${escapeHTML(bus.direction)}</small>
      </article>
    `).join('');

    if (map) {
      BUS_DATA.buses.filter((bus) => bus.sim).forEach((bus) => {
        const marker = L.marker([bus.lat, bus.lng], {
          icon: L.divIcon({
            className: `bus-marker ${bus.status === 'Parado' ? 'is-stopped' : ''}`,
            html: `<span>${escapeHTML(bus.number)}</span>`,
            iconSize: [38, 38]
          }),
          keyboard: false
        }).addTo(map);
        marker.on('click', () => select(bus.id, { fit: true }));
        markers.set(bus.id, marker);
      });
    }

    $$('.bus-item', list).forEach((item) => {
      item.addEventListener('click', () => select(item.dataset.bus, { fit: true }));
    });

    select(BUS_DATA.buses[0]?.id, { fit: true });
  };

  const filter = () => {
    const query = ($('#busSearch')?.value || '').trim().toLowerCase();
    const status = $('#statusFilter')?.value || '';
    const line = $('#lineFilter')?.value || '';

    $$('.bus-item', list).forEach((item) => {
      const bus = BUS_DATA.buses.find((entry) => entry.id === item.dataset.bus);
      const matchesQuery = !query || `${bus.number} ${bus.direction}`.toLowerCase().includes(query);
      const matchesStatus = !status || bus.status === status;
      const matchesLine = !line || bus.lineId === line;
      item.hidden = !(matchesQuery && matchesStatus && matchesLine);

      // O marcador no mapa acompanha o filtro da lista.
      const marker = markers.get(bus.id);
      if (marker && map) {
        if (!item.hidden && !map.hasLayer(marker)) marker.addTo(map);
        if (item.hidden && map.hasLayer(marker)) map.removeLayer(marker);
      }
    });
  };

  // As opções do filtro de linha vêm dos ônibus cadastrados (antes eram fixas no HTML).
  const lineFilter = $('#lineFilter');
  if (lineFilter) {
    const busLineIds = [...new Set(BUS_DATA.buses.map((bus) => bus.lineId))];
    lineFilter.insertAdjacentHTML('beforeend', busLineIds.map((id) => {
      const line = BUS_DATA.lines.find((item) => item.id === id);
      const label = line ? ` — ${escapeHTML(line.name)}` : '';
      return `<option value="${escapeHTML(id)}">Linha ${escapeHTML(id)}${label}</option>`;
    }).join(''));
  }

  ['busSearch', 'statusFilter', 'lineFilter'].forEach((id) => {
    $(`#${id}`)?.addEventListener('input', filter);
    $(`#${id}`)?.addEventListener('change', filter);
  });

  render();

  // Um passo por segundo; a velocidade oscila a cada 5 s. Pausa quando a aba está oculta.
  let last = performance.now();
  let ticks = 0;
  window.setInterval(() => {
    const now = performance.now();
    if (document.hidden) { last = now; return; }
    const seconds = Math.min(2, (now - last) / 1000);
    last = now;
    ticks += 1;

    if (ticks % 5 === 0) {
      BUS_DATA.buses.forEach((bus) => {
        if (bus.status === 'Em operação') {
          bus.speed = Math.max(15, Math.min(42, bus.speed + (Math.random() > .5 ? 1 : -1)));
        }
      });
    }

    stepSimulation(seconds);

    BUS_DATA.buses.forEach((bus) => {
      markers.get(bus.id)?.setLatLng([bus.lat, bus.lng]);
      const item = $(`.bus-item[data-bus="${bus.id}"]`, list);
      if (item) {
        const [status, direction] = $$('small', item);
        if (status) status.textContent = `${bus.status} · ${bus.speed} km/h`;
        if (direction) direction.textContent = bus.direction;
      }
    });

    const bus = activeBus();
    if (bus) {
      if (bus.sim && bus.sim.route !== drawnRoute) drawRoute(bus, false);
      renderPopup(bus);
    }
  }, 1000);
}

function itinerarios() {
  const grid = $('#lineGrid');
  if (!grid || !window.BUS_DATA) return;

  const renderStops = (stops) => stops.map((stop, index) => `
    <li>
      <span class="stop-index" aria-hidden="true">${index + 1}</span>
      <span>${escapeHTML(stop)}</span>
    </li>
  `).join('');

  const render = () => {
    const query = ($('#lineSearch')?.value || '').trim().toLowerCase();
    const lines = BUS_DATA.lines.filter((line) =>
      `${line.id} ${line.name}`.toLowerCase().includes(query)
    );

    grid.innerHTML = lines.map((line) => `
      <article class="line-route-card">
        <header class="route-card-top">
          <span class="route-number" aria-label="Linha ${escapeHTML(line.id)}">${escapeHTML(line.id)}</span>
          <div>
            <h3 class="route-card-title">${escapeHTML(line.name)}</h3>
            <p class="route-card-sub">${line.directions.length} sentidos disponíveis</p>
          </div>
        </header>

        <section class="route-directions" aria-label="Itinerários da linha ${escapeHTML(line.id)}">
          ${line.directions.map((route) => `
            <details class="route-direction">
              <summary>
                <span>${escapeHTML(route.direction)}</span>
                <small>${route.stops.length} pontos</small>
              </summary>
              <ol class="route-stop-list">
                ${renderStops(route.stops)}
              </ol>
            </details>
          `).join('')}
        </section>
      </article>
    `).join('') || '<p class="empty">Nenhuma linha encontrada.</p>';
  };

  $('#lineSearch')?.addEventListener('input', render);
  render();
}

function horarios() {
  const rows = $('#scheduleRows');
  const lineSelect = $('#scheduleLine');
  const daySelect = $('#scheduleDay');
  const description = $('#scheduleDescription');

  if (!rows || !lineSelect || !daySelect || !window.BUS_DATA) return;

  const dayLabels = {
    segunda_sexta: 'Segunda a sexta-feira',
    sabado: 'Sábado',
    domingo: 'Domingo',
    feriado: 'Feriado'
  };

  const scheduleByLine = new Map(BUS_DATA.schedules.map((item) => [item.id, item]));

  // Une as linhas dos itinerários com as do PDF de horários: algumas só existem em um dos dois.
  const lineOptions = new Map(BUS_DATA.lines.map((line) => [line.id, line.name]));
  BUS_DATA.schedules.forEach((schedule) => lineOptions.set(schedule.id, schedule.name));

  lineSelect.innerHTML = [...lineOptions]
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([id, name]) => `
      <option value="${escapeHTML(id)}">Linha ${escapeHTML(id)} — ${escapeHTML(name)}${scheduleByLine.has(id) ? '' : ' (sem horários)'}</option>
    `).join('');

  const renderTimes = (times) => times.length
    ? `<ol class="schedule-times">${times.map((time) => `<li><time datetime="${escapeHTML(time)}">${escapeHTML(time)}</time></li>`).join('')}</ol>`
    : '<p class="empty compact-empty">Não há horário informado para este sentido.</p>';

  const render = () => {
    const schedule = scheduleByLine.get(lineSelect.value);
    const day = schedule?.days[daySelect.value];

    if (!schedule) {
      rows.innerHTML = '<p class="empty">Os horários desta linha ainda não foram cadastrados.</p>';
      if (description) description.textContent = lineOptions.get(lineSelect.value) || '';
      return;
    }

    if (!day) {
      rows.innerHTML = '<p class="empty">Nenhum horário encontrado.</p>';
      if (description) description.textContent = '';
      return;
    }

    if (description) {
      description.textContent = `${dayLabels[daySelect.value]} · ${schedule.name}`;
    }

    rows.innerHTML = `
      <article class="schedule-direction">
        <header>
          <h3>Saída do Terminal</h3>
          <span>${day.terminal.length} horários</span>
        </header>
        ${renderTimes(day.terminal)}
      </article>
      <article class="schedule-direction">
        <header>
          <h3>Saída do Bairro</h3>
          <span>${day.bairro.length} horários</span>
        </header>
        ${renderTimes(day.bairro)}
      </article>
    `;
  };

  lineSelect.addEventListener('change', render);
  daySelect.addEventListener('change', render);
  render();
}

function pontos() {
  const list = $('#stopList');
  const panel = $('#stopMap');
  if (!list || !panel || !window.BUS_DATA) return;

  const map = createMap(panel);
  const markerLayer = map ? L.layerGroup().addTo(map) : null;
  const markers = new Map();

  const markerStyle = (stop, selected) => ({
    radius: selected ? 9 : 5,
    color: selected ? '#92400e' : '#1d4ed8',
    weight: 2,
    fillColor: selected ? '#facc15' : (stop.precision === 'address' ? '#2563eb' : '#bfdbfe'),
    fillOpacity: .95
  });

  /** Mostra no máximo 10 linhas para pontos como o Terminal, que atendem quase todas. */
  const linesText = (stop) => stop.lines.length > 10
    ? `${stop.lines.slice(0, 10).join(' · ')} · +${stop.lines.length - 10} linhas`
    : stop.lines.join(' · ');

  const select = (id, { pan = false } = {}) => {
    const stop = BUS_DATA.stops.find((item) => item.id === id);
    if (!stop) return;

    $$('.stop-card', list).forEach((item) => {
      item.classList.toggle('active', item.dataset.stop === id);
    });
    markers.forEach(({ marker, stop: entry }, key) => {
      marker.setStyle(markerStyle(entry, key === id));
      if (key === id) marker.bringToFront();
    });

    const where = !hasCoords(stop)
      ? 'sem localização no mapa'
      : stop.precision === 'address' ? 'posição por endereço' : 'posição aproximada (centro da rua)';

    $('#stopMapLabel').innerHTML = `
      <strong>${escapeHTML(stop.name)}</strong><br>
      <span class="muted">${escapeHTML(stop.address)} · ${where}</span><br>
      <small>${escapeHTML(linesText(stop))}</small>
    `;

    if (map && pan && hasCoords(stop)) {
      map.setView([stop.lat, stop.lng], Math.max(map.getZoom(), 16));
    }
  };

  const render = () => {
    const query = ($('#stopSearch')?.value || '').trim().toLowerCase();
    const stops = BUS_DATA.stops.filter((stop) => `${stop.name} ${stop.address} ${stop.lines.join(' ')}`.toLowerCase().includes(query));

    list.innerHTML = stops.map((stop, index) => `
      <article class="stop-card ${index === 0 ? 'active' : ''}" data-stop="${escapeHTML(stop.id)}">
        <h3>${escapeHTML(stop.name)}</h3>
        <p>${escapeHTML(stop.address)}${hasCoords(stop) ? '' : ' · sem localização no mapa'}</p>
        <div class="chip-row" aria-label="Linhas atendidas">
          ${stop.lines.slice(0, 10).map((line) => `<span class="chip">${escapeHTML(line)}</span>`).join('')}
          ${stop.lines.length > 10 ? `<span class="chip">+${stop.lines.length - 10}</span>` : ''}
        </div>
      </article>
    `).join('') || '<p class="empty">Nenhum ponto encontrado.</p>';

    if (map) {
      markerLayer.clearLayers();
      markers.clear();

      const located = stops.filter(hasCoords);
      located.forEach((stop) => {
        const marker = L.circleMarker([stop.lat, stop.lng], markerStyle(stop, false)).addTo(markerLayer);
        marker.bindTooltip(escapeHTML(stop.name));
        marker.on('click', () => {
          select(stop.id);
          $(`[data-stop="${stop.id}"]`, list)?.scrollIntoView({ block: 'nearest' });
        });
        markers.set(stop.id, { marker, stop });
      });

      if (located.length) {
        map.fitBounds(L.latLngBounds(located.map((stop) => [stop.lat, stop.lng])), { padding: [30, 30], maxZoom: 16 });
      }
    }

    $$('.stop-card', list).forEach((item) => {
      item.addEventListener('click', () => select(item.dataset.stop, { pan: true }));
    });

    if (stops[0]) select(stops[0].id);
  };

  $('#stopSearch')?.addEventListener('input', render);
  render();
}

document.addEventListener('DOMContentLoaded', () => {
  applyGeo();
  loadHeader();
  homeStats();
  tracking();
  itinerarios();
  horarios();
  pontos();
});

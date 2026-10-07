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

  busCount.textContent = BUS_DATA.buses.length;
  lineCount.textContent = BUS_DATA.lines.length;
  stopCount.textContent = BUS_DATA.stops.length;
}

function tracking() {
  const list = $('#busList');
  const map = $('#liveMap');
  if (!list || !map || !window.BUS_DATA) return;

  const select = (id) => {
    const bus = BUS_DATA.buses.find((item) => item.id === id);
    if (!bus) return;

    $$('.bus-item', list).forEach((item) => {
      item.classList.toggle('active', item.dataset.bus === id);
    });

    const eta = bus.eta ? `${bus.eta} min` : 'Agora';
    $('#busPopup').innerHTML = `
      <strong>Ônibus ${escapeHTML(bus.number)}</strong>
      <div class="popup-row"><span>Próximo ponto</span><b>${escapeHTML(bus.nextStop)}</b></div>
      <div class="popup-row"><span>Chegada</span><b>${eta}</b></div>
      <div class="popup-row"><span>Velocidade</span><b>${bus.speed} km/h</b></div>
    `;
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

    map.querySelectorAll('.data-bus-marker').forEach((marker) => marker.remove());

    BUS_DATA.buses.forEach((bus) => {
      const marker = document.createElement('button');
      marker.className = 'route-marker data-bus-marker';
      marker.type = 'button';
      marker.style.left = `${bus.x}%`;
      marker.style.top = `${bus.y}%`;
      marker.textContent = bus.number;
      marker.setAttribute('aria-label', `Selecionar ônibus ${bus.number}`);
      marker.addEventListener('click', () => select(bus.id));
      map.appendChild(marker);
    });

    $$('.bus-item', list).forEach((item) => {
      item.addEventListener('click', () => select(item.dataset.bus));
    });

    select(BUS_DATA.buses[0]?.id);
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
    });
  };

  ['busSearch', 'statusFilter', 'lineFilter'].forEach((id) => {
    $(`#${id}`)?.addEventListener('input', filter);
    $(`#${id}`)?.addEventListener('change', filter);
  });

  render();

  window.setInterval(() => {
    BUS_DATA.buses.forEach((bus) => {
      if (bus.status === 'Em operação') {
        bus.speed = Math.max(15, Math.min(42, bus.speed + (Math.random() > .5 ? 1 : -1)));
      }
    });

    const activeBus = $('.bus-item.active', list);
    if (activeBus) select(activeBus.dataset.bus);
  }, 5000);
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

  lineSelect.innerHTML = BUS_DATA.schedules.map((schedule) => `
    <option value="${escapeHTML(schedule.id)}">Linha ${escapeHTML(schedule.id)} — ${escapeHTML(schedule.name)}</option>
  `).join('');

  const renderTimes = (times) => times.length
    ? `<ol class="schedule-times">${times.map((time) => `<li><time datetime="${escapeHTML(time)}">${escapeHTML(time)}</time></li>`).join('')}</ol>`
    : '<p class="empty compact-empty">Não há horário informado para este sentido.</p>';

  const render = () => {
    const schedule = scheduleByLine.get(lineSelect.value);
    const day = schedule?.days[daySelect.value];

    if (!schedule || !day) {
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
  const map = $('#stopMap');
  if (!list || !map || !window.BUS_DATA) return;

  const select = (id) => {
    const stop = BUS_DATA.stops.find((item) => item.id === id);
    if (!stop) return;

    $$('.stop-card', list).forEach((item) => {
      item.classList.toggle('active', item.dataset.stop === id);
    });

    $('#stopMapLabel').innerHTML = `
      <strong>${escapeHTML(stop.name)}</strong><br>
      <span class="muted">${escapeHTML(stop.address)}</span><br>
      <small>${stop.lines.map(escapeHTML).join(' · ')}</small>
    `;
  };

  const render = () => {
    const query = ($('#stopSearch')?.value || '').trim().toLowerCase();
    const stops = BUS_DATA.stops.filter((stop) => `${stop.name} ${stop.address} ${stop.lines.join(' ')}`.toLowerCase().includes(query));

    list.innerHTML = stops.map((stop, index) => `
      <article class="stop-card ${index === 0 ? 'active' : ''}" data-stop="${escapeHTML(stop.id)}">
        <h3>${escapeHTML(stop.name)}</h3>
        <p>${escapeHTML(stop.address)}</p>
        <div class="chip-row" aria-label="Linhas atendidas">
          ${stop.lines.map((line) => `<span class="chip">${escapeHTML(line)}</span>`).join('')}
        </div>
      </article>
    `).join('') || '<p class="empty">Nenhum ponto encontrado.</p>';

    map.querySelectorAll('.data-stop-marker').forEach((marker) => marker.remove());

    stops.forEach((stop) => {
      const marker = document.createElement('button');
      marker.className = 'route-marker data-stop-marker';
      marker.type = 'button';
      marker.style.left = `${stop.x}%`;
      marker.style.top = `${stop.y}%`;
      marker.textContent = '●';
      marker.setAttribute('aria-label', `Selecionar ponto ${stop.name}`);
      marker.addEventListener('click', () => select(stop.id));
      map.appendChild(marker);
    });

    $$('.stop-card', list).forEach((item) => {
      item.addEventListener('click', () => select(item.dataset.stop));
    });

    if (stops[0]) select(stops[0].id);
  };

  $('#stopSearch')?.addEventListener('input', render);
  render();
}

document.addEventListener('DOMContentLoaded', () => {
  loadHeader();
  homeStats();
  tracking();
  itinerarios();
  horarios();
  pontos();
});

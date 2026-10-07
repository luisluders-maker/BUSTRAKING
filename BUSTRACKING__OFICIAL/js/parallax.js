/* =========================================================
   BUSTRACKING — Movimento cinematográfico da janela
   ========================================================= */

(function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function setupCinematicScene() {
    const backdrop = document.querySelector('.cinematic-backdrop');
    if (!backdrop) return;

    const layers = [
      { selector: '.scene-city-back', factor: 0.12 },
      { selector: '.scene-city-mid', factor: 0.24 },
      { selector: '.scene-trees-back', factor: 0.42 },
      { selector: '.scene-trees-front', factor: 0.72 },
      { selector: '.scene-light-trails', factor: 1.0 }
    ].map((item) => ({ ...item, el: backdrop.querySelector(item.selector) }))
      .filter((item) => item.el);

    const scene = backdrop.querySelector('.travel-scene');
    if (!scene) return;

    if (prefersReducedMotion) {
      layers.forEach(({ el }) => {
        el.style.transform = 'translate3d(0, 0, 0)';
      });
      return;
    }

    let target = 0;
    let current = 0;
    let lastScroll = window.scrollY;
    let lastTime = performance.now();
    let velocity = 0;
    let raf = 0;

    function animate(time) {
      const dt = Math.min(50, time - lastTime) || 16;
      lastTime = time;

      current += (target - current) * Math.min(1, dt * 0.009);
      velocity *= Math.pow(0.001, dt / 1000);

      // A pequena vibração aumenta quando a página está sendo percorrida.
      const shake = Math.min(2.2, Math.abs(velocity) * 0.035);
      scene.style.transform = `translate3d(${Math.sin(time * 0.006) * shake}px, ${Math.cos(time * 0.004) * shake * 0.45}px, 0)`;

      layers.forEach(({ el, factor }) => {
        const distance = current * factor;
        el.style.transform = `translate3d(${-distance}px, 0, 0)`;
      });

      raf = requestAnimationFrame(animate);
    }

    function updateFromScroll() {
      const scroll = window.scrollY;
      const delta = scroll - lastScroll;
      lastScroll = scroll;
      velocity += delta;

      // A paisagem continua avançando em todas as seções, como uma janela de viagem.
      target = scroll * 1.15;
    }

    window.addEventListener('scroll', updateFromScroll, { passive: true });
    window.addEventListener('resize', updateFromScroll);
    updateFromScroll();
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(animate);
  }

  /** Revela elementos conforme entram na tela. */
  function setupReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.style.transitionDelay = `${(index % 4) * 70}ms`;
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    items.forEach((item) => observer.observe(item));
  }

  document.addEventListener('DOMContentLoaded', () => {
    setupCinematicScene();
    setupReveal();
  });
})();

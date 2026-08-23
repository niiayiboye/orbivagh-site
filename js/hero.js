/* ================================================================
   ORBIVA – 3-PANEL IMAGE BANNER
   All panels advance simultaneously on a single shared timer.
   Blurred backdrop fills the letterbox/pillarbox gaps.
================================================================ */

(function () {
  const panels = document.querySelectorAll('.tri-panel');
  if (!panels.length) return;

  const INTERVAL = 4000;

  // Build state for each panel
  const states = [];

  panels.forEach(panel => {
    const slides   = panel.querySelectorAll('.tri-pslide');
    const dotsWrap = panel.querySelector('.tri-panel-dots');
    if (!slides.length) return;

    // Inject blurred backdrop behind each slide's image
    slides.forEach(slide => {
      const img = slide.querySelector('img');
      if (!img) return;
      const bg = document.createElement('div');
      bg.className = 'tri-slide-bg';
      const setSrc = () => { bg.style.backgroundImage = `url('${img.src}')`; };
      img.complete ? setSrc() : img.addEventListener('load', setSrc);
      slide.insertBefore(bg, img);
    });

    // Build dot indicators
    const state = { slides, dotsWrap, current: 0 };

    slides.forEach((_, i) => {
      const d = document.createElement('span');
      d.className = 'tri-pdot' + (i === 0 ? ' active' : '');
      d.addEventListener('click', e => { e.stopPropagation(); goTo(state, i); });
      dotsWrap.appendChild(d);
    });

    states.push(state);
  });

  function goTo(state, idx) {
    state.slides[state.current].classList.remove('active');
    state.dotsWrap.children[state.current].classList.remove('active');
    state.current = (idx + state.slides.length) % state.slides.length;
    state.slides[state.current].classList.add('active');
    state.dotsWrap.children[state.current].classList.add('active');
  }

  // Single timer — all panels advance together
  setInterval(() => {
    states.forEach(s => goTo(s, s.current + 1));
  }, INTERVAL);
})();

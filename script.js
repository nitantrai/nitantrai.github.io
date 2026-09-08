const modes = {
  academic: { intro: "I study how remote sensing and machine learning can improve forest measurements and monitoring. I’m a Ph.D. Candidate in Forestry at Virginia Tech, concurrently completing an M.Eng. in Computer Science.", file: "Academic_CV", label: "academic CV", angle: "Research perspective: connect seedling detection with repeatable regeneration monitoring." },
  industry: { intro: "I build Python and R workflows that turn UAV imagery, LiDAR, and field data into useful forest monitoring outputs. My background brings together geospatial analysis, machine learning, and hands-on forestry research.", file: "Industry_Resume", label: "industry resume", angle: "Industry perspective: automate image inference and turn detection outputs into structured reports." }
};
document.querySelectorAll('[data-mode]').forEach(button => button.addEventListener('click', () => {
  const mode = modes[button.dataset.mode];
  document.querySelectorAll('[data-mode]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  document.querySelector('#intro').textContent = mode.intro;
  document.querySelector('#project-angle').textContent = mode.angle;
  const link = document.querySelector('#primary-download');
  link.href = `downloads/Nitant_Rai_${mode.file}.pdf`;
  link.textContent = `Download ${mode.label} ↓`;
}));
const panels = [...document.querySelectorAll('.panel')];
function showSection() {
  const requested = location.hash.slice(1);
  const active = panels.some(panel => panel.id === requested) ? requested : 'about';
  panels.forEach(panel => { panel.hidden = panel.id !== active; });
  document.querySelectorAll('.tabs a').forEach(link => {
    if (link.hash === `#${active}`) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}
window.addEventListener('hashchange', showSection);
showSection();

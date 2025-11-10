// Minimal interactivity
document.addEventListener('DOMContentLoaded', function(){
  // highlight current nav
  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(a => {
    if (a.href === location.href || a.getAttribute('data-match') === location.pathname) {
      a.classList.add('active');
    }
  });

  // mobile menu toggle
  const btn = document.getElementById('menuToggle');
  const nav = document.getElementById('navMenu');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // simple project filter
  const filterInputs = document.querySelectorAll('[data-filter-input]');
  filterInputs.forEach(input => {
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      document.querySelectorAll('.project').forEach(card => {
        const text = (card.innerText || '').toLowerCase();
        card.style.display = text.indexOf(q) >= 0 ? '' : 'none';
      });
    });
  });
});

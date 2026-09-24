/* ═══════════════════════════════════════
   NAV  —  sticky scroll + mobile menu
═══════════════════════════════════════ */

const navEl = document.getElementById('nav');

/* ── Add "scrolled" class on scroll ──── */
window.addEventListener('scroll', function () {
  navEl.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ── Smooth scroll helper ───────────── */
function scrollTo(selector) {
  const target = document.querySelector(selector);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ── Mobile menu helpers ────────────── */
function openMenu() {
  document.getElementById('mobile-menu').classList.add('open');
}

function closeMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
}

/* Close mobile menu on Escape key */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeMenu();
});

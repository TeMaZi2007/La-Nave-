/* ═══════════════════════════════════════
   ANIMATIONS  —  scroll-triggered fade-in
═══════════════════════════════════════ */

(function () {
  /* Observe every element with the "fade-in" class */
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          /* Unobserve after first trigger — no re-animation needed */
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.fade-in').forEach(function (el) {
    observer.observe(el);
  });
})();

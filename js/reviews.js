/* ═══════════════════════════════════════
   REVIEWS  —  carousel with dots & arrows
═══════════════════════════════════════ */

(function () {
  const trackEl  = document.getElementById('reviews-track');
  const dotsEl   = document.getElementById('reviews-dots');
  const prevBtn  = document.getElementById('reviews-prev');
  const nextBtn  = document.getElementById('reviews-next');

  /* How many cards fit side-by-side */
  const perView = window.innerWidth < 600 ? 1
                : window.innerWidth < 900 ? 2
                : 3;

  let currentIndex = 0;
  const maxIndex   = Math.max(0, REVIEWS_DATA.length - perView);

  /* Card width + gap (matches CSS: 295px + 1.35rem gap ≈ 316px) */
  const CARD_WIDTH = 295 + 21;

  /* ── Build cards ────────────────────── */
  REVIEWS_DATA.forEach(function (review) {
    const stars = '★'.repeat(review.stars);

    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
      <div class="review-header">
        <div class="review-avatar">${review.initial}</div>
        <div>
          <div class="review-name">${review.name}</div>
          <div class="review-date">${review.date} · Google</div>
        </div>
      </div>
      <div class="review-stars">${stars}</div>
      <div class="review-text">${review.text}</div>
    `;

    trackEl.appendChild(card);
  });

  /* ── Update track position & dots ───── */
  function update() {
    trackEl.style.transform = 'translateX(-' + (currentIndex * CARD_WIDTH) + 'px)';
    renderDots();
  }

  /* ── Dot indicators ─────────────────── */
  function renderDots() {
    dotsEl.innerHTML = '';

    for (let i = 0; i <= maxIndex; i++) {
      const dot = document.createElement('div');
      dot.className = 'reviews-dot' + (i === currentIndex ? ' active' : '');

      dot.addEventListener('click', function () {
        currentIndex = i;
        update();
      });

      dotsEl.appendChild(dot);
    }
  }

  /* ── Arrow controls ─────────────────── */
  prevBtn.addEventListener('click', function () {
    currentIndex = Math.max(0, currentIndex - 1);
    update();
  });

  nextBtn.addEventListener('click', function () {
    currentIndex = Math.min(maxIndex, currentIndex + 1);
    update();
  });

  /* ── Init ───────────────────────────── */
  update();
})();

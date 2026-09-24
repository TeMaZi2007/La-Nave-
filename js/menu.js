/* ═══════════════════════════════════════
   MENU  —  tab switching & card rendering
═══════════════════════════════════════ */

(function () {
  const tabsEl  = document.getElementById('menu-tabs');
  const gridEl  = document.getElementById('menu-grid');
  const categories = Object.keys(MENU_DATA);

  let activeCategory = 'Pizza';
  const addedItems   = {};   // tracks which items show "added" state

  /* ── Render tab buttons ─────────────── */
  function renderTabs() {
    tabsEl.innerHTML = '';

    categories.forEach(function (cat) {
      const btn = document.createElement('button');
      btn.className  = 'menu-tab' + (cat === activeCategory ? ' active' : '');
      btn.textContent = cat;

      btn.addEventListener('click', function () {
        activeCategory = cat;
        renderTabs();
        renderCards();
      });

      tabsEl.appendChild(btn);
    });
  }

  /* ── Render menu cards ──────────────── */
  function renderCards() {
    gridEl.innerHTML = '';

    MENU_DATA[activeCategory].forEach(function (item, index) {
      const card = document.createElement('div');
      card.className = 'menu-card fade-in';
      card.style.transitionDelay = (index * 0.05) + 's';

      card.innerHTML = `
        <div class="menu-card-top">
          <span class="menu-card-emoji">${item.emoji}</span>
          <span class="menu-card-price">${item.price}</span>
        </div>
        <div class="menu-card-name">${item.name}</div>
        <div class="menu-card-desc">${item.desc}</div>
        <button class="menu-card-btn ${addedItems[item.name] ? 'added' : ''}"
                data-item="${item.name}">
          ${addedItems[item.name] ? '✓ Hinzugefügt' : '+ Zum Warenkorb'}
        </button>
      `;

      /* Add-to-cart click */
      card.querySelector('.menu-card-btn').addEventListener('click', function () {
        const itemName = this.dataset.item;

        if (!addedItems[itemName]) {
          addedItems[itemName] = true;
          this.classList.add('added');
          this.textContent = '✓ Hinzugefügt';

          /* Reset after 1.8 s */
          setTimeout(function () {
            delete addedItems[itemName];
            const btn = gridEl.querySelector('[data-item="' + itemName + '"]');
            if (btn) {
              btn.classList.remove('added');
              btn.textContent = '+ Zum Warenkorb';
            }
          }, 1800);
        }
      });

      gridEl.appendChild(card);

      /* Trigger fade-in on next frame */
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          card.classList.add('visible');
        });
      });
    });
  }

  /* ── Init ───────────────────────────── */
  renderTabs();
  renderCards();
})();

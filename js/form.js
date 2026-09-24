/* ═══════════════════════════════════════
   FORM  —  contact form submit handler
═══════════════════════════════════════ */

function submitForm() {
  const nameEl    = document.getElementById('form-name');
  const emailEl   = document.getElementById('form-email');
  const messageEl = document.getElementById('form-message');
  const areaEl    = document.getElementById('form-area');

  const name    = nameEl.value.trim();
  const email   = emailEl.value.trim();
  const message = messageEl.value.trim();

  /* Basic validation */
  if (!name || !message) {
    /* Highlight empty required fields */
    if (!name)    nameEl.style.borderColor    = '#ff6b6b';
    if (!message) messageEl.style.borderColor = '#ff6b6b';
    return;
  }

  /* Reset border colors */
  nameEl.style.borderColor    = '';
  messageEl.style.borderColor = '';

  /*
   * In production: replace this block with a real fetch() / form submission.
   * e.g.:  fetch('/api/contact', { method: 'POST', body: JSON.stringify({name, email, message}) })
   */

  areaEl.innerHTML = `
    <div class="form-success">
      ✅ Ihre Nachricht wurde gesendet!<br>
      Wir antworten innerhalb von 48 Stunden.<br><br>
      Für Reservierungen rufen Sie uns bitte an:
      <strong style="color: var(--color-orange)">+49 6731-1517</strong>
    </div>
  `;
}

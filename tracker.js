(async function () {
  const el = document.getElementById('tracker');
  try {
    if (!window.DEXSCREENER_PAIR || String(DEXSCREENER_PAIR).includes('PLACEHOLDER')) {
      el.textContent = 'Chart link coming soon.';
      return;
    }
    const a = document.createElement('a');
    a.href = DEXSCREENER_PAIR;
    a.target = '_blank';
    a.rel = 'noopener';
    a.textContent = 'Open chart on Dexscreener';
    a.style.display = 'inline-block';
    a.style.padding = '10px 14px';
    a.style.borderRadius = '10px';
    a.style.textDecoration = 'none';
    a.style.color = '#0b0b0b';
    a.style.background = 'linear-gradient(90deg, #a78bfa, #60a5fa)';
    a.style.boxShadow = '0 0 12px rgba(96,165,250,0.5), 0 0 18px rgba(167,139,250,0.5)';
    el.innerHTML = '';
    el.appendChild(a);
  } catch (e) {
    el.textContent = 'Tracker unavailable right now.';
  }
})();
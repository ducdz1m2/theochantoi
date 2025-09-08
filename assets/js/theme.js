// assets/js/theme.js
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  const icon = btn.querySelector('i');
  const KEY = 'site-theme';

  function readCookie(name) {
    const m = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return m ? m.pop() : null;
  }

  function writeCookie(name, value, days = 365) {
    const maxAge = 60 * 60 * 24 * days;
    document.cookie = `${name}=${value}; path=/; max-age=${maxAge}`;
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      btn.setAttribute('aria-pressed', 'true');
      if (icon) { icon.classList.remove('fa-moon'); icon.classList.add('fa-sun'); }
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      btn.setAttribute('aria-pressed', 'false');
      if (icon) { icon.classList.remove('fa-sun'); icon.classList.add('fa-moon'); }
    }
  }

  // Init: localStorage -> cookie -> system
  let saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) { saved = null; }
  if (!saved) saved = readCookie('theme');

  if (saved === 'dark' || saved === 'light') {
    applyTheme(saved);
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  // Click toggles and saves into localStorage + cookie (cookie for older setups)
  btn.addEventListener('click', function () {
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem(KEY, next); } catch (e) { /* ignore */ }
    writeCookie('theme', next, 365);
  });

  // If user hasn't chosen (no localStorage entry), respond to system changes
  try {
    const hasUserChoice = !!localStorage.getItem(KEY) || !!readCookie('theme');
    if (!hasUserChoice && window.matchMedia) {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      mq.addEventListener && mq.addEventListener('change', (e) => {
        applyTheme(e.matches ? 'dark' : 'light');
      });
    }
  } catch (e) { /* ignore */ }
});

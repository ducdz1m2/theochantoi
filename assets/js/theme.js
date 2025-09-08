const toggle = document.getElementById('theme-toggle');

// Hàm đọc cookie
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

// Hàm set cookie
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days*24*60*60*1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

// Load theme từ cookie
const currentTheme = getCookie('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
}

// Toggle theme khi bấm nút
toggle.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    setCookie('theme', 'light', 365);
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    setCookie('theme', 'dark', 365);
  }
});

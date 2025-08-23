// Fecha en el footer
document.getElementById('y').textContent = new Date().getFullYear();

// Botón imprimir
document.getElementById('printBtn').addEventListener('click', () => window.print());

// Botón tema claro/oscuro
const themeBtn = document.getElementById('themeBtn');
let dark = true;
themeBtn.addEventListener('click', () => {
  document.documentElement.style.setProperty('--bg', dark ? '#f6f7fb' : '#0f1115');
  document.documentElement.style.setProperty('--card', dark ? '#ffffff' : '#151823');
  document.documentElement.style.setProperty('--muted', dark ? '#556070' : '#9aa4b2');
  document.documentElement.style.setProperty('--text', dark ? '#111827' : '#e5e7eb');
  document.documentElement.style.setProperty('--chip', dark ? '#eef2f7' : '#1f2433');
  document.documentElement.style.setProperty('--border', dark ? '#e6e8ee' : '#252a37');
  dark = !dark;
});

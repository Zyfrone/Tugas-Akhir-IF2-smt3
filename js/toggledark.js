document.addEventListener("DOMContentLoaded", () => {

  const toggleButton = document.querySelector('.toggletheme');
  const root = document.documentElement;

  toggleButton.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    if (isDark) {
      root.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      toggleButton.textContent = 'Ganti Tema';
    } else {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      toggleButton.textContent = 'Ganti Tema';
    }
  });

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    root.setAttribute('data-theme', 'dark');
  }
});
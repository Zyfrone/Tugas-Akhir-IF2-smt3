document.addEventListener("DOMContentLoaded", () => {

  const images = [
    'img/bannermain.jpg', 'img/banner1.jpg', 'img/banner2.jpg', 'img/banner3.jpg',
    'img/banner4.jpg', 'img/banner5.jpg', 'img/banner6.jpg', 'img/banner7.jpg',
    'img/banner8.jpg', 'img/banner9.jpg', 'img/banner10.jpg', 'img/banner11.jpg',
    'img/banner12.jpg', 'img/bannermain.jpg'
  ];

  const bg1 = document.querySelector('.bg1');
  const bg2 = document.querySelector('.bg2');
  if (!bg1 || !bg2) return;

  let current = 0;
  let next = 1;
  let showingBg1 = true;

  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  bg1.style.backgroundImage = `url(${images[0]})`;
  bg1.style.opacity = 1;
  bg2.style.opacity = 0;

  function changeBackground() {
    const currentBg = showingBg1 ? bg1 : bg2;
    const nextBg = showingBg1 ? bg2 : bg1;

    nextBg.style.backgroundImage = `url(${images[next]})`;
    nextBg.style.opacity = 1;
    currentBg.style.opacity = 0;

    current = next;
    next = (next + 1) % images.length;
    showingBg1 = !showingBg1;
  }

  setInterval(changeBackground, 4000);

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

document.querySelectorAll('.card').forEach(card => {
    const images = card.querySelectorAll('.gallery img');
    let index = 0;
    let interval;

    card.addEventListener('mouseenter', () => {
      interval = setInterval(() => {
        images[index].style.opacity = 0;
        index = (index + 1) % images.length;
        images[index].style.opacity = 1;
      }, 1500); 
    });

    card.addEventListener('mouseleave', () => {
      clearInterval(interval);
      images.forEach(img => img.style.opacity = 0);
      images[0].style.opacity = 1; 
      index = 0;
    });
  });
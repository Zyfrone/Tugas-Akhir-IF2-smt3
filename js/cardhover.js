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
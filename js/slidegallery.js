let current = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  function changeSlide(n) {
    current = (current + n + slides.length) % slides.length;
    showSlide(current);
  }

  // Auto cambio cada 5 segundos
  setInterval(() => {
    changeSlide(1);
  }, 5000);

  // Mostrar el primero al inicio
  showSlide(current);
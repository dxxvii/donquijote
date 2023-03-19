window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const distanciaY = window.pageYOffset || document.documentElement.scrollTop;
  if (distanciaY > 100) {
    header.classList.add('mostrar');
  } else {
    header.classList.remove('mostrar');
  }
});
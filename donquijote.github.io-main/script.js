window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const distanciaY = window.pageYOffset || document.documentElement.scrollTop;
  if (distanciaY > 100) {
    header.classList.add('mostrar');
  } else {
    header.classList.remove('mostrar');
  }
});

const Themes = {
  Dark: 'dark',
  Light: 'light'
};
const ModeLabel = {
  dark: 'luminoso',
  light: 'oscuro'
};
const Key = 'theme';


const root = document.documentElement;
let currentTheme = root.dataset.theme;
const button = document.querySelector('.color-scheme-toggler');
const getLabel = () => `Cambiar a modo ${ModeLabel[currentTheme]}`;

const onButtonClick = () => {
  const newTheme = currentTheme === Themes.Light
    ? Themes.Dark
    : Themes.Light;

  currentTheme = newTheme;
  root.dataset.theme = newTheme;
  localStorage.setItem(Key, newTheme);
  button.setAttribute('aria-label', getLabel());
};

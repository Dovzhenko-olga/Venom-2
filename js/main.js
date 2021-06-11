const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.nav-menu');
const menuCloseBtn = document.querySelector('.menu-close');

menuBtn.addEventListener('click', () => {
  menu.classList.add('is-active');
  menuCloseBtn.classList.add('is-active');
});
menuCloseBtn.addEventListener('click', () => {
  menu.classList.remove('is-active');
  menuCloseBtn.classList.remove('is-active');
});
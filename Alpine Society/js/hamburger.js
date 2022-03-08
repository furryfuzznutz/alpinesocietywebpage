'use strict';

///////////////////////////////////////
//Hamburger Menu
const hamburgerBtn = document.querySelector('.hamburger-btn');
const nav = document.querySelector('.nav');
const hamburgerImg = document.querySelector('.hamburger-btn__img');

hamburgerBtn.addEventListener('click', () => {
  nav.classList.toggle('nav__active');
  hamburgerImg.classList.toggle('hamburger-animated');
});

'use strict';

///////////////////////////////////////
//Scroll Into View
const btnLogo = document.querySelector('.logo');
const header = document.querySelector('.header');
const btnAbout = document.querySelector('.nav__item--about');
const sectionAbout = document.querySelector('.section__about');
const btnMint = document.querySelector('.nav__item--mint');
const sectionMint = document.querySelector('.section__mint');
const btnRoadmap = document.querySelector('.nav__item--roadmap');
const sectionRoadmap = document.querySelector('.section__roadmap');
const btnRarity = document.querySelector('.nav__item--rarity');
const sectionRarity = document.querySelector('.section__rarity');
const btnTeam = document.querySelector('.nav__item--team');
const sectionTeam = document.querySelector('.section__team');
const btnFaq = document.querySelector('.nav__item--faq');
const sectionFaq = document.querySelector('.section__faq');
const btnMember = document.querySelector('.btn--member');

btnLogo.addEventListener('click', () => {
  header.scrollIntoView({ behavior: 'smooth' });
});

btnAbout.addEventListener('click', () => {
  sectionAbout.scrollIntoView({ behavior: 'smooth' });
});

btnMint.addEventListener('click', () => {
  sectionMint.scrollIntoView({ behavior: 'smooth' });
});

btnRoadmap.addEventListener('click', () => {
  sectionRoadmap.scrollIntoView({ behavior: 'smooth' });
});

btnRarity.addEventListener('click', () => {
  sectionRarity.scrollIntoView({ behavior: 'smooth' });
});

btnTeam.addEventListener('click', () => {
  sectionTeam.scrollIntoView({ behavior: 'smooth' });
});

btnFaq.addEventListener('click', () => {
  sectionFaq.scrollIntoView({ behavior: 'smooth' });
});

btnMember.addEventListener('click', () => {
  sectionMint.scrollIntoView({ behavior: 'smooth' });
});

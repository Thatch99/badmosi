'use strict';

const fullscreen = () => {
  const element = document.documentElement; // Fullscreen the entire page
  const requestMethod =
    element.requestFullscreen ||
    element.mozRequestFullScreen ||
    element.webkitRequestFullscreen ||
    element.msRequestFullscreen;

  if (requestMethod) {
    requestMethod.call(element);
  }
};

function redirectToPage() {
  window.location.href = 'Cridustine.html';
}

const btn1_method = document.querySelector('.button-1');
const flash_div = document.getElementById('flash');
const flashBang_audio = new Audio('Resources/Think Fast.mp3');

btn1_method.addEventListener('click', () => {
  fullscreen();
  flashBang_audio.addEventListener('canplaythrough', () => {
    flashBang_audio.play();
  })
  setTimeout(() => {
    flash_div.style.opacity = 1;
  }, 1500);

  setTimeout(() => {
    redirectToPage();
  }, 3000);
});


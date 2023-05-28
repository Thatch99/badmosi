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
function redirectToGoblin() {
  window.location.href = 'Gobin_Balls.html';
}

const btn1_method = document.querySelector('.button-1');
const btn2_method = document.querySelector('.button-2');
const flash_div = document.getElementById('flash');
btn2_method.addEventListener('click',()=>{
  redirectToGoblin();
})
btn1_method.addEventListener('click', () => {
  fullscreen();
  setTimeout(() => {
    flash_div.style.opacity = 1;
  }, 1500);

  setTimeout(() => {
    redirectToPage();
  }, 3000);
});


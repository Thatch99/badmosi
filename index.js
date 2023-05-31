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
function redirectToHail() {
  window.location.href = 'Hail_NIgler.html';
}

const btn1_method = document.querySelector('.button-1');
const btn2_method = document.querySelector('.button-2');
const btn3_method = document.querySelector('.button-3');
const flash_div = document.getElementById('flash');
btn2_method.addEventListener('click',()=>{
  redirectToGoblin();
})

btn3_method.addEventListener('click',()=>{
  redirectToHail();
})

let currTime = new Date().getHours();

btn1_method.addEventListener('click', () => {
  fullscreen();

  setTimeout(
  ()=>{currTime>=20 && currTime<=24?  flash_div.style.opacity = 1: null;},1000
  )

  setTimeout(() => {
    redirectToPage();
  }, 2000);
});


'use strict'
const fullscreen = () => {
  const element = document.documentElement; // Fullscreen the entire page
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) { /* Firefox */
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) { /* IE/Edge */
    element.msRequestFullscreen();
  }

}

function redirectToPage() {

  window.location.href = "Cridustine.html";
}


const btn1_method = document.querySelector('.button-1');
// const cur_audio = new Audio('Resources/amugos_cursed.mp3')
// const susImage = document.getElementById('image-hand');
const flash_div = document.getElementById('flash');
const flashBang_audio = new Audio('Resources/Think Fast.mp3')


btn1_method.addEventListener('click', () => {
  fullscreen();
  flashBang_audio.play();
  console.log('playing');
  // cur_audio.play();
  setTimeout(function () {
    flash_div.style.opacity = 1
    
  }, 1500);
  setTimeout(function () {
    redirectToPage()
  }, 3000);
  susImage.style.opacity = 1
})

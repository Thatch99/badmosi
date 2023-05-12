'use strict'
const fullscreen = ()=>{
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
console.log("UNDER CONSTRUCTION")
console.log("UNDER CONSTRUCTION")

const Clickshitbtn = document.getElementById('mybtn1');
const cur_audio = new Audio('Resources/amugos_cursed.mp3')
const susImage = document.getElementById('image-hand');
const flash_div = document.getElementById('overlay-white');
const flashBang_audio = new Audio('Resources/Think Fast.mp3')

Clickshitbtn.addEventListener('click', ()=>
{
  fullscreen();
  flashBang_audio.volume += 1.0
  flashBang_audio.play();
  console.log('playing');
  // cur_audio.play();
  setTimeout(function(){
    flash_div.style.opacity = 1
    // Code to be executed
  }, 1500);
  // susImage.style.opacity = 1
})

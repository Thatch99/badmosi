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

Clickshitbtn.addEventListener('click', ()=>
{
  
})

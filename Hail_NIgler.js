const overlay_element = document.querySelector('.warning-overlay');

const continue_btn = document.querySelector('.continue')

continue_btn.addEventListener('click',function(){
    overlay_element.classList.add('hidden')
})
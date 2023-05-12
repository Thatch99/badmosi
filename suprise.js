'use strict'


const ip_grabber = () => {
    fetch("https://api.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
            const ipAddress = data.ip;
            console.log(ipAddress);
            document.querySelector('.rel-ip').textContent = ipAddress
        })
        .catch(error => {
            console.error("Could not get IP address: ", error);
        });
}


const ipGrabEl = document.getElementById('Supmybtn1')
const cur_audio = new Audio('Resources/amugos_cursed.mp3')



function toggleVisibility() {
    let div = document.querySelector(".ip-Display");
    if (div.classList.contains("hidden")) {
        div.classList.remove("hidden");
    } else {
        div.classList.add("hidden");
    }
}

ipGrabEl.addEventListener('click', () => {

    cur_audio.play();
    toggleVisibility();
    ip_grabber();

});




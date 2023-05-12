'use strict'


// const ip_grabber = () => {

//     fetch("https://api.ipify.org?format=json")
//         .then(response => response.json())
//         .then(data => {
//             const ipAddress = data.ip;
//             console.log(ipAddress);
//             document.querySelector('.rel-ip').textContent = ipAddress
//         })
//         .catch(error => {
//             console.error("Could not get IP address: ", error);
//         });
// }

const ip_grabber = () => {
    const url = "https://ipgeolocation.abstractapi.com/v1/?api_key=6088fe30129a450da65421439b0a2cfd";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function() {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        
        document.querySelector('.rel-ip').textContent = data.ip_address
      }
      else {
        console.error("Request failed. Status code: " + xhr.status);
      }
    };
    xhr.send();
  };

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




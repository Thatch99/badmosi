// fetch("https://api.ipify.org?format=json")
//     .then(response => response.json())
//     .then(data => {
//         const ipAddress = data.ip;
//         const ip_container = document.querySelector('#ip-container');
//         ip_container.textContent = ipAddress;
//     })
//     .catch(error => {
//         console.error("Could not get IP address: ", error);
//     });

fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        const ip_container = document.querySelector('#ip-container');
        ip_container.textContent = data.ip;
    })
    .catch(error => {
        console.error("Error retrieving IP address:", error);
    });

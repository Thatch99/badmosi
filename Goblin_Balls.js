fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
    .then(data => {
        const ipAddress = data.ip;
        const ip_container = document.querySelector('#ip-container');
        ip_container.textContent = ipAddress; // Outputs the user's IP address to the console
    })
    .catch(error => {
        console.error("Could not get IP address: ", error);
    });
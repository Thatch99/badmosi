
function httpGetAsync(url, callback) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            const responseArray = JSON.parse(xmlHttp.responseText);
            callback(responseArray);
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

const url = "https://ipgeolocation.abstractapi.com/v1/?api_key=6088fe30129a450da65421439b0a2cfd";

httpGetAsync(url, function (responseArray) {
    ipAddress = responseArray['ip_address'];
    const ip_container = document.querySelector('#ip-container');
    const region_container = document.querySelector('#region-container');
    ip_container.textContent = ipAddress;
    region_container.textContent = responseArray['region'];

});


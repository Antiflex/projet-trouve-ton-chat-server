
async function getAllAnnonces() {
    let url = "https://projet-trouve-ton-chat-server.onrender.com/api/get_annonces";

    const response = await fetch(url, {
        method: "GET",
        mode: 'cors',
    })
    const result = await response.json();
    return result

}

getAllAnnonces().then(value => {console.log(value)})


let myMap = L.map("map").setView([37.61, -122.011], 10);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    // Attribution is obligatory as per copyright!
    maxZoom: 20
}).addTo(myMap);
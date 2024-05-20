let myMap = L.map("map").setView([48.85754750, 2.35137650], 10);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    // Attribution is obligatory as per copyright!
    maxZoom: 20
}).addTo(myMap);

myMap.addControl(new L.Control.Fullscreen());
let markerGroup = L.layerGroup().addTo(myMap);

var popup = L.popup();

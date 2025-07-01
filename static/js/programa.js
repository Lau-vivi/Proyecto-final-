var map = L.map('map').setView([4.628048900039199, -74.06590971493061], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//manejar el evento de hacer clik en el mapa
function onMapClick(e) {

    var marker = L.marker(e.latlng).addTo(map);
    
}

map.on('click', onMapClick);
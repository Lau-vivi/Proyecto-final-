// Crea un mapa Leaflet dentro del elemento con id "map"
// Centra el mapa en las coordenadas [4.628048900039199, -74.06590971493061]
// y establece un nivel de zoom de 13 (nivel medio)
var map = L.map('map').setView([4.628048900039199, -74.06590971493061], 13);

// Agrega una capa de mosaicos (tiles) al mapa usando OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19, // Zoom máximo permitido en el mapa
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    // Texto legal para atribuir los datos a OpenStreetMap
}).addTo(map); // Añade esta capa al mapa

// Función que se ejecuta cuando se hace clic en el mapa
function onMapClick(e) {
    // Crea un marcador en la posición donde se hizo clic (e.latlng)
    // e.latlng contiene las coordenadas latitud y longitud del clic
    var marker = L.marker(e.latlng).addTo(map);
    // Añade el marcador al mapa
}

// Asocia la función onMapClick al evento 'click' del mapa
// Esto significa que cada vez que el usuario haga clic en el mapa,
// se ejecutará la función y se colocará un marcador en esa posición
map.on('click', onMapClick);

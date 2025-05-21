var map = L.map('map').setView([4.555742937351999, -74.08400870501436], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var puntosPoligono = [
    [4.560731, -74.085905],  // Coordenada 1
    [4.557706, -74.082506],  // Coordenada 2
    [4.551747, -74.084843],  // Coordenada 3
    [4.552231, -74.088515],  // Coordenada 4
    [4.560731, -74.085905]   // Coordenada 5 (debe ser igual a la primera para cerrar el polígono)
];

// Crear el polígono y añadirlo al mapa
var poligono = L.polygon(puntosPoligono, {
    color: 'blue',        // Color del borde
    fillColor: 'lightblue', // Color de relleno
    fillOpacity: 0.4      // Opacidad del relleno
}).addTo(map);

// Agregar un popup al polígono
poligono.bindPopup("Zona del polígono en San Cristóbal").openPopup();

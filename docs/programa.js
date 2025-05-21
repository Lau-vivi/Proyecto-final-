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

// Función para inicializar el mapa
function initMap(id, lat, lon, zoom) {
    var map = L.map(id).setView([lat, lon], zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    return map;
}

// Mapa de la página de inicio (San Cristóbal)
if (document.getElementById('map')) {
    initMap('map', 4.555742937351999, -74.08400870501436);  // San Cristóbal
}

// Mapa del lugar de nacimiento (Bogotá)
if (document.getElementById('footer-map')) {
    initMap('footer-map', 4.6097, -74.0817, 12);  // Bogotá, Colombia
}
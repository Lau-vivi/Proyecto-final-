// Crea un mapa centrado en San Cristóbal (este bloque es redundante con initMap más abajo)
var map = L.map('map').setView([4.555742937351999, -74.08400870501436], 13);

// Capa base de OpenStreetMap que se muestra en el mapa
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,  // Nivel máximo de acercamiento
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);  // Añade esta capa al mapa

// Coordenadas de un polígono (zona destacada en San Cristóbal)
var puntosPoligono = [
    [4.560731, -74.085905],  // Punto 1
    [4.557706, -74.082506],  // Punto 2
    [4.551747, -74.084843],  // Punto 3
    [4.552231, -74.088515],  // Punto 4
    [4.560731, -74.085905]   // Punto 5 (igual al primero para cerrar la figura)
];

// ---- FUNCIÓN PARA CREAR MAPAS REUTILIZABLES ----
function initMap(id, lat, lon, zoom = 15) {
    // Crea un nuevo mapa en el contenedor con el ID especificado
    var map = L.map(id).setView([lat, lon], zoom);

    // Agrega capa de fondo de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    return map; // Devuelve el mapa por si se quiere usar luego (ej. para agregar marcadores)
}

// ---- USO DE LA FUNCIÓN EN DIFERENTES PÁGINAS ----

// Si hay un elemento con ID 'map', inicializa el mapa en San Cristóbal
if (document.getElementById('map')) {
    initMap('map', 4.555742937351999, -74.08400870501436);  // Coordenadas de San Cristóbal
}

// Si hay un mapa en el pie de página (por ejemplo, lugar de nacimiento)
if (document.getElementById('footer-map')) {
    initMap('footer-map', 4.6097, -74.0817, 12);  // Coordenadas de Bogotá
}

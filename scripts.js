// Función para obtener una imagen de gato
function obtenerImagenGato() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            const imagenUrl = data[0].url;
            document.getElementById('imagen-gato').src = imagenUrl;
        })
        .catch(error => console.error('Error al obtener la imagen:', error));
}

// obtener una imagen al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    obtenerImagenGato();

    document.getElementById('nuevo-gato').addEventListener('click', obtenerImagenGato);
});

document.addEventListener('DOMContentLoaded', function () {
    lightGallery(document.querySelector('.album'), {
        selector: '.lg-zoomable',
        download: true, // Puedes cambiar esto a true si quieres habilitar la descarga de las imágenes
    });
});
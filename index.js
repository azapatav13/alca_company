let slideIndex = 0;

// Función para avanzar a la siguiente imagen
function nextSlide() {
    slideIndex++;
    showSlide();
}

// Función para retroceder a la imagen anterior
function prevSlide() {
    slideIndex--;
    showSlide();
}

// Función principal para mostrar las imágenes
function showSlide() {
    let slides = document.querySelectorAll('.image');
    let gallery = document.querySelector('.gallery');
    let slideWidth = slides[0].offsetWidth;

    // Limitar slideIndex dentro del rango de imágenes disponibles
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    // Mover la galería horizontalmente
    gallery.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

// Mostrar la primera imagen al cargar la página
showSlide();

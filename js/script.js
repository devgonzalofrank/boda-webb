var audio = document.getElementById("myAudio");
var playIcon = document.getElementById("playIcon");

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playIcon.innerHTML = '<path d="M6 6h2v12H6zm10 0h2v12h-2z"/>';
    } else {
        audio.pause();
        playIcon.innerHTML = '<path d="M8 5v14l11-7z" fill="white"/>';
    }
}

// Definir la fecha objetivo (18 de agosto)
var targetDate = new Date('August 18, 2024 00:00:00').getTime();

// Función para actualizar la cuenta regresiva
function updateCountdown() {
    // Obtener la fecha y hora actual
    var currentDate = new Date().getTime();

    // Calcular la diferencia entre la fecha objetivo y la fecha actual
    var difference = targetDate - currentDate;

    // Calcular los días, horas, minutos y segundos restantes
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Mostrar la cuenta regresiva en el elemento HTML
    document.getElementById('countdown').innerHTML = days + ' días, ' + hours + ' horas, ' + minutes + ' minutos, ' + seconds + ' segundos';

    // Actualizar la cuenta regresiva cada segundo
    setTimeout(updateCountdown, 1000);    

}

 //parallax
 window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var parallaxElements = document.querySelectorAll('.parallax-image');

    for (var i = 0; i < parallaxElements.length; i++) {
        var parallaxElement = parallaxElements[i];
        var parallaxSpeed = 0.5; // Ajusta la velocidad de parallax según sea necesario
        parallaxElement.style.transform = 'translateY(' + scrollTop * parallaxSpeed + 'px)';
    }
});

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;

    var animatedContainers = document.querySelectorAll('.animated-container');

    animatedContainers.forEach(function(container) {
        var containerTop = container.getBoundingClientRect().top;
        var containerBottom = container.getBoundingClientRect().bottom;

        // Verificar si el contenedor está completamente visible en la ventana gráfica
        if (containerTop < windowHeight && containerBottom >= 0 && !container.classList.contains('visible')) {
            container.classList.add('visible', 'fade-in');
        }
    });
});

// Función para verificar si el elemento está visible en la ventana gráfica
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para activar la animación cuando el elemento está visible
function animateOnScroll() {
    var animatedContainers = document.querySelectorAll('.animated-container');
    animatedContainers.forEach(function(container) {
        if (isElementInViewport(container)) {
            container.classList.add('visible');
        } else {
            container.classList.remove('visible');
        }
    });
}

// Llamar a la función al cargar la página y al hacer scroll
document.addEventListener('DOMContentLoaded', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);





// Llamar a la función para iniciar la cuenta regresiva
updateCountdown();


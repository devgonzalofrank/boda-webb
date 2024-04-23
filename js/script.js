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


// Llamar a la función para iniciar la cuenta regresiva
updateCountdown();


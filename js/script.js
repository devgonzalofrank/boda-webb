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

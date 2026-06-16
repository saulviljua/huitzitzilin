const audio = document.getElementById("audio");
const img = document.getElementById("prenderaudio");
const blanco = document.getElementById("blanco");

img.addEventListener("click", function() {
    audio.play();
    blanco.classList.add("visible");
});

audio.onended = function() {
    window.location.href="huitzitzilin/mundo/mundo.html"
};

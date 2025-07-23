/*Codigo para desactivar y activar sonido del video*/

const video = document.getElementById('videoTrailer');
const btn = document.getElementById('toggleSoundBtn');
const icon = btn.querySelector('i');

btn.addEventListener('click', () => {
    video.muted = !video.muted;
    icon.className = video.muted ? "bi bi-volume-mute-fill" : "bi bi-volume-up-fill";
    video.play();
});
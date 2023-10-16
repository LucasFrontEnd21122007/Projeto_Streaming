const audioPlayer = document.getElementById("audio-player");

audioPlayer.addEventListener("play", () => {
    console.log("Música está tocando");
});

audioPlayer.addEventListener("pause", () => {
    console.log("Música está pausada");
});

audioPlayer.addEventListener("ended", () => {
    console.log("Música terminou");
});

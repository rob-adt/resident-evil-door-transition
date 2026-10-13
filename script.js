const button = document.getElementById("doorbut");
const hoverSound = document.getElementById("hoverSound");
const selectSound = document.getElementById("selectSound");

button.addEventListener("mouseenter", function () {
    hoverSound.currentTime = 0;
        hoverSound.play();
});

function showvideo() {
    selectSound.currentTime = 0;
    selectSound.play();

    document.querySelector("#doorvid").style.display = "block";
    document.querySelector("#doorbut").style.display = "none";
    
    const video = document.getElementById("doorvid");
    video.play();
    video.onended = function () {
        if (window.location.href.includes("hallway.html")) {
            window.location.href = "index.html";
        }
        else {
            window.location.href = "hallway.html";
        }
    };
}
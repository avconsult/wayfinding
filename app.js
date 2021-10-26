
const imageMapContainer = document.getElementById("map-container");
const imageMap = document.getElementById("my-map");
const videoPlayer = document.getElementById("video-player");

function playvideo(){
    imageMap.classList.add('animate__backOutLeft');
    videoPlayer.style.display = 'block';
    videoPlayer.classList.add('animate__backInRight');
    imageMap.style.display = 'none';
    setTimeout(function () {
            videoPlayer.play();
        }, 500);
}

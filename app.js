
const imageMapContainer = document.getElementById("map-container");
const imageMap = document.getElementById("my-map");
const videoPlayer = document.getElementById("video-player");
const closeVideoButton = document.getElementById("exit-video");
const tapGesture = document.getElementById("touch-here");
const poiGrid = document.getElementById("destinations-grid");

function playvideo(){
    videoPlayer.style.display = 'block';
    videoPlayer.classList.add('animate__backInRight');
    imageMap.style.display = 'none';
    setTimeout(function () {
            videoPlayer.play();
        }, 500);
    setTimeout(function () {
       closeVideoButton.style.visibility = 'visible';
    }, 1000);
}

function closeVideo(){
    closeVideoButton.style.visibility = 'hidden';
    videoPlayer.style.display = 'none';
    imageMap.style.display = 'flex';
    imageMap.classList.add('animate__backInLeft');
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
}

function resetTapGesture(){
    tapGesture.style.display = 'none';
    setTimeout(function (){
        tapGesture.style.display = 'block';
    }, 60000); // show tap again after one minute
}

function showPoiGrid(){
    poiGrid.style.display = 'grid';
    poiGrid.classList.add("animate__fadeInUp");
    console.log('clicked POI');
}

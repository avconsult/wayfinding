
const imageMapContainer = document.getElementById("map-container");
const imageMap = document.getElementById("my-map");
const videoPlayer = document.getElementById("video-player");
const threeDview = document.getElementById('modelo-wrapper');

function playvideo(){
    imageMap.classList.add('animate__backOutLeft');
    videoPlayer.style.display = 'block';
    videoPlayer.classList.add('animate__backInRight');
    imageMap.style.display = 'none';
    setTimeout(function () {
            videoPlayer.play();
        }, 500);
}

function toggle3D(){
    console.log( window.getComputedStyle(imageMapContainer, null).display )
    if( window.getComputedStyle(imageMapContainer, null).display == 'none' ){
        imageMapContainer.style.display = 'flex';
        threeDview.style.display = 'none';
    } else {
        imageMapContainer.style.display = 'none';
        threeDview.style.display = 'block';
    }

}

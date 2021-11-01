
const imageMapContainer = document.getElementById("map-container");
const imageMap = document.getElementById("my-map");
const videoPlayer = document.getElementById("video-player");
const closeVideoButton = document.getElementById("exit-video");

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


// function toggle3D(){
//     console.log( window.getComputedStyle(imageMapContainer, null).display )
//     if( window.getComputedStyle(imageMapContainer, null).display == 'none' ){
//         imageMapContainer.style.display = 'flex';
//         threeDview.style.display = 'none';
//     } else {
//         imageMapContainer.style.display = 'none';
//         threeDview.style.display = 'block';
//     }
//
// }

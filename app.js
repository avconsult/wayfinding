const imageMap = document.getElementById("my-map");
const videoPlayer = document.getElementById("video-player");
const closeVideoButton = document.getElementById("exit-video");
const tapGesture = document.getElementById("touch-here");
const poiGrid = document.getElementById("destinations-grid");
const langList = document.getElementById("language-list");
const englishDiv = langList.firstElementChild;
const arabicDiv = langList.childNodes[3];


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
    langList.style.display = 'none';
    poiGrid.classList.add("animate__fadeInUp");
}

function showLanguages(){
    poiGrid.style.display = 'none';
    langList.style.display = 'flex';
    langList.classList.add("animate__fadeInUp");
}

function changeToArabic(){
    englishDiv.classList.remove('selected');
    englishDiv.getElementsByTagName('span')[0].textContent = '';
    englishDiv.getElementsByTagName('span')[0].classList.remove('check');
    arabicDiv.classList.add('selected');
    arabicDiv.getElementsByTagName('span')[0].textContent = '✔';
    arabicDiv.getElementsByTagName('span')[0].classList.add('check');
    setTimeout(function () {
        window.location.href = "arabic/arabindex.html";
    }, 100)
}

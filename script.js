let video = document.getElementById("video");

function play(){
    video.play();
}

function pause(){
    video.pause();
}

function stop(){
    video.pause();
    video.currentTime= 0;
    video.playbackRate= 1;   
}

function back(){
    video.currentTime-= 10;
}

function next(){
    video.currentTime+= 10;
}

function slow(){
    video.playbackRate-= 0.2;
}

function fast(){
    video.playbackRate+= 0.2;
}

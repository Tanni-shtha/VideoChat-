const videoGrid = document.getElementById('video-grid');
console.log(videoGrid);
const myVideo = document.createElement('video');
myVideo.muted = true;

let MyVideoStream
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    MyVideoStream = stream;
    addVideoStream(myVideo, stream);
} )


const addVideoStream = (video, stream) =>{
    video.srcObject = stream;
    video.addEventListener('loadmetadata', () =>{
        video.play();
    })
    videoGrid.append(video);
}


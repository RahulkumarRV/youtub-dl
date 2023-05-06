const form = document.querySelector("form");
const url = document.querySelector("input");
var videos = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  var videoUrl = url.value;
  console.log(videoUrl);
  var video = document.createElement("video");
  video.src = "/view?url=" + videoUrl;
  video.id = 'video-el'
  video.controls = true;
  video.playsInline = true;
  const videoContainer = document.getElementById('video-container');
  videoContainer.appendChild(video);
  videos.push(video);
});

function download () {
  const video = document.getElementById('video-el');
  const videoSource = video.src;

  const link = document.createElement('a');
  link.href = videoSource;
  link.download = 'video.mp4'
  link.click();
}
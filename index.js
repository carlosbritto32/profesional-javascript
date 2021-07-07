const video = document.querySelector("video");
const button = document.querySelector("button");

function mediaPlayer() {}

mediaPlayer.prototype.play = function () {
  video.play();
};

const player = new mediaPlayer();
button.onclick = () => video.play;

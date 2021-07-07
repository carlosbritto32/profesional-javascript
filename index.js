function mediaPlayer(config) {
  this.media = config.el;
}

mediaPlayer.prototype.play = function () {
  video.play();
};

mediaPlayer.prototype.pause = function () {
  video.pause();
};

mediaPlayer.prototype.togglePlay = function () {
  if (this.media.paused) {
    this.play();
  } else {
    this.pause();
  }
};

const video = document.querySelector("video");
const player = new mediaPlayer({ el: video });

const button = document.querySelector("button");

button.onclick = () => player.togglePlay();

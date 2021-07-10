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

export default mediaPlayer;

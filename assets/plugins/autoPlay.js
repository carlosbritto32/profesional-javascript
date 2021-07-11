function autoPlay() {}
autoPlay.prototype.run = function (player) {
  player.toggleMute();
  player.play();
};

export default autoPlay;

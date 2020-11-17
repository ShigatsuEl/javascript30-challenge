const speed = document.querySelector(".speed");
const speedBar = document.querySelector(".speed-bar");
const video = document.querySelector(".flex");

function handleMove(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + "%";
  const playBackRate = percent * (max - min) + min;
  speedBar.style.height = height;
  speedBar.textContent = playBackRate.toFixed(2) + "x";
  video.playbackRate = playBackRate;
}

function init() {
  speed.addEventListener("mousemove", handleMove);
}

init();

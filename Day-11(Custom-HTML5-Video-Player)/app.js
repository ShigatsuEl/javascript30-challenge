const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip");
const ranges = player.querySelectorAll(".player__slider");

let mousedown = false;

function scrub(e) {
  // offset은 상대적 위치를 냅니다.
  // e.offsetX는 이벤트가 일어날 곳을 기준으로 x좌표를 매깁니다. 여기서는 progress가 기준이 됩니다.
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function handleRangeUpdate() {
  // video속성을 range의 name값을 가져와 value값으로 설정합니다.
  // 전에 dataset으로 지정값을 가져오는 것과 비슷한 유형입니다.
  video[this.name] = this.value;
}

function skip() {
  // 여기서 중요한 것은 dataset.skip은 문자열이기 때문에 그냥 집어넣으면 타입에러가 납니다. -> 정수형으로 변경!
  video.currentTime += parseInt(this.dataset.skip);
}

function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();

  /* if(video.paused) {
    video.play();
  } else {
    video.pause();
  } */
}

function init() {
  video.addEventListener("click", togglePlay);
  toggle.addEventListener("click", togglePlay);
  video.addEventListener("play", updateButton);
  video.addEventListener("pause", updateButton);
  video.addEventListener("timeupdate", handleProgress);
  skipButtons.forEach((button) => button.addEventListener("click", skip));
  ranges.forEach((range) =>
    range.addEventListener("change", handleRangeUpdate)
  );
  ranges.forEach((range) =>
    range.addEventListener("mousemove", handleRangeUpdate)
  );
  progress.addEventListener("click", scrub);
  progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
  progress.addEventListener("mousedown", () => (mousedown = true));
  progress.addEventListener("mouseup", () => (mousedown = false));
}

init();

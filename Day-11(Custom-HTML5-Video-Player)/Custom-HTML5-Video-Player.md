## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-11(Custom-HTML5-Video-Player)/index.html" target="_blank">Day 11 - Custom HTML5 Video Player</a>

## HTML 코드

```
<body>
  <div class="player">
    <video class="player__video viewer" src="그랜드체이스-희망.mp4"></video>

    <div class="player__controls">
      <div class="progress">
       <div class="progress__filled"></div>
      </div>
      <button class="player__button toggle" title="Toggle Play">►</button>
      <input type="range" name="volume" class="player__slider" min="0" max="1" step="0.05" value="1">
      <input type="range" name="playbackRate" class="player__slider" min="0.5" max="2" step="0.1" value="1">
      <button data-skip="-10" class="player__button">« 10s</button>
      <button data-skip="10" class="player__button">10s »</button>
    </div>
  </div>
</body>
```

## CSS 코드

```
너무 많아서 생략하겠음
깃헙코드에 올려두었음!
```

## JavaScript 코드

```
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
```

전에 유튜브 클론 코딩을 하면서 비디오 커스텀을 해본 적이 있다.<br>
한 번 해본 경험이 있어서 지루할 것 같았는데 내가 전에 만들었던 자바스크립트 코드보다 훨씬 간결하고 이렇게 쉽게 구현되는 것인지 알고서 놀랐다.<br>
같은 방법인데 다르게 느껴져 허무한 느낌이 든다.<br>

나와 다른 것들과 훨씬 더 좋다고 느낀 방법을 몇 가지 보자면 속성값을 []을 통해 더 짧은 코드로 변경할 수 있었다.<br>
또한 dataset을 사용해 값을 변경하는 방법도 있었다.<br>
그리고 init()함수 마지막을 보면 mousemove 이벤트를 주었지만 마우스를 눌러야만 mousedown 불린값이 변경되어 mousemove이벤트가 실행이된다. 이 또한 매우 좋은 방법이라고 생각한다.<br>

## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-28(Video-Speed-Controller-UI)/index.html" target="_blank">Day 28 - Video Speed Controller UI</a>

## HTML 코드

```
<body>
  <div class="wrapper">
    <video class="flex" width="765" height="430" src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" loop controls></video>
    <div class="speed">
      <div class="speed-bar">1×</div>
    </div>
  </div>
</body>
```

## CSS 코드

```
body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #4c4c4c url("https://unsplash.it/1500/900?image=1021");
  background-size: cover;
  font-family: sans-serif;
}

.wrapper {
  width: 850px;
  display: flex;
}

video {
  box-shadow: 0 0 1px 3px rgba(0, 0, 0, 0.1);
}

.speed {
  background: #efefef;
  flex: 1;
  display: flex;
  align-items: flex-start;
  margin: 10px;
  border-radius: 50px;
  box-shadow: 0 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.speed-bar {
  width: 100%;
  background: linear-gradient(-170deg, #2376ae 0%, #c16ecf 100%);
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  color: white;
  height: 16.3%;
}
```

## JavaScript 코드

```
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
```

이번 챌린지는 이전에 했던 것들과 많이 중복된다. 복습하는 차원에서 다시 한 번 해보자.<br>
이제 무엇을 할지 시작하기도 예상이 가는데 마우스 이벤트를 통해서 퍼센트를 얻어와 조작하고 비디오 속도값을 퍼센트로 다루는 것<br>
한 눈에 들어올 정도로 자바스크립트가 익숙해졌다. 여기서는 더 이상 다뤄볼 내용은 없는 것 같다.<br>

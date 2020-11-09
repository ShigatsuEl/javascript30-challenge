## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-01(JavaScript-Drum-Kit)/index.html" target="_blank">Day 01 - JavaScript Drum Kit</a>

## HTML 코드

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>JS Drum Kit</title>
  <script defer src="app.js"></script>
</head>
<body>
  <div class="keys">
    <div data-key="65" class="key">
      <kbd>A</kbd>
      <span class="sound">Sound1</span></div>
    <div data-key="83" class="key">
      <kbd>S</kbd>
      <span class="sound">Sound2</span></div>
    <div data-key="68" class="key">
      <kbd>D</kbd>
      <span class="sound">Sound3</span></div>
    <div data-key="70" class="key">
      <kbd>F</kbd>
      <span class="sound">Sound4</span></div>
    <div data-key="71" class="key">
      <kbd>G</kbd>
      <span class="sound">Sound5</span></div>
    <div data-key="72" class="key">
      <kbd>H</kbd>
      <span class="sound">Sound6</span></div>
    <div data-key="74" class="key">
      <kbd>J</kbd>
      <span class="sound">Sound7</span></div>
    <div data-key="75" class="key">
      <kbd>K</kbd>
      <span class="sound">Sound8</span></div>
    <div data-key="76" class="key">
      <kbd>L</kbd>
      <span class="sound">Sound9</span></div>
  </div>

  <audio src="./sounds/sound 01.wav" data-key="65"></audio>
  <audio src="./sounds/sound 02.wav" data-key="83"></audio>
  <audio src="./sounds/sound 03.wav" data-key="68"></audio>
  <audio src="./sounds/sound 04.wav" data-key="70"></audio>
  <audio src="./sounds/sound 05.wav" data-key="71"></audio>
  <audio src="./sounds/sound 06.wav" data-key="72"></audio>
  <audio src="./sounds/sound 07.wav" data-key="74"></audio>
  <audio src="./sounds/sound 08.wav" data-key="75"></audio>
  <audio src="./sounds/sound 09.wav" data-key="76"></audio>
</body>
</html>
```

## JavaScript 코드

```
const keys = document.querySelectorAll(".key");

function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  event.target.classList.remove("playing");
}

function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  if (!audio) return;

  pauseSound();

  audio.play();
  audio.currentTime = 0;

  key.classList.add("playing");
}

function pauseSound() {
  const audio1 = document.querySelector(`audio[data-key="65"]`);
  const audio2 = document.querySelector(`audio[data-key="83"]`);
  const audio3 = document.querySelector(`audio[data-key="68"]`);
  const audio4 = document.querySelector(`audio[data-key="70"]`);
  const audio5 = document.querySelector(`audio[data-key="71"]`);
  const audio6 = document.querySelector(`audio[data-key="72"]`);
  const audio7 = document.querySelector(`audio[data-key="74"]`);
  const audio8 = document.querySelector(`audio[data-key="75"]`);
  const audio9 = document.querySelector(`audio[data-key="76"]`);

  // Keyboard event는 모든 게 read-only이므로 event가 변화할 때 감지할 수 있는 방법이 없다.
  // 따라서 모든 오디오를 찾아서 멈추게 하는 방식으로 소리가 변화하는 느낌을 주었다.
  audio1.pause();
  audio2.pause();
  audio3.pause();
  audio4.pause();
  audio5.pause();
  audio6.pause();
  audio7.pause();
  audio8.pause();
  audio9.pause();
}

function init() {
  window.addEventListener("keydown", playSound);
  keys.forEach((ele) =>
    ele.addEventListener("transitionend", removeTransition)
  );
}

init();
```

우선 브라우저에서 창이나 탭을 표현하는 `window`객체에 키를 누르는 이벤트가 발생할 시, 피아노 소리를 추가했습니다.<br>
(피아노 오디오는 piano sound kit을 검색해 나온 파일을 가져왔습니다.)<br>
챌린지를 하면서 신박했던 점은 querySelector를 백틱을 사용해서도 가져올 수 있다는 것이었다.<br>
게다가 []기호를 사용해 property(속성)을 가져올 수 있다는 것도 덤으로 알았다.<br>
기억해야 할 것은 속성값을 ""(큰 따옴표)로 묶어주지 않고 `audio[data-key=${event.key}]`와 같이 설정하면 속성값을 읽어오지 못합니다.<br>
그리고 앞에서 쓰인 data속성은 `사용자 지정 데이터 특성(custom data attributes)`으로 특성 클래스를 형성함으로써 HTML과 DOM사이에서 데이터를 주고 받을 수 있는 방법입니다.<br>
읽기-쓰기가 모두 가능하므로 아주 유용하게 사용될 수 있습니다.<br>

data로 받아온 audio를 재생시키고 연타로 누를 상황을 대비해 currentTime을 0으로 세팅했습니다.<br>
챌린지와 다르게 추가한 점은 다른 키를 눌렀을 즉시 원래 재생하던 audio를 멈추게 하고 새로운 audio를 재생시키는 방법을 추가했습니다.<br>
event.keyCode 변화를 감지할 수 있는 방법이 없으므로([event.keyCode change](https://stackoverflow.com/questions/8776543/how-to-catch-event-keycode-and-change-it-to-another-keycode)) 내가 생각해낸 방법은 소리를 변경할 시 재생하는 모든 피아노를 멈추는 함수(pauseSound)를 추가하고 새로운 피아노 음을 재생시켜 마치 소리가 변화하는 느낌을 주었다.<br>

키들은 querySelectorAll을 통해 배열로 받아와 forEach문을 이용해 각 element들이 트랜지션이 끝날 때 효과를 없애는 함수를 추가했습니다.<br>

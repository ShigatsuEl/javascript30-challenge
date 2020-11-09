## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-02(JS+CSS_Clock)/index.html" target="_blank">Day 02 - JS and CSS Clock</a>

## HTML 코드

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>JS and CSS Clock</title>
  <script defer src="app.js"></script>
</head>
<body>
  <div class="clock">
    <div class="clock-face">
      <div class="hand hour-hand"></div>
      <div class="hand min-hand"></div>
      <div class="hand second-hand"></div>
      <div class="zero-oclock oclock">12</div>
      <div class="one-oclock oclock">1</div>
      <div class="two-oclock oclock">2</div>
      <div class="three-oclock oclock">3</div>
      <div class="four-oclock oclock">4</div>
      <div class="five-oclock oclock">5</div>
      <div class="six-oclock oclock">6</div>
      <div class="seven-oclock oclock">7</div>
      <div class="eight-oclock oclock">8</div>
      <div class="nine-oclock oclock">9</div>
      <div class="ten-oclock oclock">10</div>
      <div class="eleven-oclock oclock">11</div>
    </div>
  </div>
</body>
</html>
```

## CSS 코드

```
html {
  background: #018ded
    url(https://videohive.img.customer.envatousercontent.com/files/257066021/Clock%20Background.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=defc6e5bd5caa1ca60fa52e4ae70185f);
  background-size: 100vw 100vh;
  font-family: "helvetica neue";
  text-align: center;
  font-size: 10px;
}

body {
  margin: 0;
  font-size: 2rem;
  display: flex;
  flex: 1;
  min-height: 100vh;
  align-items: center;
}

.clock {
  width: 30rem;
  height: 30rem;
  border: 5px solid white;
  border-radius: 50%;
  margin: 50px auto;
  padding: 2rem;
  position: relative;
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1), inset 0 0 0 3px #efefef,
    inset 0 0 10px black, 0 0 10px rgba(0, 0, 0, 0.2);
}

.clock-face {
  position: relative;
  width: 100%;
  height: 100%;
}

.hand {
  width: 50%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background: black;
  position: absolute;
  top: 50%;
  transition: all 1s;
  transition-timing-function: linear;
  transform-origin: 100%; /*x-offset | y-offset | z-offset, 여기서는 x축 맨 오른쪽에 중심을 설정함*/
}

.hour-hand {
  height: 6px;
  transform: translateY(-3px) rotate(90deg); /* account for the height of the clock hands */
}
.min-hand {
  height: 4px;
  transform: translateY(-2px) rotate(90deg); /* account for the height of the clock hands */
}
.second-hand {
  height: 2px;
  transform: translateY(-1px) rotate(90deg); /* account for the height of the clock hands */
}

.oclock {
  font-weight: 600;
}

.zero-oclock {
  position: absolute;
  top: -20%;
  left: calc(50% - 1rem);
}

.one-oclock {
  position: absolute;
  top: -10%;
  right: calc(17% - 1rem);
}

.two-oclock {
  position: absolute;
  top: 12%;
  right: calc(-5% - 1rem);
}

.three-oclock {
  position: absolute;
  top: calc(50% - 1rem);
  right: -15%;
}

.four-oclock {
  position: absolute;
  bottom: -12%;
  right: calc(20% - 1rem);
}

.five-oclock {
  position: absolute;
  bottom: 12%;
  right: calc(-5% - 1rem);
}

.six-oclock {
  position: absolute;
  bottom: -20%;
  right: calc(50% - 1rem);
}

.seven-oclock {
  position: absolute;
  bottom: -12%;
  left: calc(20% - 1rem);
}

.eight-oclock {
  position: absolute;
  bottom: 12%;
  left: calc(-5% - 1rem);
}

.nine-oclock {
  position: absolute;
  top: calc(50% - 1rem);
  left: -17%;
}

.ten-oclock {
  position: absolute;
  top: 12%;
  left: calc(-8% - 1rem);
}

.eleven-oclock {
  position: absolute;
  top: -12%;
  left: calc(16% - 1rem);
}
```

## JavaScript 코드

```
const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  calcRotate(secondDegrees, minsDegrees, hourDegrees);
}

function calcRotate(secondDegrees, minsDegrees, hourDegrees) {
  if (secondDegrees === 90) {
    secondHand.style.transition = "none";
  } else {
    secondHand.style.transition = "all 1s linear";
  }
  if (minsDegrees === 90) {
    minHand.style.transition = "none";
  } else {
    minHand.style.transition = "all 1s linear";
  }
  if (hourDegrees === 90) {
    hourHand.style.transition = "none";
  } else {
    hourHand.style.transition = "all 1s linear";
  }
}

function init() {
  setInterval(setDate, 1000);
}

init();
```

챌린지를 하기 전에 예전에 디지털 시계는 만들어본 적이 있는데 아날로그는 어떻게 만들어야 할 지 도저히 상상이 가지 않았다.<br>
하지만 CSS 코드를 짜보고나서 내가 이미 알고 있었던 것이었음을 깨달았다.<br>
다 만들어보고서 든 생각은 시계를 굳이 아날로그 디지털이 아니어도 자바스크립트 코드만 Date객체로 활용할 줄 안다면 여러 방면으로 활용이 가능하겠다는 생각이 들었다.<br>
예를 들어 어떤 지정된 시간마다 무엇을 발생시키는 함수를 적용한다던지 하루 시간을 모래시계로 나타내느 것도 가능할 것이다.<br>
지금 안적어두면 나중에는 까먹어둘 것 같아 적어둔다.<br>

자바스크립트는 역시 예상한대로 Web API 중 하나인 Date객체를 사용해서 시간을 불러올 수 있었다.<br>
시간이 1초 지날 때마다 CSS rotate를 지정해줌으로써 마치 아날로그처럼 작동하게 만들었다.<br>
아쉬웠던 점은 각도를 계산할 때 450도가 지나가면 다시 90도로 돌아오는데 이것을 CSS가 반대방향으로 돌려 90도로 이동하는 부작용을 보였다.<br>
나는 이것을 90도가 되는 순간 transition을 off시켜서 배~앵 돌아가지 않도록 만들었다.<br>
그럼에도 90도가 되는 순간 transition이 꺼져 멈추는 현상이 1초동안 발생하는데 이것은 requestAnimationFrame이나 svg를 사용하지 않는 이상 바닐라JS로 해결할 수 있는 방법은 아쉽게도 찾지 못했다.<br>

## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-08(Fun-with-HTML5-Canvas)/index.html" target="_blank">Day 08 - Fun with HTML5 Canvas</a>

## HTML 코드

```
<body>
  <canvas id="draw" width="800" height="800"></canvas>

  <style>
    html, body {
      margin: 0;
    }
  </style>
</body>
```

## JavaScript 코드

```
const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY]; // lastX = e.offsetX; lastY = e.offsetY;

  hue++;
  if (hue > 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

function init() {
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]; // lastX = e.offsetX; lastY = e.offsetY;
  });
  canvas.addEventListener("mouseup", () => (isDrawing = false));
  canvas.addEventListener("mouseout", () => (isDrawing = false));
}

init();
```

처음 배울 때는 굉장히 생소하고 어렵게 느껴졌는데 사실 코드를 다 써보고 나면 몇 줄 없다는 게 함정이다.<br>
위 코드는 canvas의 가장 기초적인 부분을 다룬 것이며 canvas에 대해 깊숙히 파고들면 자바스크립트로도 굉장히 인터랙티브한 웹을 만들어 볼 수가 있기 때문에 어느정도 배우는 것을 추천한다.<br>
설명할 것이라고는 얼마 없지만 캔버스 상에서 움직이면 draw 함수를 실행하지만 mousedown이벤트가 발생해야 isDrawing값이 true가 되서 draw함수가 작동하므로 이것을 잘 기억해둬야 한다.<br>
어떤 것이든지 무엇이 했는지 아닌지 판단하기 위해선 boolean값을 사용하는 것이 좋다는 것을 기억해두자.<br>

beginPath() 메서드로 경로시작 -> moveTo() 메서드로 시작점 갱신 -> lineTo() 메서드로 라인 끝점위치를 갱신 -> stroke() 메서드로 라인을 그림<br>
캔버스를 보면 선이 아니라 마치 자유자재로 꺾이는 곡선같아보이지만 그릴때마다 시작점과 끝점이 갱신되서 선을 촘촘하게 따라 그리기에 그렇게 보이는 것이다.<br>

## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-05(Flex-Panels-Image-Gallery)/index.html" target="_blank">Day 05 - Flex Panels Image Gallery</a>

## HTML코드

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href='https://fonts.googleapis.com/css?family=Amatic+SC' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="style.css">
  <title>Flex Panels Image Gallery</title>
  <script defer src="app.js"></script>
</head>
<body>
  <div class="panels">
    <div class="panel panel1">
      <p>Jahard</p>
      <p>God</p>
      <p>Yuri</p>
    </div>
    <div class="panel panel2">
      <p>Agero Agnis</p>
      <p></p>
      <p>Kun</p>
    </div>
    <div class="panel panel3">
      <p>Bam</p>
      <p>of</p>
      <p>25th</p>
    </div>
    <div class="panel panel4">
      <p>Rekeuleisyeo</p>
      <p></p>
      <p>Rak</p>
    </div>
    <div class="panel panel5">
      <p>Jahard</p>
      <p>Tower</p>
      <p>Endorsi</p>
    </div>
  </div>
</body>
</html>
```

## CSS 코드

```
html {
  box-sizing: border-box;
  background: lightblue;
  font-family: "helvetica neue";
  font-size: 20px;
  font-weight: 200;
}

body {
  margin: 0;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.panels {
  min-height: 100vh;
  overflow: hidden;
  display: flex;
}

.panel {
  background: #6b0f9c;
  box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.1);
  color: white;
  text-align: center;
  /* Safari transitionend event.propertyName === flex */
  /* Chrome + FF transitionend event.propertyName === flex-grow */
  transition: font-size 0.5s cubic-bezier(0.61, -0.19, 0.7, -0.11),
    flex 0.5s cubic-bezier(0.61, -0.19, 0.7, -0.11);
  font-size: 20px;
  background-size: auto 100vh;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 0;
}

.panel1 {
  background-image: url(https://upload2.inven.co.kr/upload/2016/02/22/bbs/i12735536829.jpg);
}
.panel2 {
  background-image: url(https://lh3.googleusercontent.com/proxy/-3S89PeM6IMroDx_9GGvr8gPuONMTBipqFaKOiCuq13ElPdotNlKhHZB-9zCNZcj9EaQFGE16FkBQdg);
}
.panel3 {
  background-image: url(https://i.pinimg.com/originals/9a/b8/7a/9ab87a3e43cac4c66d2f41ef92581fb3.jpg);
}
.panel4 {
  background-image: url(https://image.yes24.com/goods/90327789/800x0);
}
.panel5 {
  background-image: url(https://image.yes24.com/goods/90327811/800x0);
}

/* Flex Children */
.panel > * {
  margin: 0;
  width: 100%;
  transition: transform 0.5s;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}

.panel > *:first-child {
  transform: translateY(-100%);
}

.panel.open-active > *:first-child {
  transform: translateY(200%);
}

.panel > *:last-child {
  transform: translateY(100%);
}

.panel.open-active > *:last-child {
  transform: translateY(-200%);
}

.panel p {
  text-transform: uppercase;
  font-family: "Amatic SC", cursive;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45);
  font-size: 2em;
}

.panel p:nth-child(2) {
  font-size: 4em;
}

.panel.open {
  flex: 5;
  font-size: 40px;
  background-size: auto 100vh;
  background-repeat: no-repeat;
}

.panel.close {
  /* display: none; */
}
```

CSS를 하면서 아쉬웠던 점은 close클래스를 토글하여 div가 최대한 줄어들게 만드는 것을 상상하였으나 아쉽게도 width를 0으로 만들거나 display: none;으로 하는 것 외에는 방법이 없었다.<br>
위와 같은 방법도 괜찮은 방법이지만 굳이 이렇게 할 것이라면 open클래스로 토글하는 것을 만들필요도 없었을 것 같아 무의미한 것 같아 되돌렸다.<br>
강의와 다르게 새롭게 추가해본 점은 translateY를 색다르게 표현해주었다.<br>

## JavaScript 코드

```
const panels = document.querySelectorAll(".panel");
const array = Array.from(panels);

function toggleActive(event) {
  if (event.propertyName.includes("flex-grow")) {
    this.classList.toggle("open-active");
  }
}

function toggleClose() {
  const noClickPanel = array.filter((index) => {
    if (index.className.includes("open")) {
      return false;
    } else {
      return true;
    }
  });
  noClickPanel.forEach((panel) => {
    panel.classList.toggle("close");
  });
}

function toggleOpen() {
  this.classList.toggle("open");
  toggleClose();
  this.classList.remove("close");
}

function init() {
  array.forEach((panel) => panel.addEventListener("click", toggleOpen));
  panels.forEach((panel) =>
    panel.addEventListener("transitionend", toggleActive)
  );
}

init();
```

클릭 이벤트 시 open클래스를 추가한다.<br>
또한 open클래스로부터 transition이 끝나면 transitionend 이벤트가 실행되어 open-active클래스를 토글하여 패널처럼 만들어주었다.<br>
강의에 더 추가해본 것은 클릭되지 않은 패널들에 한해서 close클래스를 추가할 수 있도록 맨 위에서 NodeList를 Array로 바꾸는 작업을 해주었다.<br>
중요한 점은 Arra.from(NodeList)로 끝나는 것이 아니라 반환값을 변수에 할당해주어야 한다.<br>
Array filter메서드를 활용해 open클래스가 없는 패널들만 close 클래스를 할당해주었다.<br>
시험해보다 생긴 문제점이 있었는데 클릭을 하는 패널도 open이 없어질 때 close클래스가 들어가는 것 때문에 toggleOpen함수 아래에 remove 메서드를 추가했다.<br>

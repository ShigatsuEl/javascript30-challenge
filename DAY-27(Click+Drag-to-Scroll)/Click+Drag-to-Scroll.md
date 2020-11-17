## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-27(Click+Drag-to-Scroll)/index.html" target="_blank">Day 27 - Click and Drag to Scroll</a>

## HTML 코드

```
<body>
  <div class="items">
    <div class="item item1">01</div>
    <div class="item item2">02</div>
    <div class="item item3">03</div>
    <div class="item item4">04</div>
    <div class="item item5">05</div>
    <div class="item item6">06</div>
    <div class="item item7">07</div>
    <div class="item item8">08</div>
    <div class="item item9">09</div>
    <div class="item item10">10</div>
    <div class="item item11">11</div>
    <div class="item item12">12</div>
    <div class="item item13">13</div>
    <div class="item item14">14</div>
    <div class="item item15">15</div>
    <div class="item item16">16</div>
    <div class="item item17">17</div>
    <div class="item item18">18</div>
    <div class="item item19">19</div>
    <div class="item item20">20</div>
    <div class="item item21">21</div>
    <div class="item item22">22</div>
    <div class="item item23">23</div>
    <div class="item item24">24</div>
    <div class="item item25">25</div>
  </div>
```

## CSS 코드

```
body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  font-size: 20px;
  margin: 0;
}

.items {
  height: 800px;
  padding: 100px;
  width: 100%;
  border: 1px solid white;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;
  transform: scale(0.98);
  will-change: transform;
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  font-size: 0;
  perspective: 500px;
}

.items.active {
  background: rgba(255, 255, 255, 0.3);
  cursor: grabbing;
  cursor: -webkit-grabbing;
  transform: scale(1);
}

.item {
  width: 200px;
  height: calc(100% - 40px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  font-weight: 100;
  color: rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 0 0 10px rgba(0, 0, 0, 0.15);
}

.item:nth-child(9n + 1) {
  background: dodgerblue;
}
.item:nth-child(9n + 2) {
  background: goldenrod;
}
.item:nth-child(9n + 3) {
  background: paleturquoise;
}
.item:nth-child(9n + 4) {
  background: gold;
}
.item:nth-child(9n + 5) {
  background: cadetblue;
}
.item:nth-child(9n + 6) {
  background: tomato;
}
.item:nth-child(9n + 7) {
  background: lightcoral;
}
.item:nth-child(9n + 8) {
  background: darkslateblue;
}
.item:nth-child(9n + 9) {
  background: rebeccapurple;
}

.item:nth-child(even) {
  transform: scaleX(1.31) rotateY(40deg);
}
.item:nth-child(odd) {
  transform: scaleX(1.31) rotateY(-40deg);
}
```

이번 챌린지는 보자마자 신기했다. 어떻게 아이템들을 엇각으로 빗대게 만들어둔걸까라는 생각을 했다.<br>
더 놀라운 것은 스크롤링을 하면 아이템들이 3d처럼 안보이거나 보이게 만드는 효과가 있었는데 나는 처음에 자바스크립트로 이것을 한 줄 알았다. 그러나 이것을 단지 CSS로만 했다는 것에 대해 대단하다고 생각했다.<br>
이것을 안 이후로 CSS 코드를 꼼꼼히 살펴봤다. 내가 모르는 것 중에 무엇이 이렇게 만들었는지 찾기 위해서 말이다.<br>
결국 perspective라는 속성이 3d관점으로 만들어준다는 것을 알았다. 하지만 이것만으로는 되지 않는다. 이번 챌린지처럼 하기 위해서는 rotateY를 반드시 같이 사용해줘야 perspective의 완전한 효과를 체험할 수 있다.<br>

## JavaScript 코드

```
const slider = document.querySelector(".items");

let isDown = false;
let startX;
let scrollLeft;

function init() {
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk * 3;
  });
  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });
}

init();
```

자바스크립트 코드는 너무 간단해서 할 말이 없었다..<br>
역시 내가 생각한 대로 mouse에 관련된 이벤트들을 사용을 했고, 내가 어디를 기준으로 스크롤링 할 것인지 기준점을 잡는 startX와 스크롤링을 얼마나 했는지에 관한 scrollLeft 변수를 설정해주었다.<br>
페이지X 좌표에서 슬라이더의 왼쪽위치를 빼주었다. scrollLeft는 똑같이 scrollLeft를 사용해 측정하였다.<br>
또한 mousemove 이벤트에서도 startX와 똑같이 x라는 변수를 만들어주었는데 둘의 차이를 뺌으로서 마우스가 얼마나 드래깅했는지를 측정할 수 있었다.<br>

중요한 것은 마우스를 클릭할 때 말고도 마우스를 움직일 때마다 scrollLeft를 갱신해줘야 하는 것인데 이것을 하지 않으면 scrollLeft가 맨 처음 상태로 계속 리셋되기 때문에 스크롤링을 할 수가 없다.<br>

생각보다 어렵지만 나중에 한 번 더 만들라고 하면 따라보면서 만들수는 있을 것 같다.<br>
bouncy scrolling이라던가 inertial scrolling도 해보고 싶었지만 나중에 라이브러리에서 이것을 쉽게 할 수 있다고 하니 따로 해봐야겠다.<br>
![Inertial Scrolling](https://www.youtube.com/watch?v=l3cizzbo_wc)<br>
![Hover State](https://www.hoverstat.es/)<br>

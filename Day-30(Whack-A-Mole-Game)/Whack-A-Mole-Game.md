## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-30(Whack-A-Mole-Game)/index.html" target="_blank">Day 30 - Whack A Mole Game</a>

## HTML 코드

```
<body>
  <h1>Whack-a-mole! <span class="score">0</span></h1>
  <h2>Best Score! <span class="best-score">0</span></h2>
  <button onClick="startGame()">Start!</button>

  <div class="game">
    <div class="hole hole1">
      <div class="mole"></div>
    </div>
    <div class="hole hole2">
      <div class="mole"></div>
    </div>
    <div class="hole hole3">
      <div class="mole"></div>
    </div>
    <div class="hole hole4">
      <div class="mole"></div>
    </div>
    <div class="hole hole5">
      <div class="mole"></div>
    </div>
    <div class="hole hole6">
      <div class="mole"></div>
    </div>
  </div>
</body>
```

## CSS 코드

```
body {
  padding: 0;
  margin: 0;
  font-family: "Amatic SC", cursive;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  text-align: center;
  font-size: 10rem;
  line-height: 1;
  margin-bottom: 0;
}

button {
  margin-top: 20px;
  width: 100px;
  height: 30px;
}

.score {
  background: rgba(255, 255, 255, 0.2);
  padding: 0 3rem;
  line-height: 1;
  border-radius: 1rem;
}

.game {
  width: 600px;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}

.hole {
  flex: 1 0 33.33%;
  overflow: hidden;
  position: relative;
}

.hole:after {
  display: block;
  background: url(dirt.svg) bottom center no-repeat;
  background-size: contain;
  content: "";
  width: 100%;
  height: 70px;
  position: absolute;
  z-index: 2;
  bottom: -30px;
}

.mole {
  background: url(mole.svg) bottom center no-repeat;
  background-size: 60%;
  position: absolute;
  top: 100%;
  width: 100%;
  height: 100%;
  transition: all 0.4s;
}

.hole.up .mole {
  top: 0;
}

```

mole이 top 100%로 이동해있다가 up클래스가 추가되면 top 0가 되면서 뿅하고 튀어오르는 효과를 얻는다.<br>
hole은 z-index가 2인점을 명심하자.<br>

## JavaScript 코드

```
const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
const bestScoreText = document.querySelector(".best-score");
const scoreList = JSON.parse(localStorage.getItem("users")) || [];

let lastHole;
let timeUp = false;
let score = 0;

function bonk(e) {
  if (!e.isTrusted) return;
  score++;
  this.classList.remove("up");
  scoreBoard.textContent = score;
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => (timeUp = true), 10000);
}

function peep() {
  const time = randTime(200, 500);
  const hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) {
      peep();
    } else {
      bestScore(score);
    }
  }, time);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHole(holes);
  }

  lastHole = hole;

  return hole;
}

function randTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function bestScore(score) {
  const user = {
    score,
  };
  scoreList.push(user);
  localStorage.setItem("user", JSON.stringify(scoreList));
  const bestScore = scoreList
    .sort((a, b) => {
      if (a.score > b.score) {
        return -1;
      } else {
        return 1;
      }
    })
    .slice(0, 1);
  bestScoreText.textContent = bestScore[0].score;
}

function init() {
  moles.forEach((mole) => mole.addEventListener("click", bonk));
}

init();
```

두더지 잡는 게임을 자바스크립트로 만들어 본 것이다.<br>
먼저 2가지가 필요한데 `1️⃣어느 구멍에서 두더지가 튀어나올 것인지?` `2️⃣두더지가 나왔다가 언제 들어갈 것인지?`의 두가지 변수가 필요하다.<br>
start 버튼을 누르면 게임이 시작되고 peep() 함수로부터 두더지가 나오기 시작한다.<br>
게임이 언제 끝날 것인지는 역시나 boolean값으로 timeUp을 지정하고 true가 되는 순간 게임이 끝난다.<br>
강의를 추가로 localStorage에 점수를 저장해 가장 높은 점수를 보여주는 것을 넣어봤다.<br>
다 잘 동작하나 어째선지 페이지를 새로고침하고 스타트 버튼을 누르면 localStorage에 새롭게 배열이 들어가서 초기화되는 현상이 나타났다.<br>
아무래도 setItem을 넣는 순서를 잘못했기 때문이라고 생각된다.<br>

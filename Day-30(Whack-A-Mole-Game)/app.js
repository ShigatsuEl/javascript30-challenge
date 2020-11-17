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

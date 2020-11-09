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

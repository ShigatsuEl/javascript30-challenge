const timerDisplay = document.querySelector(".display__time-left");
const endTimeDisplay = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");

let countDown;

function timer(seconds) {
  // clear any exist times
  clearInterval(countDown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  // check if we should stop it!!
  countDown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countDown);
      return;
    }

    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  timerDisplay.textContent = display;
  document.title = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  const ajdustedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  endTimeDisplay.textContent = `Be Back at ${adjustedHour}:${ajdustedMinutes}`;
}

function submitTimer() {
  const time = this.value * 60;
  timer(time);
}

function startTimer() {
  const time = this.dataset.time;
  timer(time);
}

function init() {
  buttons.forEach((button) => button.addEventListener("click", startTimer));
  document.customForm.minutes.addEventListener("change", submitTimer);
  document.customForm.minutes.addEventListener("keyup", submitTimer);
  // document.customForm.minutes.addEventListener("submit", submitTimer);
}

init();

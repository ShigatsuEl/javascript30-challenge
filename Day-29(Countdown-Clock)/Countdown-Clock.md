## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-29(Countdown-Clock)/index.html" target="_blank">Day 29 - Countdown Clock</a>

## HTML 코드

```
<body>
  <div class="timer">
    <div class="timer__controls">
      <button data-time="20" class="timer__button">20 Secs</button>
      <button data-time="300" class="timer__button">Work 5</button>
      <button data-time="900" class="timer__button">Quick 15</button>
      <button data-time="1200" class="timer__button">Snack 20</button>
      <button data-time="3600" class="timer__button">Lunch Break</button>
      <form name="customForm" id="custom">
        <input type="text" name="minutes" placeholder="Enter Minutes">
      </form>
    </div>
    <div class="display">
      <h1 class="display__time-left"></h1>
      <p class="display__end-time"></p>
    </div>
  </div>
</body>
```

## CSS 코드

```
생략하겠습니다.
별 게 없는 듯 합니다.
```

## JavaScript 코드

```
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
```

wesbos의 챌린지를 하면서 느낀 것이 있다.<br>
wesbos는 오직 함수에서 모든 것을 다 처리한다. 예를 들어 button에만 사용하려고 만든 함수가 나중에 다른 태그에서도 사용될 수 있는 그런 함수가 되어야 한다.<br>
이번 챌린지는 카운트다운을 하는 것인데 wesbos는 시간을 넘겨주기만 하면 함수에서 알아서 다 처리가 된다.<br>
따라서 button 전용 form 전용 display 전용으로 하나씩 함수를 만들어주지 않고 timer함수에 시간만 주면 모든 것이 다 작동될 수 있도록 말이다.<br>
함수는 반드시 단 한 가지의 행동을 해야하며 호환성이 좋아야 한다. 어떻게 해야 그것을 가능하게 할지 앞으로 생각하면서 코딩하도록 하자.<br>

처음에 now랑 then이라는 변수를 만들었는데 나는 왜 굳이 이렇게 했을까? 그냥 숫자를 받아서 카운트다운 시키면 되지 않나라는 생각이 들었지만 다 끝내고보니 이 또한 좋은방법 같아 보였다.<br>
Date.now() 메서드를 사용하면 1970년대 1월을 기준으로 지금까지의 시각을 ms로 반환해준다.<br>
여기서 now는 Date.now()를 저장했으며 then은 카운트다운할 만큼의 초를 받아서 1000을 곱해 ms로 반환하였다. then에서 now를 빼면 당연히 countdown할 시간이 나올 것이다.<br>
setInterval을 걸어주어 countdown이 0이 되면 clearInterval을 사용하여 setInterval을 끝내줍니다.<br>

마지막으로 Date.now() 메서드에 인자로 숫자를 넣어주면 그에 맞는 Date 객체를 반환합니다.<br>
then을 변수로 넣어주게 되면 countdown이 끝나는 시점을 Date 객체로 반환하여 displayEndTime 함수를 사용할 수 있는 것 입니다.<br>

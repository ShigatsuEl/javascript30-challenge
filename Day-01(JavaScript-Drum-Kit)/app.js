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

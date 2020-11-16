## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-23(Speech-Synthesis)/index.html" target="_blank">Day 23 - Speech Synthesis</a>

## HTML 코드

```
<div class="voiceinator">

    <h1>The Voiceinator 5000</h1>

    <select name="voice" id="voices">
      <option value="">Select A Voice</option>
    </select>

    <label for="rate">Rate:</label>
    <input name="rate" type="range" min="0" max="3" value="1" step="0.1">

    <label for="pitch">Pitch:</label>

    <input name="pitch" type="range" min="0" max="2" step="0.1">
    <textarea name="text">Hello! I love JavaScript 👍</textarea>
    <button id="stop">Stop!</button>
    <button id="speak">Speak</button>

</div>
```

## JavaScript 코드

```
const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");
msg.text = document.querySelector('[name="text"]').value;

function setOption() {
  msg[this.name] = this.value;
  toggle();
}

function setVoice() {
  msg.voice = voices.find((voice) => voice.name === this.value);
  toggle();
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

function populateVoices() {
  voices = this.getVoices();
  const voiceOptions = voices
    .map(
      (voice) =>
        `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    )
    .join("");
  voicesDropdown.innerHTML = voiceOptions;
}

function init() {
  speechSynthesis.addEventListener("voiceschanged", populateVoices);
  voicesDropdown.addEventListener("change", setVoice);
  options.forEach((option) => option.addEventListener("change", setOption));
  speakButton.addEventListener("click", toggle);
  stopButton.addEventListener("click", toggle.bind(null, false));
}

init();
```

생각보다 이해가 안가는 부분이 있어서 시간이 오래걸렸다.<br>
먼저 SpeechSynthesisUtterance 와 speechSynthesis의 차이점을 명확하게 말할 수 없다.<br>
MDN문서에 의하면 SpeechSynthesisUtterance는 음성 요청을 나타내며 음성 서비스가 읽어야 하는 내용과 읽어야 하는 정보등이 포함되고,<br>
speechSynthesis는 음성 서비스에 대한 컨트롤러로 음성을 시작 및 중지할 수 있다고 한다.<br>
SpeechSynthesisUtterance를 생성해야 speechSynthesis를 사용할 수 있는건가 헷갈렸는데 둘은 아예 별개였다.<br>

나머지는 어려울 것 없이 문서에 있는 그대로 따라하기만 하면 쉽게 구현할 수 있었다.<br>

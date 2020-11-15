## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-20(Native-Speech-Recognition)/index.html" target="_blank">Day 20 - Native Speech Recognition</a>

## HTML 코드

```
<body>
  <div class="words" contenteditable>
  </div>
</body>
```

## JavaScript 코드

```
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

const words = document.querySelector(".words");
let p = document.createElement("p");
words.appendChild(p);

recognition.addEventListener("result", (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.textContent = transcript;
  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }
  console.log(transcript);
});

recognition.addEventListener("end", recognition.start);

recognition.start();
```

음성인식을 하여 paragraph에 출력하는 챌린지이다.<br>
굉장히 재밌었고 신기했다. 음성인식API는 처음 써봤는데 생각보다 어렵지도 않았다.<br>

사용한 API의 이름은 SpeechRegognition이다. 여기서는 크롬까지 지원할 수 있게 webkitSpeechRecognition도 추가했다.<br>
recognition.iterimResults는 중간 결과를 반환할지 아닐지를 결정하는 것으로 만약에 녹음을 하다가 잠시 쉬면 이어서 녹음하지 않고 바로 결과를 출력합니다.<br>
여기서는 멈추면 다음 paragraph로 넘어가게 할 것이기 때문에 true를 사용했습니다.<br>
이제 recognition.start()메서드를 사용해 음성인식을 시작하고 result를 반환할때마다 transcript를 뽑아내는데 이것이 실제로 녹음된 말들이 들어가 있습니다.<br>

중간중간 녹음을 마칠때마다 p태그의 textContent에 transcript를 넣어주고 words클래스를 가진 div에 p태그를 자식으로 집어넣습니다.<br>

또한 recognition 이벤트가 끝날때마다 recognition.start()메서드를 계속해서 실행시켜 무한으로 음성인식을 하는 효과를 주었습니다.<br>

어렵기는 하지만 문서를 찾으면서 하면 더 멋진 기능을 추가해볼 수 있다는 생각이 들었습니다.<br>
예를 들어 어떤 단어가 들어간 음성이 인식되면 시리처럼 특정동작을 해주는 것도 좋을 것 같다는 상상이 듭니다.<br>

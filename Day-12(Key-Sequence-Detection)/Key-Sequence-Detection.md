## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-12(Key-Sequence-Detection)/index.html" target="_blank">Day 12 - Key Sequence Detection</a>

## JavaScript 코드

```
const pressed = [];
const secretCode = "shigatsu";

function init() {
  window.addEventListener("keyup", (e) => {
    pressed.push(e.key);
    console.log(-secretCode.length - 1);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    console.log(pressed);

    if (pressed.join("") === secretCode) {
      console.log("You found it!");
      cornify_add();
    }
  });
}

init();

```

Array에 대해 조금 알게되었을 때 배열을 가지고 많은 것들을 할 수 있겠다고 생각했다.<br>
예를 들어 키보드에서 치는 것을 저장해서 그 중 매치되는 키 값을 발견하는 함수같은 것을 생각했었는데 이번 챌린지에서 실제로 해보게 된 것이다.<br>

대단히 어려운 것은 없고 splice를 하는 부분에서 이해가 가지 않아 막혔었는데 단지 secretCode의 길이만큼만 배열을 저장하는 방법이라고 생각하면 되겠다.<br>
잘 눈여겨봐야 할 것은 처음부터 인덱스를 시작하지 않고 뒤에서부터 secretCode의 길이보다 1개 더 길 경우 맨 앞의 인덱스 하나를 삭제하는 방식으로<br>
위에서는 총 8개의 secretCode의 길이를 가져 배열도 length를 8로 유지하게 된다.<br>

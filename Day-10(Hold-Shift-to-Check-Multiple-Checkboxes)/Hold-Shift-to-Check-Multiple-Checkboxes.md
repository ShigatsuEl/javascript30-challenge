## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-10(Hold-Shift-to-Check-Multiple-Checkboxes)/index.html" target="_blank">Day 10 - Hold Shift to Check Multiple Checkboxes</a>

## HTML 코드

```
<body>
  <div class="inbox">
    <div class="item">
      <input type="checkbox">
      <p>This is an inbox layout.</p>
    </div>
    <div class="item">
      <input type="checkbox">
      <p>Check one item</p>
    </div>
    <div class="item">
      <input type="checkbox">
      <p>Hold down your Shift key</p>
    </div>
    <div class="item">
      <input type="checkbox">
      <p>Check a lower item</p>
    </div>
    <div class="item">
      <input type="checkbox">
      <p>Everything in between should also be set to checked</p>
    </div>
    <div class="item">
      <input type="checkbox">
      <p>Try to do it without any libraries</p>
    </div>
    <div class="item">
      <input type="checkbox">
      <p>Just regular JavaScript</p>
    </div>
    <div class="item">
      <input type="checkbox">
      <p>Good Luck!</p>
    </div>
    <div class="item">
      <input type="checkbox">
      <p>Don't forget to tweet your result!</p>
    </div>
  </div>
</body>
```

## CSS 코드

```
html {
  font-family: sans-serif;
  background: #ffc600;
}

.inbox {
  max-width: 400px;
  margin: 50px auto;
  background: white;
  border-radius: 5px;
  box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.1);
}

.item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
}

.item:last-child {
  border-bottom: 0;
}

input:checked + p {
  background: #f9f9f9;
  text-decoration: line-through;
}

input[type="checkbox"] {
  margin: 20px;
}

p {
  margin: 0;
  padding: 20px;
  transition: background 0.2s;
  flex: 1;
  font-family: "helvetica neue";
  font-size: 20px;
  font-weight: 200;
  border-left: 1px solid #d1e2ff;
}
```

## JavaScript 코드

```
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(event) {
  // 체크가 어느 체크박스 사이에 이루어졌는지 알기 위해 inBetween값을 설정
  let inBetween = false;
  if (event.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      // 마지막으로 체크된 박스와 지금 체크된 박스 사이에서 inBetween을 true로 설정
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

function init() {
  checkboxes.forEach((checkbox) =>
    checkbox.addEventListener("click", handleCheck)
  );
}

init();
```

먼저 모든 체크박스들에 클릭이벤트를 추가하고 체크가 어느 박스 사이에서 이루어졌는지 알아내기 위해 wesbos가 사용한 방법은 inBetween이라는 불린값을 설정하여 이것을 해결했다.<br>
맨 처음 isBetween값을 false로 설정해두고 쉬프트키를 누르고 체크를 하게되면 모든 체크 박스들에 루프를 두어 마지막으로 체크된 박스와 shift키로 체크한 현재 값 사이에서 inBetween값을 true로 설정했다.<br>
이해하고 보면 쉬운 코드이지만 처음에는 this와 lastChecked 값을 똑같은 값으로 생각해 착오가 일어난 시간이 길어졌다.<br>

내가 생각한 방법은 먼저 체크박스를 배열로 변환하여 shiftkey를 눌렀을 때 인덱스값을 반환하여 그 사이값의 인덱스에 checked=true를 설정해보는 것이었다.<br>
코드를 생각해 보니 wesbos의 방법이 더 간결하고 좋은 것 같아 보인다.<br>
내가 간과하는 한가지는 불린값의 중요도를 알아채지 못해 자주 이용하지 못한다는 점이다.<br>
특히 if문을 사용할 때 불린값의 중요도는 올라가는데 이용할 생각을 못한다는 것이 아쉽다.<br>

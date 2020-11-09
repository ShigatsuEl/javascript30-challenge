## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-03(Playing-with-CSS-variables+JS)/index.html" target="_blank">Day 03 - Playing with CSS variables and JS</a>

## HTML 코드

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Playing with CSS variables and JS</title>
  <script defer src="app.js"></script>
</head>
<body>
  <h2>Update CSS Variables with <span class='hl'>JS</span></h2>

  <div class="controls">
    <label for="spacing">Spacing:</label>
    <input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px">

    <label for="blur">Blur:</label>
    <input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px">

    <label for="base">Base Color</label>
    <input id="base" type="color" name="base" value="#ffc600">
  </div>

  <img src="https://images.unsplash.com/photo-1604596011930-34918a953dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60">
</body>
</html>
```

## CSS 코드

```
:root {
  --base: #ffc600;
  --spacing: 10px;
  --blur: 10px;
}

body {
  text-align: center;
  background: #193549;
  color: white;
  font-family: "helvetica neue", sans-serif;
  font-weight: 100;
  font-size: 50px;
}

.hl {
  color: var(--base);
}

.controls {
  margin-bottom: 50px;
}

input {
  width: 100px;
}

img {
  padding: var(--spacing);
  background-color: var(--base);
  filter: blur(var(--blur));
}
```

CSS variables은 사용자 지정 속성으로 내가 새로 CSS 변수를 만들 수 있는 좋은 방법이다.<br>
보통 :root(DOM 객체의 최상위)에서 CSS variable을 `--variable`처럼 정의하고 var()함수를 사용해 사용할 수 있다.<br>
이렇게 만들어서까지 써야하는 이유는 대형 웹사이트를 만들 때 종종 많은 값을 반복적으로 사용하는데 CSS variable값을 사용하면 나중에 그 값 하나만 바꿔서 모든 것을 바꿔야 하는 상황을 회피할 수 있습니다.<br>
꼭 root에서 선언해야하는 것은 아니며 지정된 범위에서도 사용할 수 있다.<br>

## JavaScript 코드

```
const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  // suffix란 단어 뒤에 붙게되어 새로운 단어를 만드는 접미사이다.
  // this가 spacing || blur와 같이 px suffix를 쓰는 친구일 수도 있지만 base와 같이 data클래스가 없는 경우 빈 스트링을 반환하게 해야 함!
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

function init() {
  inputs.forEach((input) => input.addEventListener("change", handleUpdate));
  inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
  // change와 mousemove이벤트를 통해 trigger처럼 만들 수 있다.
}

init();
```

이번 챌린지에서 해볼 것은 바로 JavaScript로 앞에 나온 CSS Variable을 업데이트 하는 작업을 해보려고 합니다.<br>

먼저 inputs를 querySelectorAll을 통해 선언해줍니다.<br>
처음 알았던 것은 querySelectorAll을 사용하면 배열을 반환해주는 것으로 알았는데 NodeList를 반환해 준다.<br>
NodeList는 배열이랑 같지 않다. 예를 들어 NodeList는 forEach..와 같은 적은 메서드를 제공하는데 비해 Array는 배열이 사용할 수 있는 모든 메서드를 다 사용할 수 있다.<br>

inputs NodeList forEach메서드를 적용해서 change, mousemove이용해서 trigger를 가능하게 한다.<br>
change 메서드는 input태그와 textarea등 몇 개 한정해서만 가능한 이벤트이다.<br>
또한 input에서 위와 같은 상황에서 이벤트를 적용했기 때문에 가능한 일이지 다른 경우에서 사용하려면 drag에 관한 이벤트를 사용해야 할 것이다.<br>

input value에는 Number Type으로 지정되어 있는데 우리가 설정하고 싶은 값은 뒤에 px와 같은 suffix가 붙은 값이 필요하다.<br>
this를 통해 suffix를 가져오고 data클래스가 없는 input은 빈 스트링("")을 가져온다.<br>
마지막으로 documentElement.style.setProperty를 사용해 값을 지정해주면 value가 업데이트되는 것을 확인할 수 있다.<br>

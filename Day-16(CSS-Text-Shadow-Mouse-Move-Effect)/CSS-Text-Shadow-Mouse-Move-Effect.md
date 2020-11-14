## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-16(CSS-Text-Shadow-Mouse-Move-Effect)/index.html" target="_blank">Day 16 - CSS Text Shadow Mouse Move Effect</a>

## HTML 코드

```
<body>
  <div class="hero">
    <h1 contenteditable>🔥WOAH!</h1>
  </div>
</body>
```

## CSS 코드

```
.hero {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
}

h1 {
  text-shadow: 10px 10px 0 rgba(0, 0, 0, 1);
  font-size: 100px;
}
```

## JavaScript 코드

```
const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100; // 100px

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * 100 - walk / 2);
  const yWalk = Math.round((y / height) * 100 - walk / 2);

  console.log(xWalk, yWalk);

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 red,
  ${xWalk * -1}px ${yWalk}px 0 blue,
  ${xWalk}px ${yWalk * -1}px 0 green,
  ${xWalk * -1}px ${yWalk * -1}px 0 black
  `;
}

function init() {
  hero.addEventListener("mousemove", shadow);
}

init();
```

처음에 볼 때 CSS Text Shadow가 마우스 움직임에 반응해 변경되는 것이 매우 신기했었는데 어떻게 작동되는 것인지 확인해보겠습니다.<br>
이번 챌린지에서는 ES6 버전으로 작성한 것이다.<br>
hero태그는 스크린에서 브라우저 창 크기만큼의 width와 height를 가지며 마우스 움직임은 hero태그에 상대적으로 움직이는 값입니다.(offsetX / offsetY)<br>

알아두어야 할 것은 스크린에서 e.target을 콘솔로그 찍어보면 갑자기 어느순간 x좌표와 y좌표가 이상해지기 시작하는데 그 이유는 e.target이 hero태그 안에 있는 h1태그를 가리킬 때 target이 바뀌기 때문입니다.<br>
따라서 e.target이 h1으로 변경되었을 때 x값과 y값을 그에 맞에 변경해준 모습입니다.<br>

이제 css text shadow의 px값을 어느정도로 설정할지 정하는 코드를 보겠습니다.<br>
상단에 walk라는 변수에 100값을 주었는데 이것은 나중에 shadow x, y의 움직임을 결정하는 값이 되겠습니다.<br>
스크린의 중앙을 0,0으로 두고 오른쪽 아래로 이동하면 x / y 좌표는 (50, 50) 왼쪽 아래로 이동하면 (-50, -50)이 됩니다.<br>
이것은 100을 중심으로 반을 나누서 한쪽은 + 반대쪽은 -값으로 지정한 것입니다.<br>
이렇게 지정해준 xWalk / yWalk를 text shadow에 적용해보면 그만큼의 기울기로 shadow가 움직이는 것을 확인할 수 있습니다 :)<br>

결론 -> 스크린 상에서 일어나는 일에 따라 적용하기 위해서는 offset, offsetWidth 등 좌표에 관한 것들을 이용하면 뭐든지 할 수 있습니다.<br>

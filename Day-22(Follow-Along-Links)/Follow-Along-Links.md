## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-22(Follow-Along-Links)/index.html" target="_blank">Day 22 - Follow Along Links</a>

## HTML 코드

```
깃헙 소스를 참고하시길 바랍니다.
```

## CSS 코드

```
body {
  min-height: 100vh;
  margin: 0; /* Important! */
  font-family: sans-serif;
  background: linear-gradient(
      45deg,
      hsla(340, 100%, 55%, 1) 0%,
      hsla(340, 100%, 55%, 0) 70%
    ),
    linear-gradient(
      135deg,
      hsla(225, 95%, 50%, 1) 10%,
      hsla(225, 95%, 50%, 0) 80%
    ),
    linear-gradient(
      225deg,
      hsla(140, 90%, 50%, 1) 10%,
      hsla(140, 90%, 50%, 0) 80%
    ),
    linear-gradient(
      315deg,
      hsla(35, 95%, 55%, 1) 100%,
      hsla(35, 95%, 55%, 0) 70%
    );
}

.wrapper {
  margin: 0 auto;
  max-width: 500px;
  font-size: 20px;
  line-height: 2;
  position: relative;
}

a {
  text-decoration: none;
  color: black;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 20px;
}

.highlight {
  transition: all 0.2s;
  border-bottom: 2px solid white;
  position: absolute;
  top: 0;
  background: white;
  left: 0;
  z-index: -1;
  border-radius: 20px;
  display: block;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.menu {
  padding: 0;
  display: flex;
  list-style: none;
  justify-content: center;
  margin: 100px 0;
}

.menu a {
  display: inline-block;
  padding: 5px;
  margin: 0 20px;
  color: black;
}
```

## JavaScript 코드

```
const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);

function highLightLink() {
  const linkCoords = this.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    x: linkCoords.x + window.scrollX,
    y: linkCoords.y + window.scrollY,
  };
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.x}px, ${coords.y}px)`;
  // console.log(coords);

  // visibleContent(this.textContent, this, coords);
}

function init() {
  triggers.forEach((trigger) =>
    trigger.addEventListener("mouseenter", highLightLink)
  );
}

init();
```

getBoundingClientRect()는 돔 요소의 크기 및 위치 정보를 나타냅니다.<br>
이것을 사용하면 모든 박스의 크기와 위치를 알 수 있으므로 크기가 다른 박스들에게 동일하게 이벤트를 적용할 수도 있습니다.<br>

중요한 것은 스크롤에 영향을 받지 않으므로 스크롤을 내리는 만큼 x(left) / y(top)좌표를 더해줘야 스크롤을 내렸을때도 오류없이 작용합니다.<br>

예전에 박스크기가 다른데도 각각 다르게 적용되는 방법이 신기했었다. 이제는 어떻게 사용해야할 지 알 것 같다.<br>

따로 마우스엔터 이벤트가 실행될 시 span태그로 작은 문구를 추가해보려했으나 coords를 밖에서 사용할 방법을 찾지 못해 그만두었다.<br>
나중에 따로 다시해서 성공하면 링크를 가져오겠습니다.<br>

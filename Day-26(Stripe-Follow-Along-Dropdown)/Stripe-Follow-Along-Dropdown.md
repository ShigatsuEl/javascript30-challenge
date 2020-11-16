## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-26(Stripe-Follow-Along-Dropdown)/index.html" target="_blank">Day 26 - Stripe Follow Along Dropdown</a>

## HTML 코드

```
<body>
  <h2 style="text-align: center;">Cool</h2>
  <nav class="top">
    <div class="dropdownBackground">
      <span class="arrow"></span>
    </div>

    <ul class="cool">
      <li>
        <a href="#">About Me</a>
        <div class="dropdown dropdown1">
          <div class="bio">
            <img src="https://lh3.googleusercontent.com/proxy/4miMLPWWaRiTsK-tRL_DKlqK5XwxgWd4fdKS5h-HyQzjNfC23826ABZUPbc3vQODPdvLzlFt0S0Y-DryH0GNzWTMWyu9N2ucCIkw2kCpehE5lN29Nj6BW3GgxSCjjqsS-3lQadEczj1ooeOO60Joj7R-NARP6ohljdStKUbybZ0umOcQdPCm3or-VydY_61t3Fl8ZkEZm0xH5lCPYzzOx320FZkCttcf">
            <p>Hi! I'm tsuel, I want to become a fullstack developer</p>
          </div>
        </div>
      </li>
      <li>
        <a href="#">Courses</a>
        <ul class="dropdown courses">
          <li>
            <span class="code">VanillaJS</span>
            <a href="https://github.com/ShigatsuEl/shigatsutube-clone">Cloning youtube with Vanilla JS</a>
          </li>
          <li>
            <span class="code">HTML+CSS</span>
            <a href="https://github.com/ShigatsuEl/shigatsu-kokoa-clone-2020">Cloning kakaotak with HTML + CSS</a>
          </li>
          <li>
            <span class="code">Commit</span>
            <a href="https://github.com/ShigatsuEl/daily-commit">Daily Commit</a>
          </li>
          <li>
            <span class="code">Review</span>
            <a href="https://github.com/ShigatsuEl/33-js-concepts-review">33 JS concepts review</a>
          </li>
          <li>
            <span class="code">Foundataion</span>
            <a href="https://github.com/ShigatsuEl/dream-coding__javascript">JavaScript Foundataion</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">Other Links</a>
        <ul class="dropdown dropdown3">
          <li><a class="button" href="https://github.com/ShigatsuEl">Github</a></li>
          <li><a class="button" href="https://tsuel.tistory.com/">Blog</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</body>
```

## CSS 코드

```
html {
  box-sizing: border-box;
  font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  min-height: 100vh;
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

h2 {
  margin-top: 0;
  padding-top: 0.8em;
}

nav {
  position: relative;
  perspective: 600px;
}

.cool > li > a {
  color: yellow;
  text-decoration: none;
  font-size: 20px;
  background: rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  display: inline-block;
  margin: 20px;
  border-radius: 5px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.cool > li {
  position: relative;
  display: flex;
  justify-content: center;
}

.dropdown {
  opacity: 0;
  position: absolute;
  overflow: hidden;
  padding: 20px;
  top: -20px;
  border-radius: 2px;
  transition: all 0.5s;
  transform: translateY(100px);
  will-change: opacity;
  display: none;
}

.trigger-enter .dropdown {
  display: block;
}

.trigger-enter-active .dropdown {
  opacity: 1;
}

.dropdownBackground {
  width: 100px;
  height: 100px;
  position: absolute;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),
    0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s, opacity 0.1s, transform 0.2s;
  transform-origin: 50% 0;
  display: flex;
  justify-content: center;
  opacity: 0;
}

.dropdownBackground.open {
  opacity: 1;
}

.arrow {
  position: absolute;
  width: 20px;
  height: 20px;
  display: block;
  background: white;
  transform: translateY(-50%) rotate(45deg);
}

.bio {
  min-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.7;
}

.bio img {
  float: left;
  margin-right: 20px;
}

.courses {
  min-width: 300px;
}

.courses li {
  padding: 10px 0;
  display: block;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.dropdown a {
  text-decoration: none;
  color: #ffc600;
}

a.button {
  background: black;
  display: block;
  padding: 10px;
  color: white;
  margin-bottom: 10px;
}

/* Matches Twitter, TWITTER, twitter, tWitter, TWiTTeR... */
.button[href*="github"] {
  background: black;
}
.button[href*="tistory"] {
  background: gray;
}
```

## JavaScript 코드

```
const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter() {
  this.classList.add("trigger-enter");
  /* setTimeout(() => {
    if (this.classList.contains("trigger-enter")) {
      this.classList.add("trigger-enter-active");
    }
  }, 150); */
  setTimeout(
    () =>
      this.classList.contains("trigger-enter") &&
      this.classList.add("trigger-enter-active"),
    150
  );
  background.classList.add("open");

  const dropDown = this.querySelector(".dropdown");
  const dropDownCoords = dropDown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    width: dropDownCoords.width,
    height: dropDownCoords.height,
    top: dropDownCoords.top - navCoords.top,
    left: dropDownCoords.left - navCoords.left,
  };
  console.log(coords.top);

  background.style.cssText = `width: ${coords.width}px; height: ${coords.height}px; transform: translate(${coords.left}px, ${coords.top}px);`;
}

function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}

function init() {
  triggers.forEach((trigger) =>
    trigger.addEventListener("mouseenter", handleEnter)
  );
  triggers.forEach((trigger) =>
    trigger.addEventListener("mouseleave", handleLeave)
  );
}

init();
```

Day 22 - Follow Along Links 챌린지에 이어서 마우스가 진입하면 보이다가 나가면 사라지는 스킬이다.<br>
저번 챌린지와 매우 비슷한데 이해가 안가는 것이 하나 있었다.<br>
nav태그 위에 무엇인가 집어넣게되면 dropdownBackground가 망가지는데 왜 navCoords.top / navCoords.left를 빼야만 정상적인 위치로 돌아가는지 아무리 봐도 이해가 가지 않는다.<br>
nav를 집어넣더라도 getBoundingClientRect()의 x,y도 그에 맞게 변하니까 냅둬도 될 줄 알았는데 갑자기 괜한 nav의 top만큼 빼줘야했다.<br>
일단은 잘 이해가 가지 않지만 넘어가기로 했다. 시간이 너무 끌리는 것은 좋지 않아..<br>

한가지 더 추가하고 마무리 하자면 trigger-enter 클래스가 추가된 후 trigger-enter-active 클래스가 150ms 후에 추가된다는 것이다.<br>
여기서 처음안 사실은 && 연산자에서 앞이 true면 뒤의 것도 true인지 확인한다는 사실이다. 만약 전자가 false면 뒤에 것은 true 사실 여부도 따지지 않음<br>
따라서 주석처리한 부분은 && 연산자로 처리한 것과 같다고 볼 수 있다.<br>
이렇게 한 이유는 누군가 마우스로 빠르게 장난을 치면 content가 사라지지도 않았는데 다음 것을 보여주는 안좋은 현상을 볼 수 있기 때문이다.<br>

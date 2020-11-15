## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-21(Geolocation-based-Speedometer-and-Compass)/index.html" target="_blank">Day 21 - Geolocation based Speedometer and Compass</a>

## HTML 코드

```
<svg class="arrow"></svg>(너무 길어서 생략)

<h1 class="speed">
  <span class="speed-value">0</span>
  <span class="units">KM/H</span>
</h1>
```

## CSS 코드

```
html {
  font-size: 100px;
}

body {
  margin: 0;
  font-family: sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: radial-gradient(black 15%, transparent 16%) 0 0,
    radial-gradient(black 15%, transparent 16%) 8px 8px,
    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 0 1px,
    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 8px 9px;
  background-color: #282828;
  background-size: 16px 16px;
  background-attachment: fixed;
}

.arrow {
  width: 250px;
  overflow: hidden;
  transition: all 0.2s;
  transform: rotate(0deg);
  display: inline-block;
}

h1 {
  color: white;
  font-weight: 100;
  font-size: 60px;
  display: flex;
  align-items: center;
}

.units {
  font-size: 15px;
}
/*Compass: https://thenounproject.com/search/?q=compass&i=592352*/
```

## JavaScript 코드

```
const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

function getLocation() {
  navigator.geolocation.watchPosition(
    (data) => {
      console.log(data);
      speed.textContent = data.coords.speed;
      arrow.style.transform = `rotate(${data.coords.heading}deg)`;
    },
    (err) => console.error("you can't access geolocation", err)
  );
}

function init() {
  getLocation();
}

init();
```

이번 챌린지 링크를 들어가보면 이게 뭐지? 싶을 수도 있다.<br>
이번에 한 것은 geolocation api를 사용해 위치정보를 이용하는 것인데 문제는 우리가 컴퓨터로 사용하다보니 가만히 앉아있어서 챌린지에서 사용하려는 속도라던지 방향이라던지 값을 알 수가 없기 때문이다.<br>
맥 사용자라면 Xcode를 깔아서 시뮬레이션을 하면 되는 듯 한데.. 안타깝게도 본인은 윈도우 유저인지라 ㅠㅠ 직접 나가서 뛰어보지 않는 한 측정된 값을 볼 수 없다.<br>

실제로 웹 API인 navigator.geolocation의 watchPosition() 메서드를 사용하면 data.coords.speed || data.coords.heading 이 null값인 것을 확인할 수 있다.<br>
정보를 못얻어와서 에러가 나진 않는다. 다만 speed와 heading값이 없다고 나올 뿐이다.<br>

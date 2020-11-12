## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-06(Ajax-Type-Ahead)/index.html" target="_blank">Day 06 - Ajax Type Ahead</a>

## HTML 코드

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ajax Type Ahead</title>
  <link rel="stylesheet" href="style.css">
  <script defer src="app.js"></script>
</head>
<body>
  <form class="search-form">
    <input type="text" class="search" placeholder="City or State">
    <ul class="suggestions">
      <li>Filter for a city</li>
      <li>or a state</li>
    </ul>
  </form>
</body>
</html>
```

## JavaScript 코드

```
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

const END_POINT =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

// 매치가 되는 것을 찾아서 map -> join을 거쳐 큰 String으로 만든다.
function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
    <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${numberWithCommas(place.population)}</span>
    </li>
    `;
    })
    .join("");
  suggestions.innerHTML = html;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// RegExp 생성자는 패턴을 사용해 텍스트를 판별할 때 사용합니다.
// match() 메서드는 문자열이 정규식(regexp)과 매치되는 부분을 검색합니다.
function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

// fetch를 통해 위 json을 성공적으로 받아오면 이것을 미가공 데이터 blob이라고 한다. 또는 response로 대체하는 경우도 많다.
// fetch의 blob을 콘솔로그해보면 하나의 Promise가 생성되고 아직 데이터는 찾아볼 수 없다. blob.json() 메서드를 사용해 data를 받아오면 json파일을 읽을 수 있다.
function fetchJson() {
  fetch(END_POINT)
    .then((blob) => blob.json())
    .then((data) => cities.push(...data)); // let cities
}

function init() {
  fetchJson();
  searchInput.addEventListener("change", displayMatches);
  searchInput.addEventListener("keyup", displayMatches);
}

init();
```

이번 챌린지를 통해 굉장히 많은 것을 복습하고 새롭게 배울 수 있는 기회가 되었다.<br>
저번에 배워두고서 fetch메서드는 비동기적으로 작동하는 Promise객체를 반환한다는 것을 까먹고 있었다.<br>
fetch로 외부에 있는 파일을 읽어오기 위해선 2가지 단계를 거쳐야 하는데<br>
`첫번째는 fetch 메서드로 url을 가져오는 것이다.`<br>
`두번째는 then 메서드로 성공적으로 불러왔다면 blob 또는 response(아무거나 상관없을 듯함)를 통해 json을 불러와야 한다.`<br>
json() 메서드가 실행되고 나서야 data를 가져올 수 있다.<br>

단어를 찾을 때는 regex를 사용하는데 이것은 유튜브 클론 코딩에서도 한 적이 있다.<br>
RegExp함수 API의 'gi'(글로벌하고 인센시티브하게 즉, 대소문자를 구분하지 않고 덜 민감하게 작용한다는 뜻)파라미터를 사용해 regex를 반환합니다.<br>
filter() 메서드를 사용해 단어에 맞는 도시들을 찾아(match)냅니다.<br>

찾아낸 도시들을 map -> join 순서로 도시배열을 하나의 큰 스트링으로 변환하여 리스트에 innerHTML 안으로 집어넣습니다.<br>

마지막에 사용한 콤마함수는 스택오버플로우에서 참고하여 copy & paste 한 것 입니다.<br>

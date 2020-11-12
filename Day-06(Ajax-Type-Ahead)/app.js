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

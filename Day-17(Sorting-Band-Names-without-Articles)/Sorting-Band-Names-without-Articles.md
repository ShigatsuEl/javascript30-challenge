## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-17(Sorting-Band-Names-without-Articles)/index.html" target="_blank">Day 17 - Sorting Band Names without Articles</a>

## HTML 코드

```
<body>
  <ul id="bands"></ul>
</body>
```

## CSS 코드

```
#bands {
  list-style: inside square;
  font-size: 20px;
  background: white;
  width: 500px;
  margin: auto;
  padding: 0;
  box-shadow: 0 0 0 20px rgba(0, 0, 0, 0.05);
}

#bands li {
  border-bottom: 1px solid #efefef;
  padding: 20px;
}

#bands li:last-child {
  border-bottom: 0;
}

a {
  color: #ffc600;
  text-decoration: none;
}
```

## JavaScript 코드

```
const bandsList = document.querySelector("#bands");
const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, "").trim();
}

const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

console.log(sortedBands);

function init() {
  bandsList.innerHTML = sortedBands.map((band) => `<li>${band}</li>`).join("");
}

init();
```

이번 챌린지도 신기한 것 같다. 정렬을 하긴 하는데 앞에 관사를 제외하고 정렬하는 방법이다.<br>
어떻게 해야할지 상상도 가지 않았는데 replace 메서드를 사용해 문자열의 앞에 있는 관사를 빈칸으로 대체하고 trim 메서드를 사용해 공백을 없애는 방식이다.<br>
replace를 하는 방법이 되게 신기한데 나도 이 챌린지를 통해 처음알게된 방법이다.<br>
이것은 replace 정규식에 대하여 구글링하면 쉽게 찾아볼 수 있다 -> [replace 메서드 정규식](https://ninearies.tistory.com/177)<br>
마지막으로 정렬된 배열을 리스트에 집어넣습니다.<br>
나는 지금까지 배열을 거의 써본적이 없는데 배열을 사용하는 것만으로 이렇게 많은 것들을 할 수가 있었다.<br>

## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-04(Array-Cardio-Day-1)/index.html" target="_blank">Day 04 - Array Cardio Day 1</a>

## JavaScript 코드

```
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const result1 = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.table(result1);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const result2 = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
console.log(result2);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const result3 = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(result3);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const result4 = inventors.reduce((total, currentValue) => {
  return total + (currentValue.passed - currentValue.year);
}, 0); // 처음에 reducer가 루프를 한 번 돌면 total값을 찾지 못함 -> 2번째 인수를 0으로 지정해줘야 함!
console.log(result4);

// 5. Sort the inventors by years lived
const result5 = inventors.sort((a, b) => {
  const next = a.passed - a.year;
  const previous = b.passed - b.year;
  return next > previous ? -1 : 1;
});
console.log(result5);
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
/*
const category = document.querySelector(".mw-category");
const links = Array.from(category.querySelectorAll("a")); // or [...category.querySelectorAll("a")]
const de = links
  .map((link) => link.textContent)
  .filter((streetName) => streetName.includes("de"));
*/

// 7. sort Exercise
// Sort the people alphabetically by last name
const result7 = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(". ");
  const [bLast, bFirst] = nextOne.split(". ");
  return aLast > bLast ? 1 : -1;
});
console.log(result7);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const result8 = data.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  } // 만약 새로운 item이 들어와도 0부터 시작할 수 있도록 해준다.
  obj[item]++;
  return obj;
}, {}); // 두 번째 인자는 초기값을 정하는 값으로 빈 객체를 지정함으로써 모든 item들이 0부터 시작하는 코드가 생략되어 있다.
console.log(result8);
```

며칠 전 자료구조에 관해서 배우고 query와 sort를 사용할 수 있는 기회를 얻고 싶었는데 이번 챌린지에서 배열을 간단히 다뤄볼 수 있었다.<br>
`배열에서 조건에 맞는 요소들만 빼오는 filter 메서드`<br>
`배열을 자신의 입맛에 맞게 변형하는 map 메서드`<br>
`배열을 원하는 형태로 정렬시켜주는 sort 메서드`<br>
`배열에서 모든 원소들을 통합시켜 하나의 결과 값을 반환하는 reduce 메서드`<br>
이 밖에도 더 많지만 이번 챌린지에서는 이 4가지에 대해 사용해 볼 수 있었다.<br>
알고는 있었지만 사용해본 것은 처음이었고 그 밖에도 신기한 것들이 몇 가지 있었는데<br>
첫번째로 console.table 메서드는 데이터를 테이블 형식으로 보여줘서 보기 편리했다. 매일 콘솔로그만 찍다가 이런것도 사용해보니 신선했던 기분이 들었다.<br>
두번째로 저번 강의에서 NodeList를 배열로 바꾸는 방법을 알려주지 않았었는데 `Array.from()`을 통해 이것이 가능했으며 또한 `...`을 통해 spread(전개)하는 방법도 있었다.<br>

배열에서 어떤 작업을 할 때 어떤 메서드를 사용해야 할지 정확히 알고 있다면 콜백함수에서 얼마든지 자신이 원하는 작업을 통해 결과물을 얻을 수 있다.<br>
연습을 통해 익숙해지는 방법밖에 없다.<br>

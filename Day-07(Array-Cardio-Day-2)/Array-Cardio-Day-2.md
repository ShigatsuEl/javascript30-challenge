## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-07(Array-Cardio-Day-2)/index.html" target="_blank">Day 07 - Array Cardio Day 2</a>

## JavaScript 코드

```
const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAdult = people.some(
  (person) => new Date().getFullYear() - person.year >= 19
);

console.log(isAdult);

// Array.prototype.every() // is everyone 19 or older?
const allAdults = people.every(
  (person) => new Date().getFullYear() - person.year >= 19
);

console.log(allAdults);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

// find 메서드는 filter 메서드와 비슷한데 한 가지 다른 점은 filter 메서드는 배열을 반환하는데 반해 find 메서드는 하위 Object를 반환합니다.
const findComment = comments.find((comment) => comment.id === 823423);

console.log(findComment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const findIndex = comments.findIndex((comment) => comment.id === 823423);

console.log(findIndex);

// comments.splice(findIndex, 1);
// 여기까지가 delete하는 방법 --> 아래부터 delete된 comment빼고 새로운 comments 배열을 만드는 법

console.table(comments);

const newComments = [
  ...comments.slice(0, findIndex),
  ...comments.slice(findIndex + 1),
];

console.table(newComments);

```

저번에 이은 배열 메서드에 관한 내용이다.<br>
별로 어려운 것은 없고 이번에 다룬 몇 가지만 알고가자.<br>
`1️⃣Array.prototype.some() 메서드는 배열 중에 하나라도 true가 존재하면 true를 반환하다.`<br>
`2️⃣Array.prototype.every() 메서드는 배열 원소 모두가 true여야 true를 반환합니다.`<br>
`3️⃣Array.prototype.find() 메서드는 콜백함수 조건에 맞는 하위 요소를 반환합니다.`<br>
`4️⃣Array.prototype.findIndex() 메서드는 위와 같이 콜백함수 조건에 맞는 하위 요소를 찾지만 그 인덱스 값을 반환합니다.`<br>
`5️⃣Array.prototype.splice() 메서드는 1번째인자부터 2번째 인자만큼 삭제합니다. 원하면 그 자리에 다른 요소를 채울수도 있는 걸로 기억함`<br>
`6️⃣Array.prototype.splice() 메서드는 1번째 인자부터 2번째 인자까지 복사하여 새로운 배열 객체로 반환합니다. 2번째 인자가 없으면 1번째 인자부터 끝까지 복사합니다.`<br>

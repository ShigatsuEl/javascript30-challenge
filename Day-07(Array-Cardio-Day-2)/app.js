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

## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-14(Object+Arrays-Reference-VS-Copy)/index.html" target="_blank">Day 14 - Object and Arrays Reference VS Copy</a>

## JavaScript 코드

```
// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = "shigatsu";
let name2 = name;
console.log(name, name2);
name = "el";
console.log(name, name2);

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players;

console.log(players, team);

// You might think we can just do something like this:
team[3] = "shigatsu";
console.log(players, team);

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
team2[3] = "el";

console.log(players, team2);

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);
team3[3] = "Lee";
console.log(team3);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = "Minchan";
console.log(team4);

const team5 = Array.from(players);
team5[3] = "team5";

console.log(team5);
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// and think we make a copy:
const captain = person;
captain.number = 99;

console.log(person, captain);

// how do we take a copy instead?
const captain2 = Object.assign({}, person, { number: 100, age: 70 });

console.log(person, captain2);

// We will hopefully soon see the object ...spread
const captain3 = { ...person };

console.log(captain3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const shigatsu = {
  name: "Lee Minchan",
  age: 25,
  social: {
    github: "https://github.com/ShigatsuEl",
    google: "shigatsu970704@gmail.com",
  },
};

const el = Object.assign({}, shigatsu);

console.log(shigatsu, el);

shigatsu.social.google = "shigatsu970704@naver.com";

console.log(shigatsu, el);
// 복사를 했지만 social이 참조되는 모습을 볼 수 있다. 그 이유는 Object.assing은 한 단계까지만 복사가 되기 때문이다.
// 클론 딥이라고 더 아래까지 복사하는 방법이 있는가본데 과연 이것이 필요할지는 생각해봐야할 것이다.

const el2 = JSON.parse(JSON.stringify(shigatsu));

shigatsu.social.google = "shigatsu970704@gmail.com";

console.log(shigatsu, el2);
// JSON을 활용해 복제하게 되는 순간 참조가 되지 않으며 shigatsu와 el2의 구글 소셜이 서로 다른 것을 확인할 수 있다.
```

Value Type과 Reference Type의 차이점에 관한 내용이다.<br>
이제 하두 많이 해서 슬슬 지겨웠는데 새로 알게 된 몇가지를 짚고 넘어가겠습니다.<br>
먼저 Value Type은 Copy가 가능하지만 Reference Type은 보통 Copy가 아니라 Reference되는 경우가 많을 것 입니다.<br>
이 둘의 차이점을 잘 알고 있어야 합니다.<br>

본인이 처음 알게된 것은 Object.assign이 첫번째 깊이까지밖에 Copy가 되지 않으며 한 단계 밑으로 Copy하려고 하면 Reference되어버린다는 것 입니다.<br>
이것을 해결하기 위해 JSON parse와 stringify를 사용하면 string으로 변환되었다가 object로 다시 돌아오므로 새로운 객체를 만들 수 있습니다.<br>

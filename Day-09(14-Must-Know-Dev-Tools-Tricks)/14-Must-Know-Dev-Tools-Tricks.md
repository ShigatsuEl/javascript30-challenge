## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-09(14-Must-Know-Dev-Tools-Tricks)/index.html" target="_blank">Day 09 - 14 Must Know Dev Tools Tricks</a>

## HTML 코드

```
<body>
  <p onClick="makeGreen()">×BREAK×DOWN×</p>
</body>
```

## JavaScript 코드

```
const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("Hello!");

// Interpolated
console.log("Hello! I amm %s string", "🤎");

// Styled
console.log(
  "%c I am some great text",
  "font-size:50px; background:red; text-shadow: 10px 10px 0 blue"
);
// warning!
console.warn("fuck");

// Error :|
console.error("fuck");

// Info
console.info("Crocodiles eat 3-4 people per year");

// Testing
const p = document.querySelector("p");
console.assert(p.classList.contains("fuck"), "That is fuck");

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});
// counting
console.count("Wes");
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Wes");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json)
  .then((data) => {
    console.timeEnd("fetching data");
  });
```

이번 내용은 다룰 것이 없어보인다.<br>
알고 있으면 좋은 개발자 도구 기술 모음 같은데 이미 다 아는 내용이라.. 음..<br>
아직은 초짜라서 중요성을 잘 모르는건지도 모르겠다.<br>

## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-15(LocalStorage+Event-Delegation)/index.html" target="_blank">Day 15 - LocalStorage and Event Delegation</a>

## HTML 코드

```
<body>
  <!--
      Fish SVG Cred:
      https://thenounproject.com/search/?q=fish&i=589236
   -->

   <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g><path d="M495.9,425.3H16.1c-5.2,0-10.1,2.9-12.5,7.6c-2.4,4.7-2.1,10.3,0.9,14.6l39,56.4c2.6,3.8,7,6.1,11.6,6.1h401.7   c4.6,0,9-2.3,11.6-6.1l39-56.4c3-4.3,3.3-9.9,0.9-14.6C506,428.2,501.1,425.3,495.9,425.3z M449.4,481.8H62.6L43,453.6H469   L449.4,481.8z"/><path d="M158.3,122c7.8,0,14.1-6.3,14.1-14.1V43.4c0-7.8-6.3-14.1-14.1-14.1c-7.8,0-14.1,6.3-14.1,14.1v64.5   C144.2,115.7,150.5,122,158.3,122z"/><path d="M245.1,94.7c7.8,0,14.1-6.3,14.1-14.1V16.1c0-7.8-6.3-14.1-14.1-14.1C237.3,2,231,8.3,231,16.1v64.5   C231,88.4,237.3,94.7,245.1,94.7z"/><path d="M331.9,122c7.8,0,14.1-6.3,14.1-14.1V43.4c0-7.8-6.3-14.1-14.1-14.1s-14.1,6.3-14.1,14.1v64.5   C317.8,115.7,324.1,122,331.9,122z"/><path d="M9.6,385.2c5.3,2.8,11.8,1.9,16.2-2.2l50.6-47.7c56.7,46.5,126.6,71.9,198.3,71.9c0,0,0,0,0,0   c87.5,0,169.7-36.6,231.4-103.2c5-5.4,5-13.8,0-19.2c-61.8-66.5-144-103.2-231.4-103.2c-72,0-142.2,25.6-199,72.5l-50-47.1   c-4.4-4.1-10.9-5-16.2-2.2c-5.3,2.8-8.3,8.7-7.4,14.6l11.6,75L2.2,370.6C1.3,376.5,4.2,382.4,9.6,385.2z M380.9,230.8   c34.9,14.3,67.2,35.7,95.3,63.6c-10.1,10-20.8,19.2-31.9,27.5c-22.4-3.3-29.6-8.8-30.7-9.7c-4-5.7-11.8-7.7-18.1-4.4   c-6.9,3.6-9.5,12.2-5.9,19.1c1.9,3.5,7.3,10.3,22.4,16c-10.1,5.7-20.5,10.7-31.1,15.1C352.4,320.2,352.4,268.6,380.9,230.8z    M36.3,255.6l29.4,27.7c5.3,5,13.6,5.1,19.1,0.3c53.2-47.6,120.7-73.7,190-73.7c26.9,0,53.2,3.9,78.5,11.3   c-29.3,44.6-29.3,102,0,146.6c-25.3,7.4-51.6,11.3-78.5,11.3c-69,0-136.3-26-189.4-73.2c-2.7-2.4-13.4-6.3-19.1,0.3l-30.1,28.3   l5.7-40C42.2,293,36.3,255.6,36.3,255.6z"/><circle cx="398.8" cy="273.8" r="14.1"/></g></svg>

  <div class="wrapper">
    <h2>LOCAL TAPAS</h2>
    <p></p>
    <ul class="plates">
      <li>Loading Tapas...</li>
    </ul>
    <form class="add-items">
      <input type="text" name="item" placeholder="Item Name" required>
      <input type="submit" value="+ Add Item">
    </form>
  </div>
</body>
```

## CSS 코드

```
html {
  box-sizing: border-box;
  background: url("oh-la-la.jpeg") center no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Futura, "Trebuchet MS", Arial, sans-serif;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

svg {
  fill: white;
  background: rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 50%;
  width: 200px;
  margin-bottom: 50px;
}

.wrapper {
  padding: 20px;
  max-width: 350px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin: 0;
  font-weight: 200;
}

.plates {
  margin: 0;
  padding: 0;
  text-align: left;
  list-style: none;
}

.plates li {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px 0;
  font-weight: 100;
  display: flex;
}

.plates label {
  flex: 1;
  cursor: pointer;
}

.plates input {
  display: none;
}

// 이 부분이 체크박스의 모양을 바꿔주는 클래스이다.
.plates input + label:before {
  content: "⬜️";
  margin-right: 10px;
}

.plates input:checked + label:before {
  content: "🌮";
}

.add-items {
  margin-top: 20px;
}

.add-items input {
  padding: 10px;
  outline: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
```

## JavaScript 코드

```
const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

function toggleDone(e) {
  if (!e.target.matches("input")) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      }/>
      <label for="item${i}">${plate.text}</label>
    </li>
    `;
    })
    .join("");
}

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items)); // JSON으로 변환하지 않으면 "[Object Obect]"와 같이 이상한 스트링이 로컬스토리지에 저장됨
  this.reset();
}

function init() {
  addItems.addEventListener("submit", addItem);
  populateList(items, itemsList);
  itemsList.addEventListener("click", toggleDone);
}

init();
```

예전에 로컬스토리지를 사용해서 투두리스트를 만들어본 경험이 있다.<br>
그 때는 아무것도 몰라서 자바스크립트 자체가 어렵게만 느껴졌는데 지금 와서 다시보니 localStorage는 내 컴퓨터에만 있는 데이터베이스의 축소판이나 다름이 없었다.<br>
단지 남과 공유할 수 없는 데이터베이스겠지만..<br>

기본적인 형태는 비슷했다. 패턴은 input에서 sumbmit 이벤트가 일어나면 value값을 받아와 리스트에 출력해주는 것이다.<br>
하지만 저장소가 없기 때문에 페이지를 새로 로드하면 출력되었던 리스트가 다시 리셋된다는 것<br>
이것을 localStorage에 저장하여 로드될때마다 localStorage에서 불러오는 것인데 보면 볼수록 데이터베이스와 하는짓이 비슷하다.<br>
중요한 것은 localStorage에 그냥 배열을 저장하게 되면 스트링 값이 저장되기 때문에 배열이 아니라 "[Object Object]"와 같이 배열로 위장한 스트링이 저장이 된다.<br>
그래서 사용하는 것이 JSON parse stringify이다. 이것을 사용하는 방법은 예전에 많이 이야기했기 때문에 생략하겠다.<br>

dataset을 사용하여 배열의 인덱스값을 넣어주었기 때문에 나중에 원하는 리스트의 값을 가져오기도 쉽다.<br>
state를 바꾸는 작업에 toggleDone함수와 dataset을 사용했다.<br>

Event Delegation이란 각각의 기능에 이벤트를 추가하지 않고 상위 엘리먼트에 이벤트를 추가하는 것이다.<br>

```
document.getElementById("menu").addEventListener("click", function(e) {
  var target = e.target;
  if (target.id === "file") {
    // 파일 메뉴 동작
  } else if (target.id === "edit") {
    // 편집 메뉴 동작
  } else if (target.id === "view") {
    // 보기 메뉴 동작
  }
});
```

위와 같이 이벤트는 하나만 추가했지만 따로따로 작용하게 할 수 있다.<br>
toggleDone함수에서도 itemList에서도 이벤트를 받아오면 label과 input 두개의 엘리먼트를 받아오는데 e.target을 사용해 label 엘리먼트는 toggleDone함수를 즉시 종료하도록 만들었다.<br>
이것이 Event Delegation이다.<br>

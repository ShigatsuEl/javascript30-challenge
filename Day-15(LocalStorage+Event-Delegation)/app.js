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

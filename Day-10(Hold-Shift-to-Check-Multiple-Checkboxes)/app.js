const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(event) {
  // 체크가 어느 체크박스 사이에 이루어졌는지 알기 위해 inBetween값을 설정
  let inBetween = false;
  if (event.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      // 마지막으로 체크된 박스와 지금 체크된 박스 사이에서 inBetween을 true로 설정
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

function init() {
  checkboxes.forEach((checkbox) =>
    checkbox.addEventListener("click", handleCheck)
  );
}

init();

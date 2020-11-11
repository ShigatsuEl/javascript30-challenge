const panels = document.querySelectorAll(".panel");
const array = Array.from(panels);

function toggleActive(event) {
  if (event.propertyName.includes("flex-grow")) {
    this.classList.toggle("open-active");
  }
}

function toggleClose() {
  const noClickPanel = array.filter((index) => {
    if (index.className.includes("open")) {
      return false;
    } else {
      return true;
    }
  });
  noClickPanel.forEach((panel) => {
    panel.classList.toggle("close");
  });
}

function toggleOpen() {
  this.classList.toggle("open");
  toggleClose();
  this.classList.remove("close");
}

function init() {
  array.forEach((panel) => panel.addEventListener("click", toggleOpen));
  panels.forEach((panel) =>
    panel.addEventListener("transitionend", toggleActive)
  );
}

init();

const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter() {
  this.classList.add("trigger-enter");
  /* setTimeout(() => {
    if (this.classList.contains("trigger-enter")) {
      this.classList.add("trigger-enter-active");
    }
  }, 150); */
  setTimeout(
    () =>
      this.classList.contains("trigger-enter") &&
      this.classList.add("trigger-enter-active"),
    150
  );
  background.classList.add("open");

  const dropDown = this.querySelector(".dropdown");
  const dropDownCoords = dropDown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    width: dropDownCoords.width,
    height: dropDownCoords.height,
    top: dropDownCoords.top - navCoords.top,
    left: dropDownCoords.left - navCoords.left,
  };
  console.log(coords.top);

  background.style.cssText = `width: ${coords.width}px; height: ${coords.height}px; transform: translate(${coords.left}px, ${coords.top}px);`;
}

function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}

function init() {
  triggers.forEach((trigger) =>
    trigger.addEventListener("mouseenter", handleEnter)
  );
  triggers.forEach((trigger) =>
    trigger.addEventListener("mouseleave", handleLeave)
  );
}

init();

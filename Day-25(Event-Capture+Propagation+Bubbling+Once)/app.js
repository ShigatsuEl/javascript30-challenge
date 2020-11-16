const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(e) {
  console.log(this.classList.value);
  // e.stopPropagation();
}

function init() {
  divs.forEach((div) => div.addEventListener("click", logText));
  // document.body.addEventListener("click", logText);
  /* divs.forEach((div) =>
    div.addEventListener("click", logText, { capture: true })
  ); */
  button.addEventListener(
    "click",
    () => {
      console.log("Click!!!");
    },
    { once: true }
  );
}

init();

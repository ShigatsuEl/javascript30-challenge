const pressed = [];
const secretCode = "shigatsu";

function init() {
  window.addEventListener("keyup", (e) => {
    pressed.push(e.key);
    console.log(-secretCode.length - 1);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    console.log(pressed);

    if (pressed.join("") === secretCode) {
      console.log("You found it!");
      cornify_add();
    }
  });
}

init();

const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  // suffix란 단어 뒤에 붙게되어 새로운 단어를 만드는 접미사이다.
  // this가 spacing || blur와 같이 px suffix를 쓰는 친구일 수도 있지만 base와 같이 data클래스가 없는 경우 빈 스트링을 반환하게 해야 함!
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

function init() {
  inputs.forEach((input) => input.addEventListener("change", handleUpdate));
  inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
  // change와 mousemove이벤트를 통해 trigger처럼 만들 수 있다.
}

init();

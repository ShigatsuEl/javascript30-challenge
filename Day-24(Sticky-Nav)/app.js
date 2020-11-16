const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop;
const slideImages = document.querySelectorAll(".slide-in");

function checkSlide() {
  slideImages.forEach((slideImage) => {
    const slideInAt =
      window.scrollY + window.innerHeight - slideImage.height / 2;
    const imageBottom = slideImage.offsetTop + slideImage.height;

    const isHalfShown = slideInAt > slideImage.offsetTop;
    const isPassedDown = window.scrollY < imageBottom;

    if (isHalfShown && isPassedDown) {
      slideImage.classList.add("active");
    } else {
      slideImage.classList.remove("active");
    }
  });
}

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = `${nav.offsetHeight}px`;
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}

function init() {
  window.addEventListener("scroll", fixNav);
  window.addEventListener("scroll", checkSlide);
}

init();

const slideImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
  slideImages.forEach((slideImage) => {
    // half way through the image
    const slideInAt =
      window.scrollY + window.innerHeight - slideImage.height / 2;
    // bottom of the image
    const imageBottom = slideImage.offsetTop + slideImage.height;

    const isHalfShown = slideInAt > slideImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      slideImage.classList.add("active");
    } else {
      slideImage.classList.remove("active");
    }
  });
}

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function init() {
  window.addEventListener("scroll", debounce(checkSlide));
}

init();

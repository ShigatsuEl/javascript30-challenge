## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-13(Slide-In-On-Scroll)/index.html" target="_blank">Day 13 - Slide In On Scroll</a>

## HTML 코드

생략 / 깃헙주소 참고하시길 바랍니다.

## JavaScript 코드

```
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
```

이번 챌린지는 내가 몰랐던 부분이기도 하고 처음해보느라 시간이 상당히 많이 걸렷다. 코드는 생각보다 몇 줄 안되는데 말이다.<br>
그래도 그만큼 얻은 것이 많아서 힘이 나는 것 같다. :)<br>

![JavaScript30-13-1.png](./JavaScript30-13-1.png)
이번에는 글만으로는 어렵다고 생각해 그림을 참고해서 설명해보려고 합니다.<br>
설명하기 앞서 window.innerWidth와 window.scrollY의 차이점을 알아야 하는데<br>
window.innerWidth는 쉽게 스크린 상에서 브라우저 창의 크기라고 생각하면 된다.<br>
그리고 window.scrollY는 문서상에서 지금 위치하고 있는 Y값을 의미한다.<br>

그림이 좀 삐꾸같은데 예를들어 어느정도 스크롤 된 웹페이지에서 우리가 눈에 보이는 브라우저의 크기를 innerWidth라고 생각하면 된다. outerWidth도 있는데 일단은 넘어가자.<br>
또한 scrollY는 문서에서 얼마나 스크롤 되어 있는지를 알 수 있다.<br><br>

우리가 할 것은 슬라이드 이미지가 우리 눈에 보이기 시작하면 active클래스를 추가하고 보이지 않으면 삭제하는 것이다.<br>
여기서는 4가지를 정의했다.<br>
`1️⃣slideInAt -> 슬라이드이미지의 절반이 보이기 시작할 때 쯤의 Y값이다. 스크롤 된 Y값과 브라우저 innerWidth를 더한 후 슬라이드 이미지의 절반만큼 뺐다.`<br>
`2️⃣imageBottom -> 이미지의 상대적 y값인 offsetY에 이미지 높이를 더해 이미지 바닥의 Y값을 구했다.`<br>
`3️⃣isHalfShown -> 이미지의 반이 보이기 시작하면 true가 된다.`<br>
`4️⃣isNotScrolledPast -> 이미지의 바닥이 보일때까지만 true가 된다.`<br>

즉, 아래 그림은 위의 규칙을 만족하고 있습니다.<br>
![JavaScript30-13-2.png](./JavaScript30-13-2.png)<br>
2번이 3번이 보이기 시작할 때 active클래스를 추가하고 1번이 4번보다 높아져서 이미지가 보이지 않기 시작할 때 active클래스를 삭제하는 것 입니다.<br>

스크롤 이벤트는 매우 어려워보였는데 한 번 이해하고 나니까 이제 슬슬 이해가 가기 시작한다.<br>
페이징 기법을 만들어보는 것도 아마 load이벤트를 사용하면 가능하지 않을까?<br>
나중에 해봐야겠다.<br>

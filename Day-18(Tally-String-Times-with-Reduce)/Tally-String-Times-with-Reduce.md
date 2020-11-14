## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-18(Tally-String-Times-with-Reduce)/index.html" target="_blank">Day 18 - Tally String Times with Reduce</a>

## HTML 코드

깃헙소스 참고하기 바람!

## JavaScript 코드

```
const timeNodes = Array.from(document.querySelectorAll("[data-time]"));
const seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, reduceSeconds) => (total += reduceSeconds));

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(seconds);
console.log(hours, mins, secondsLeft);
```

시간만 주어진다면 천천히라도 혼자서 완성할 수 있었을 것 같다. 이번에 해본 것은 비디오의 모든 시간을 긁어와서 총 시간을 나타내는 것입니다.<br>
timeNodes라는 배열을 만들어주고 data-time값으로 배열을 재가공합니다.<br>
그 후, 배열의 원소에는 string으로 된 시간 값이 들어가 있는데 split() 메서드를 사용해 분과 초를 나눠주워 비디오 각각의 최종 초를 반환합니다.<br>
마지막막으로 reduce() 메서드를 사용해 모든 비디오의 초값을 더한 total이라는 것을 반환합니다.<br>

이 초를 이용해 시간 / 분 / 초로 나눠주는 작업을 할 수 있습니다.<br>
수학의 개념이 들어가지만 천천히 보다보면 어렵지 않습니다. :)<br>

## Demo

<a href="https://shigatsuel.github.io/javascript30-challenge/Day-19(Unreal-Webcam-Fun)/index.html" target="_blank">Day 19 - Unreal Webcam Fun</a>

## HTML 코드

```
<body>
  <div class="photobooth">
    <div class="controls">
      <button onClick="takePhoto()">Take Photo</button>
      <div class="rgb">
        <label for="rmin">Red Min:</label>
        <input type="range" min=0 max=255 name="rmin">
        <label for="rmax">Red Max:</label>
        <input type="range" min=0 max=255 name="rmax">
        <br>
        <label for="gmin">Green Min:</label>
        <input type="range" min=0 max=255 name="gmin">
        <label for="gmax">Green Max:</label>
        <input type="range" min=0 max=255 name="gmax">
        <br>
        <label for="bmin">Blue Min:</label>
        <input type="range" min=0 max=255 name="bmin">
        <label for="bmax">Blue Max:</label>
        <input type="range" min=0 max=255 name="bmax">
      </div>
    </div>

    <canvas class="photo"></canvas>
    <video class="player"></video>
    <div class="strip"></div>
  </div>

  <audio class="snap" src="./snap.mp3" hidden></audio>
```

## JavaScript 코드

```
const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

function takePhoto() {
  // played the sound
  snap.currentTime = 0;
  snap.play();

  // take the data out of the canvas
  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.download = "shigatsu";
  link.textContent = "Download Image";
  link.innerHTML = `<img src="${data}" alt="shigatsu photo" />`;
  strip.insertBefore(link, strip.firstChild);
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    // take the pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    // mess with them
    // pixels = redEffect(pixels);

    // pixels = rgbSplit(pixels);
    // ctx.globalAlpha = 0.1;

    pixels = greenScreen(pixels);

    // put them back
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i] = pixels.data[i] + 100; // r
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // g
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // b
  }

  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 550] = pixels.data[i]; // r
    pixels.data[i + 500] = pixels.data[i + 1] - 50; // g
    pixels.data[i + -550] = pixels.data[i + 2] * 0.5; // b
  }

  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll(".rgb input").forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      console.log(localMediaStream);
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => {
      console.error("Fuck.. you can't access video;", err);
    });
}

function init() {
  getVideo();
  video.addEventListener("canplay", paintToCanvas);
}

init();
```

지금까지한 챌린지 중에 가장 어려운 느낌이 들었다.<br>
영상하고는 나와 안맞는 걸지도...<br>

WEB API를 이용해 미디어 장치를 사용하는 것을 허용했다.<br>
navigator.mediaDeveices.getUserMedia는 하나의 Promise를 반환하는데 이 Promise의 Url을 사용하기 위해 window.URL.createObjectUrl을 사용했지만 어째서인지 비동기에러가 떴다.<br>
스택오버플로우를 찾아보니 video.srcObject = mediaStream을 추천하길래 해보니 깔끔히 들어갔다.<br>

캠을 사용해 비디오에 출력하는 것이 성공하면 캔버스에 그에 맞는 사이즈로 그릴 수 있게 setInterval을 사용했다.<br>
또한 캡처함수를 만들어 찍는 순간 하단에 링크이미지를 출력하고 snap 오디오가 나와 정말로 캡처가되는 듯한 느낌을 추가했다.<br>

픽셀에 관한 부분이 가장 어려웠는데 아직도 몇가지는 이해하지 못했다.<br>
일단 쉽게 정리해보자면 캔버스에서 getImageData로 pixel들의 data배열을 가져와서 알맞게 꾸며준 것이다.<br>
픽셀은 4개의 인덱스를 가지는데 r, g, b, a를 통틀어 하나의 픽셀을 이루는 것이다.<br>

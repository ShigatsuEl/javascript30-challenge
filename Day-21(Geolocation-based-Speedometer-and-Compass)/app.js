const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

function getLocation() {
  navigator.geolocation.watchPosition(
    (data) => {
      console.log(data);
      speed.textContent = data.coords.speed;
      arrow.style.transform = `rotate(${data.coords.heading}deg)`;
    },
    (err) => console.error("you can't access geolocation", err)
  );
}

function init() {
  getLocation();
}

init();

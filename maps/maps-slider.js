const mapSlider = document.getElementById("map-slider");
const map = document.querySelector(".map");
const prevButton = document.getElementById("slide-btn-left");
const nextButton = document.getElementById("slide-btn-right");

const mapWidth = map.clientWidth;

nextButton.addEventListener("click", () => {
  mapSlider.scrollLeft += mapWidth;
});

prevButton.addEventListener("click", () => {
  mapSlider.scrollLeft -= mapWidth;
});

setInterval(() => {
  nextButton.click();
  let nrElements = document.querySelectorAll("#map-slider li").length;

  let lastLocation = mapWidth * (nrElements - 2);

  if (mapSlider.scrollLeft >= lastLocation) {
    mapSlider.scrollLeft = 0;
  }
}, 6000);
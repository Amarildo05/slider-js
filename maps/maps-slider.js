const mapSlider = document.getElementById("map-slider");
const map = document.querySelector(".map");
const prevButton = document.getElementById("slide-btn-left");
const nextButton = document.getElementById("slide-btn-right");

nextButton.addEventListener("click", () => {
  const mapWidth = map.clientWidth;
  mapSlider.scrollLeft += mapWidth;
});

prevButton.addEventListener("click", () => {
  const mapWidth = map.clientWidth;
  mapSlider.scrollLeft -= mapWidth;
});
const weaponSlider = document.getElementById("weapon-slider");
const weapon = document.querySelector(".weapon");
const prevButton = document.getElementById("slide-btn-left");
const nextButton = document.getElementById("slide-btn-right");

const weaponWidth = weapon.clientWidth;

nextButton.addEventListener("click", () => {
  weaponSlider.scrollLeft += weaponWidth;
});

prevButton.addEventListener("click", () => {
  weaponSlider.scrollLeft -= weaponWidth;
});

setInterval(() => {
  nextButton.click();
  let nrElements = document.querySelectorAll("#weapon-slider li").length;

  let lastLocation = weaponWidth * (nrElements - 2);

  if (weaponSlider.scrollLeft >= lastLocation) {
    weaponSlider.scrollLeft = 0;
  }
}, 6000);
const weaponSlider = document.getElementById("weapon-slider");
const weapon = document.querySelector(".weapon");
const prevButton = document.getElementById("slide-btn-left");
const nextButton = document.getElementById("slide-btn-right");

nextButton.addEventListener("click", () => {
  const weaponWidth = weapon.clientWidth;
  weaponSlider.scrollLeft += weaponWidth;
});

prevButton.addEventListener("click", () => {
  const weaponWidth = weapon.clientWidth;
  weaponSlider.scrollLeft -= weaponWidth;
});
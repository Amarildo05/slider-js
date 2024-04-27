const agentSlider = document.getElementById("agent-slider");
const agent = document.querySelector(".agent");
const prevButton = document.getElementById("slide-btn-left");
const nextButton = document.getElementById("slide-btn-right");

const agentWidth = agent.clientWidth;

nextButton.addEventListener("click", () => {
  agentSlider.scrollLeft += agentWidth;
});

prevButton.addEventListener("click", () => {
  agentSlider.scrollLeft -= agentWidth;
});

setInterval(() => {
  nextButton.click();
  let nrElements = document.querySelectorAll("#agent-slider li").length;

  let lastLocation = agentWidth * (nrElements - 2);

  if (agentSlider.scrollLeft >= lastLocation) {
    agentSlider.scrollLeft = 0;
  }
}, 6000);
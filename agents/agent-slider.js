const agentSlider = document.getElementById("agent-slider");
const agent = document.querySelector(".agent");
const prevButton = document.getElementById("slide-btn-left");
const nextButton = document.getElementById("slide-btn-right");

nextButton.addEventListener("click", () => {
  const agentWidth = agent.clientWidth;
  agentSlider.scrollLeft += agentWidth;
});

prevButton.addEventListener("click", () => {
  const agentWidth = agent.clientWidth;
  agentSlider.scrollLeft -= agentWidth;
});
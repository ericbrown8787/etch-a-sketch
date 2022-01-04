const etchContainer = document.getElementById("etchContainer");
const root = document.querySelector(":root");

// const etchBoxContent = document.createTextNode("meow");

function populateGrid(squaresPerSide) {
  let boxHeight = etchContainer.offsetHeight / squaresPerSide;
  let boxWidth = etchContainer.offsetWidth / squaresPerSide;
  root.style.setProperty("--grid-columns", `${squaresPerSide}`);
  root.style.setProperty("--grid-rows", `${squaresPerSide}`);
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    let gridBox = document.createElement("div");
    gridBox.style.cssText = `height: ${boxHeight}px; width: ${boxWidth}px`;
    gridBox.classList.add("etchPixel");
    etchContainer.appendChild(gridBox);
  }

  changeColor();
}

function changeColor() {
  let gridContents = document.querySelectorAll(".etchPixel");
  gridContents.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.backgroundColor = "#000000";
    });
  });
}

populateGrid(64);
// etchContainer.innerHTML += etchBoxContent;

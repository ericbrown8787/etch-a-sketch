//%%%%%%%%%%%%%%%%%% Global Variables
const generateGridButton = document.getElementById("generateGridButton");

const gridDimensionsInput = document.getElementById("gridDimensions");

let gridDimensions = gridDimensionsInput.valueAsNumber;

function randomColor() {
  let r = () => (Math.random() * 256) >> 0;
  let color = `rgb(${r()}, ${r()}, ${r()})`;
  return color;
}

//%%%%%%%%%%%%%%%%%%%%%%%%% Functions
function populateGrid(squaresPerSide) {
  const gridContainer = document.getElementById("gridContainer");
  // Placing Grid Box divs in document fragment before appending to improve performance
  const gridContents = document.createDocumentFragment();
  const root = document.querySelector(":root");
  let boxSide = gridContainer.offsetHeight / squaresPerSide;

  //Allocates space in grid based on input value
  root.style.setProperty("--grid-columns", `${squaresPerSide}`);
  root.style.setProperty("--grid-rows", `${squaresPerSide}`);

  //Clears previous grid content, if any
  gridContainer.innerHTML = "";

  //Loop to append grid boxes to grid container div with styling
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    let gridBox = document.createElement("div");
    gridBox.style.cssText = `height: ${boxSide}px; 
      width: ${boxSide}px;
      outline: 1px solid gray;
      margin: 0;
      padding: 0;
      background-color: #ffffff;`;
    gridBox.classList.add("etchPixel");
    gridContents.appendChild(gridBox);
  }
  gridContainer.appendChild(gridContents);
}

//Adds color change functionality on mouseover to each grid pixel
function changeColor() {
  const colorModeInput = document.getElementsByName("colorModeInput");
  const etchPixels = document.querySelectorAll(".etchPixel");

  etchPixels.forEach((pixel) => {
    pixel.addEventListener("mouseenter", () => {
      let colorMode;
      let pixelColor;
      for (let option of colorModeInput) {
        if (option.checked) {
          colorMode = option.value;
        }
      }

      if (colorMode === "black") {
        pixelColor = "#000000";
      } else if (colorMode === "random") {
        pixelColor = randomColor();
      } else if (colorMode === "white") {
        pixelColor = "#FFFFFF";
      }
      pixel.style.backgroundColor = pixelColor;
    });
  });
}

//generates a new grid and attaches event listeners to each pixel
function generateNewGrid() {
  populateGrid(gridDimensions);
  changeColor();
}

//%%%%%%%%%%%%%%%%%%%%%%%%% Event Listeners
gridDimensionsInput.addEventListener("input", () => {
  gridDimensions = gridDimensionsInput.valueAsNumber;
  const dimensionsMultiplier = document.getElementById("dimensionsMultiplier");
  dimensionsMultiplier.innerHTML = `Grid Dimensions: ${gridDimensions}x${gridDimensions}`;
});

generateGridButton.addEventListener("click", () => {
  generateNewGrid();
});

//%%%%%%%%%%%%%%%%%%%%%%%%% Code To Execute on Page Load
generateNewGrid(gridDimensions);
dimensionsMultiplier.innerHTML = `Grid Dimensions: ${gridDimensions} x ${gridDimensions}`;

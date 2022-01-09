// const gridContainer = document.getElementById("gridContainer");
// const root = document.querySelector(":root");

// const etchBoxContent = document.createTextNode("meow");

function populateGrid(squaresPerSide) {
  const gridContainer = document.getElementById("gridContainer");
  const gridContents = document.createDocumentFragment();
  const root = document.querySelector(":root");
  let boxHeight = gridContainer.offsetHeight / squaresPerSide;
  let boxWidth = gridContainer.offsetWidth / squaresPerSide;

  //Allocates space in grid based on input value
  root.style.setProperty("--grid-columns", `${squaresPerSide}`);
  root.style.setProperty("--grid-rows", `${squaresPerSide}`);

  //Clears previous grid content, if any
  gridContainer.innerHTML = "";

  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    let gridBox = document.createElement("div");
    gridBox.style.cssText = `height: ${boxHeight}px; 
      width: ${boxWidth}px;
      outline: 1px solid black;
      margin: 0;
      padding: 0;
      background-color: #ffffff;`;
    gridBox.classList.add("etchPixel");
    gridBox.textContent = " ";
    gridContents.appendChild(gridBox);
  }

  gridContainer.appendChild(gridContents);
}

function changeColor() {
  const etchPixels = document.querySelectorAll(".etchPixel");
  etchPixels.forEach((pixel) => {
    pixel.addEventListener("mouseenter", () => {
      pixel.style.backgroundColor = "#000000";
    });
  });
}

function generateNewGrid() {
  populateGrid(gridDimensions);
  changeColor();
}

const generateGridButton = document.getElementById("generateGridButton");

const gridDimensionsInput = document.getElementById("gridDimensions");

let gridDimensions = gridDimensionsInput.valueAsNumber;

// gridDimensionsInput.addEventListener("input", (inputEvent) => {
//   const charCode = inputEvent.charCode;
//   if (charCode < 48 || charCode > 57) {
//     inputEvent.preventDefault();
//     alert("Invalid!");
//     console.log("this worked");
//   }
// });

gridDimensionsInput.addEventListener("input", () => {
  gridDimensions = gridDimensionsInput.valueAsNumber;
  const dimensionsMultiplier = document.getElementById("dimensionsMultiplier");
  dimensionsMultiplier.innerHTML = ` x ${gridDimensions}`;
});

generateGridButton.addEventListener("click", () => {
  generateNewGrid();
});

generateNewGrid(gridDimensions);

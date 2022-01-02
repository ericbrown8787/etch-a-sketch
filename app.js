const etchContainer = document.getElementById("etchContainer");

// const etchBoxContent = document.createTextNode("meow");

function populateGrid(columns, rows) {
  for (let i = 0; i < columns * rows; i++) {
    let gridBox = document.createElement("div");
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

populateGrid(16, 16);
// etchContainer.innerHTML += etchBoxContent;

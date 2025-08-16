// Semantic layout for SEO
const body = document.querySelector("body");
const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");

body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);

// Add text utility
function addText(content, parentElemet) {
  const div = document.createElement("div");
  div.textContent = content;
  div.classList.add("text");
  parentElemet.appendChild(div);
}

// Header
addText("Color Scheme Switcher", header);

// Color boxes parent container
const parentBox = document.createElement("section");
parentBox.classList.add("parentBox");
main.appendChild(parentBox);

function addBox(color) {
  const button = document.createElement("button");
  button.style.backgroundColor = color;
  button.classList.add("box");
  button.setAttribute("id", color);
  parentBox.appendChild(button);
}

const colors = ["gray", "white", "blue", "yellow"];
colors.forEach((color) => addBox(color));

// Event handling when box is clicked
const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    const boxColor = e.target.style.backgroundColor;
    body.style.backgroundColor = boxColor;
  });
});

// Footer
addText("Click on box to see the change", footer);


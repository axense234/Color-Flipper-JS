import { CSS_COLOR_NAMES } from "../data.js";

const colorText = document.getElementById("color");
const clickmebutton = document.getElementById("clickmebutton");

// Computes a random rgb color
function rgbRandom() {
  let firstColor = Math.floor(Math.random() * 255);
  let secondColor = Math.floor(Math.random() * 255);
  let thirdColor = Math.floor(Math.random() * 255);

  const rgbColor = `rgb(${firstColor}, ${secondColor}, ${thirdColor})`;

  let background = document.getElementById("main-content");
  background.style.backgroundColor = rgbColor;

  colorText.innerText = rgbColor;
  clickmebutton.style.backgroundColor = rgbColor;
  return rgbColor;
}

// Chooses a random color from CSS_COLOR_NAMES
function colorRandom() {
  let colorIndex = Math.floor(Math.random() * CSS_COLOR_NAMES.length);

  let background = document.getElementById("main-content");
  background.style.backgroundColor = CSS_COLOR_NAMES[colorIndex];

  colorText.innerText = CSS_COLOR_NAMES[colorIndex];
  clickmebutton.style.backgroundColor = CSS_COLOR_NAMES[colorIndex];
  return CSS_COLOR_NAMES[colorIndex];
}

clickmebutton.addEventListener("click", function () {
  const randomChoice = Math.floor(Math.random() * 2 + 1);
  if (randomChoice == 1) {
    colorRandom();
  } else if (randomChoice == 2) {
    rgbRandom();
  }
});

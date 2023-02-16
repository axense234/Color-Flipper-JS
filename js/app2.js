import { hexOptions } from "../data.js";

const colorText = document.getElementById("color");
const clickmebutton = document.getElementById("clickmebutton");

function randomValue() {
  const randomIndex = Math.floor(Math.random() * hexOptions.length);

  const randomValueFromOptions = hexOptions[randomIndex];

  return randomValueFromOptions;
}

function randomSection() {
  return `#${randomValue()}${randomValue()}${randomValue()}${randomValue()}${randomValue()}${randomValue()}`;
}

clickmebutton.addEventListener("click", function () {
  const hexValue = randomSection();

  let background = document.getElementById("main-content");
  background.style.backgroundColor = hexValue;
  colorText.innerText = hexValue;
  clickmebutton.style.backgroundColor = hexValue;
});

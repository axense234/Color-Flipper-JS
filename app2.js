const letters = ["a", "b", "c", "d", "e", "f"];
const colorText = document.querySelector("span"); //The span
const clickmebutton = document.querySelector("button");

function randomNum() {
  return Math.floor(Math.random() * 9 + 1);
}

function randomLetter() {
  return Math.floor(Math.random() * 6);
}
// console.log(randomNum());
// console.log(randomLetter());

function randomSection(cbNum, cbLetter) {
  // Letter Number
  const randomPart1 = `${letters[cbLetter()]}${cbNum()}`;
  // Number Letter
  const randomPart2 = `${cbNum()}${letters[cbLetter()]}`;
  // Letter Letter
  const randomPart3 = `${letters[cbLetter()]}${letters[cbLetter()]}`;
  // Number Number
  const randomPart4 = `${cbNum()}${cbNum()}`;
  // An array of those parts
  const partsArray = [randomPart1, randomPart2, randomPart3, randomPart4];
  // Function that returns a part at random
  function randomPart() {
    let number = Math.floor(Math.random() * 4);
    return partsArray[number];
  }
  console.log(partsArray);
  console.log(randomPart1);
  console.log(randomPart2);

  return `#${randomPart()}${randomPart()}${randomPart()}`;
}

// const hexValue = randomSection(randomNum, randomLetter);
// console.log(hexValue);

clickmebutton.addEventListener("click", function () {
  const hexValue = randomSection(randomNum, randomLetter);
  let background = document.querySelector(".maincontent");
  background.style.backgroundColor = hexValue;
  colorText.style.color = hexValue;
  colorText.innerText = hexValue;
  clickmebutton.style.backgroundColor = hexValue;
});

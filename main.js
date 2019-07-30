"use strict";

const button = document.querySelector(".btn");
const dice_container = document.querySelector(".dice");

function rollIt() {
  //debugger;
  const randomNumber = getRandomNumber();
  if (randomNumber === 1) {
    dice_container.innerHTML = "<img src='./images/one.png' class='image'>";
  } else if (randomNumber === 2) {
    dice_container.innerHTML = "<img src='./images/two.png' class='image'>";
  } else if (randomNumber === 3) {
    dice_container.innerHTML = "<img src='./images/three.png' class='image'>";
  } else if (randomNumber === 4) {
    dice_container.innerHTML = "<img src='./images/four.png' class='image'>";
  } else if (randomNumber === 5) {
    dice_container.innerHTML = "<img src='./images/five.png' class='image'>";
  } else if (randomNumber === 6) {
    dice_container.innerHTML = "<img src='./images/six.png' class='image'>";
  } else {
    dice_container.innerHTML = "¿Qué ha pachao?";
  }
  console.log(randomNumber);
}

const getRandomNumber = function() {
  return Math.floor(Math.random() * 6) + 1;
};

button.addEventListener("click", rollIt);

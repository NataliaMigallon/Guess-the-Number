"use strict";

const numberInput = document.querySelector(".js-number");
const testButton = document.querySelector(".js-button");
const tipElement = document.querySelector(".js-tip");
const counterInput = document.querySelector(".js-counter");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function renderTip(message) {
  tipElement.innerHTML = "Clue: " + message;
}

function checkNumber() {
  const userNumberValue = numberInput.value;
  const numberValue = parseInt(userNumberValue);

  if (isNaN(numberValue)) {
    renderTip("It must be a number between 1 and 100");
  } else if (numberValue < 1 || numberValue > 100) {
    renderTip("It must be a number between 1 and 100");
  } else if (numberValue > randomNumber) {
    renderTip("Too high, try a lower number");
  } else if (numberValue < randomNumber) {
    renderTip("Too low, try a higher number");
  } else if (numberValue === randomNumber) {
    renderTip("You're the winner!");
  }
}

function handleClickCounter() {
  triesCounter = triesCounter + 1;
  counterInput.value = `Attempts: ${triesCounter}`;
}

function handleClickTestButton(event) {
  checkNumber();
  handleClickCounter();
}
const randomNumber = getRandomNumber(100);
let triesCounter = 0;

testButton.addEventListener("click", handleClickTestButton);

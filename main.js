"use strict";

const numberInput = document.querySelector(".js-number");
const testButton = document.querySelector(".js-button");
const tipElement = document.querySelector(".js-tip");
const counterInput = document.querySelector(".js-counter");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function renderTip(message) {
  tipElement.innerHTML = "Pista: " + message;
}

function checkNumber() {
  const userNumberValue = numberInput.value;
  const numberValue = parseInt(userNumberValue);

  if (isNaN(numberValue)) {
    renderTip("El número debe estar entre 1 y 100");
  } else if (numberValue < 1 || numberValue > 100) {
    renderTip("El número debe estar entre 1 y 100");
  } else if (numberValue > randomNumber) {
    renderTip("Demasiado alto");
  } else if (numberValue < randomNumber) {
    renderTip("Demasiado bajo");
  } else if (numberValue === randomNumber) {
    renderTip("¡¡Has ganado!!");
  }
}

function handleClickCounter() {
  triesCounter = triesCounter + 1;
  counterInput.value = `Número de intentos: ${triesCounter}`;
}

function handleClickTestButton(event) {
  checkNumber();
  handleClickCounter();
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber);
let triesCounter = 0;

testButton.addEventListener("click", handleClickTestButton);

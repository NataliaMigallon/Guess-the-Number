'use strict';

//Siento no haber podido hacer el ejercicio. Me he bloqueado y no sé ni lo que tengo que hacer. 

const myNumberElement = document.querySelector('.js-input-mynumber');
const buttonElement = document.querySelector('.js-button');


function getRandomNumber(max) {
    console.log(Math.ceil);
    return Math.ceil(Math.random() * max);
}

function handleButton(event) {
    const buttonElementValue = event.target.value;
    console.log('Me han clickado');
}

buttonElement.addEventListener('click', handleButton)

function handleMyNumber(event) {
    const myNumberElementValue = event.target.value;
    console.log(myNumberElement);
}

myNumberElement.addEventListener('keyup', handleMyNumber)
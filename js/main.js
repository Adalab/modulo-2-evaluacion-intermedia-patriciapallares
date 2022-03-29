'use strict';

console.log('desayuno');

// Constantes

const select = document.querySelector('.js-select');
const button = document.querySelector('.js-button');
const goText = document.querySelector('.js-go-text');
const emptyText = document.querySelector('.js-empty-text')


// funciones
function getRandomNumber(max) {
   return Math.ceil(Math.random()*max);
}

// función para que aparezca un mensaje u otro en función de si el número aleatorio y el de la usuaria son el mismo o no.
function displayMessage() {
  // variable para el número aleatorio
  const pcNum = getRandomNumber(6);
  console.log(pcNum);
  // variable para el valor seleccionado por la usuaria
  const userNum = select.value;
  // variable para hacer número el valor seleccionado por la usuaria
  const realNum = parseInt(userNum); 
  console.log(realNum);

  if (pcNum === realNum) {
    goText.classList.add('hidden');
    emptyText.innerHTML = `¡Has ganado el doble de lo apostado :D!`
  } else if (pcNum !== realNum) {
    goText.classList.add('hidden');
    emptyText.innerHTML = `¡Has perdido lo apostado D:!`
  } 
}

// intento hacer una función manejadora
function handleClickButton (event) {
  event.preventDefault();
  displayMessage();
}

// Codigo a ejecutar cuando carga la página
button.addEventListener('click',handleClickButton);
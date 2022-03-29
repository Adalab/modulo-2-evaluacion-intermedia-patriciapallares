'use strict';

// variables
const selectNum = document.querySelector('.js-select');
const button = document.querySelector('.js-button');
const goText = document.querySelector('.js-go-text');
const emptyText = document.querySelector('.js-empty-text')
const diceText = document.querySelector('.js-dice');

// BONUS variables: no supe hacerlo, sigo
let initValue = 50;
const moneyLeft = document.querySelector('.js-money-left');
const selectMoney = document.querySelector('.js-user-money');

// BONUS + variables
const reButton = document.querySelector('.js-re-button');
const section = document.querySelector('.js-section');
const winnerIs = document.querySelector('.js-winner-is');

// BONUS pre-eventos: no supe hacerlo, sigo
moneyLeft.innerHTML = `Saldo: ${initValue}`;


// funciones
function getRandomNumber(max) {
   return Math.ceil(Math.random()*max);
}

// función para que aparezca un mensaje u otro en función de si el número aleatorio y el de la usuaria son el mismo o no.
function displayMessage() { 
  // variable para el número aleatorio
  const pcNum = getRandomNumber(6);
  // variable para el valor seleccionado por la user
  const userNum = selectNum.value;
  // variable para hacer número el valor seleccionado por la user
  const realNum = parseInt(userNum); 

  // BONUS variable para el valor seleccionado por la user
  const herChoiceMoney = selectMoney.value;
  // variable para hacer número el valor seleccionado por la user
  const realMoney = parseInt(herChoiceMoney); 

  if (pcNum === realNum) {
    goText.classList.add('hidden');
    emptyText.innerHTML = `¡Has ganado el doble de lo apostado :D!`;
    // moneyLeft.innerHTML = `Saldo: ${initValue + realMoney*2}`;

  } else if (pcNum !== realNum) {
    goText.classList.add('hidden');
    emptyText.innerHTML = `¡Has perdido lo apostado D:!`;
    // moneyLeft.innerHTML = `Saldo: ${initValue - realMoney}`;
  }
  // mostrar el resultado aleatorio  
  diceText.innerHTML = `Dado: ${pcNum}`
}
// función si moneyLeft === 0 o 200, donde NUM será el valor del saldo total: no supe hacerlo, sigo
function endOfGame(NUM) {
  moneyLeft.value = NUM;

  if (NUM === 200){
    section.classList.add('hidden');
    winnerIs.innerHTML = `¡¡Eres la ganadora!!`
    reButton.classList.remove('hidden');
  } else if ( NUM === 0) {
    section.classList.add('hidden');
    winnerIs.innerHTML = `Sorry, ha ganado el cpu :'(`;
    reButton.classList.remove('hidden');
  }
};

endOfGame();

function restart() {
  reButton.classList.add('hidden');
  winnerIs.classList.add('hidden');
  section.classList.remove('hidden');
};


// intento hacer una función manejadora
function handleClickButton (event) {
  event.preventDefault();
  displayMessage();
}

// Codigo a ejecutar cuando carga la página
button.addEventListener('click',handleClickButton);
reButton.addEventListener('click', restart);
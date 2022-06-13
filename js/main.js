'use strict';

// variables
const selectNum = document.querySelector('.js-select');
const button = document.querySelector('.js-button');
const goText = document.querySelector('.js-go-text');
const emptyText = document.querySelector('.js-empty-text');
const diceText = document.querySelector('.js-dice');

// BONUS variables: no supe hacerlo, sigo
let value = 50;
const moneyLeft = document.querySelector('.js-money-left');
const selectMoney = document.querySelector('.js-user-money');

// BONUS + variables
const reButton = document.querySelector('.js-re-button');
const section = document.querySelector('.js-section');
const winnerIs = document.querySelector('.js-winner-is');

// BONUS pre-eventos: no supe hacerlo, sigo
moneyLeft.innerHTML = `Saldo: ${value}`;

// funciones
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function message(msg) {
  goText.classList.add('hidden');
  emptyText.innerHTML = msg;
}

// función para que aparezca un mensaje u otro en función de si el número aleatorio y el de la usuaria son el mismo o no.
function paintMessage(pcnum, usernum) {
  if (pcnum === usernum) {
    message(`¡Has ganado el doble de lo apostado :D!`);
  } else {
    message(`¡Has perdido lo apostado D:!`);
    // mostrar el resultado aleatorio
    diceText.innerHTML = `Dado: ${pcnum}`;
  }
}

function game(pcnum, usernum) {
  const cantidad = parseInt(selectMoney.value);

  if (cantidad > value) {
    emptyText.innerHTML = `No puedes apostar más de lo que tienes`;
  } else {
    if (pcnum === usernum) {
      value = cantidad * 2 + value;
      console.log(`if ` + value);
    } else {
      value = value - cantidad;
      console.log(`else ` + value);
    }
  }
}

// función si value === 0 || 200, donde value será el valor del saldo total: no supe hacerlo, sigo
function endOfGame() {
  if (value === 200) {
    section.classList.add('hidden');
    winnerIs.innerHTML = `¡¡Eres la ganadora!!`;
    reButton.classList.remove('hidden');
  } else if (value === 0) {
    section.classList.add('hidden');
    winnerIs.innerHTML = `Sorry, ha ganado el cpu :'(`;
    reButton.classList.remove('hidden');
  }
}

console.log(value);

function restart(event) {
  event.preventDefault;

  reButton.classList.add('hidden');
  winnerIs.classList.add('hidden');
  section.classList.remove('hidden');
  emptyText.classList.add('hidden')
  value = 50;
  selectMoney.value = 0;
  moneyLeft.innerHTML = `Saldo: ${value}`;
}

// intento hacer una función manejadora
function handleClickButton(event) {
  event.preventDefault();
  // variable para el número aleatorio
  const pcNum = getRandomNumber(6);
  // variable para el valor (número) seleccionado por la user
  const userNum = parseInt(selectNum.value);
  paintMessage(pcNum, userNum);
  game(pcNum, userNum);
  moneyLeft.innerHTML = `Saldo: ${value}`;
  endOfGame();
}

// Codigo a ejecutar cuando carga la página
button.addEventListener('click', handleClickButton);
reButton.addEventListener('click', restart);

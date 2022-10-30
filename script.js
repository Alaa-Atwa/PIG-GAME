'use strict';
// elements
const rollDice = document.querySelector('.btn--roll');
const diceImage = document.querySelector('.dice');
const player0 = document.querySelector('.player--0');
const score0 = document.querySelector('#score--0');
const currentScore0 = document.querySelector('#current--0');
const player1 = document.querySelector('.player--1');
const score1 = document.querySelector('#score--1');
const currentScore1 = document.querySelector('#current--1');
const holdScore = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

let randomDice;
score0.textContent = 0;
score1.textContent = 0;
//player1
let totalScore0 = 0;
let total0 = 0;
const playerOneActive = function () {
  totalScore0 += randomDice;
  currentScore0.textContent = totalScore0;
};

//player2
let total1 = 0;
let totalScore1 = 0;
const playerTwoActive = function () {
  totalScore1 += randomDice;
  currentScore1.textContent = totalScore1;
};

let playing = true;

// Rolling The Dice Logic
rollDice.addEventListener('click', function () {
  if (playing) {
    randomDice = Number(Math.floor(Math.random() * 6) + 1);
    diceImage.setAttribute('src', `./dice-images/dice-${randomDice}.png`);
    if (randomDice === 1) {
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
    }
    if (player0.classList.contains('player--active')) {
      playerOneActive();
      currentScore1.textContent = 0;
      totalScore1 = 0;
    } else {
      playerTwoActive();
      currentScore0.textContent = 0;
      totalScore0 = 0;
    }
  }
});
// confirm replaying
let winner = 1;
const resetGame = () => {
  let r = confirm(`player ${winner} wins ! , Reset Game? `);
  if (r == true) location.reload();
};

// holding The Score And Determine The Winner
holdScore.addEventListener('click', function () {
  if (player0.classList.contains('player--active')) {
    totalScore1 = 0;
    total0 += totalScore0;
    score0.textContent = total0;
    currentScore0.textContent = 0;
    if (total0 >= 30) {
      player0.classList.add('player--winner');
      resetGame();
    }
  } else {
    totalScore0 = 0;
    total1 += totalScore1;
    score1.textContent = total1;
    currentScore1.textContent = 0;
    if (total1 >= 30) {
      player1.classList.add('player--winner');
      winner = 2;
      resetGame();
    }
  }
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
});

// Reseting The Game
newGame.addEventListener('click', function () {
  location.reload();
});


"use strict";

//Selecting elements
let player0El = document.querySelector(".player--0");
let player1El = document.querySelector(".player--1");
let score0El = document.querySelector("#score--0");
let score1El = document.getElementById("score--1");
let current0El = document.getElementById("current--0");
let current1El = document.getElementById("current--1");
let diceEl = document.querySelector(".dice");
let btnNew = document.querySelector(".btn--new");
let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");
let scores, currentScore, activePlayer, activeGame;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let init = function () {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  activeGame = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

init();

let playerSwitch = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//Rolling dice
btnRoll.addEventListener("click", function () {
  if (activeGame) {
    let dice = Math.trunc(Math.random() * 6 + 1);
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    if (dice != 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to the other player
      playerSwitch();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (activeGame) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      activeGame = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      playerSwitch();
    }
  }
});

btnNew.addEventListener("click", function () {
  init();
});

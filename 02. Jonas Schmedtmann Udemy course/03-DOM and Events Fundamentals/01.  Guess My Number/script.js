"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
let displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
let displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
let displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
let backgroundColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};
let numberWidth = function (width) {
  document.querySelector(".number").style.width = width;
};
let displayHighscore = function (highscore) {
  document.querySelector(".highscore").textContent = highscore;
};
let displayValue = function (value) {
  guess = document.querySelector(".guess").value = value;
};

//PLAYING THE GAME
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  //There is no input
  if (!guess) {
    displayMessage("⛔ No number!");
  } else if (guess < 1 || guess > 20) {
    displayMessage("⛔ The number should be between 1 and 20");
  }

  //When player wins
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    displayNumber(secretNumber);
    backgroundColor(`#60b347`);
    numberWidth("30rem");
    if (highScore < score) {
      displayHighscore(score);
    }
  }

  //When the guess is wrong
  else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("💣 You lost the game!");
      displayScore(0);
      backgroundColor("orangered");
      displayNumber(secretNumber);
    }
  }
});

//STARTING A NEW GAME
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayNumber("?");
  backgroundColor(`#333`);
  numberWidth("15rem");
  displayMessage("Start guessing...");
  displayScore(score);
  displayValue("");
});

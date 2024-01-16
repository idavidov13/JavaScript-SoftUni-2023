// 10. *Tic-Tac-Toe

// Make a tic-tac-toe console application.

// You will receive an array of arrays. As you know there are two players in this game, so the first element of the input will be the first player's chosen coordinates, the second element will be the second player's turn coordinates, and so on.

// The initial state of the dashboard is

// [[false, false, false],

// [false, false, false],

// [false, false, false]]

// The first player's mark is X and the second player's mark is O.

// Input

// One parameter:

// · An array - the moves in a row that players make

// Output

// · There are two players - X and O

// · If a player tries to make his turn on already taken place, he should take his turn again and you should print the following message:

// "This place is already taken. Please choose another!"

// · If there are no free spaces on the dashboard and nobody wins the game should end and you should print the following message:

// "The game ended! Nobody wins :("

// · If someone wins you should print the following message and the current state of the dashboard:

// "Player {x} wins!"

// Note: When printing the state of the dashboard the elements of each row of the dashboard should be separated by "\t" and each row should be on a new line.

// Constraints

// The elements in the input array will always be enough to end the game.

function ticTacToe(arr) {
  let board = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
  let takenSquares = 0;
  let playerOneMove = true;
  while (arr.length > 0) {
    let curSquare = arr.shift();
    // console.log(curSquare);
    // console.log(curSquare[0], curSquare[2]);

    if (board[curSquare[0]][curSquare[2]] !== false) {
      console.log("This place is already taken. Please choose another!");
      continue;
    }

    if (playerOneMove) {
      playerOneMove = false;
      board[curSquare[0]][curSquare[2]] = "X";
      //console.log(board[curSquare[0]][curSquare[2]]);
    } else {
      playerOneMove = true;
      board[curSquare[0]][curSquare[2]] = "O";
      //console.log(board[curSquare[0]][curSquare[2]]);
    }

    takenSquares++;
    //console.log(takenSquares);

    if (takenSquares === 9) {
      console.log("The game ended! Nobody wins :(");
      board.forEach((el) => console.log(el.join(" ")));
      break;
    }

    if (takenSquares > 5) {
      if (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") {
        console.log("Player X wins!");
        board.forEach((el) => console.log(el.join(" ")));
        break;
      } else if (
        board[1][0] == "X" &&
        board[1][1] == "X" &&
        board[1][2] == "X"
      ) {
        console.log("Player X wins!");
        board.forEach((el) => console.log(el.join(" ")));
        break;
      } else if (
        board[2][0] == "X" &&
        board[2][1] == "X" &&
        board[2][2] == "X"
      ) {
        console.log("Player X wins!");
        board.forEach((el) => console.log(el.join(" ")));
        break;
      } else if (
        board[0][0] == "X" &&
        board[1][1] == "X" &&
        board[2][2] == "X"
      ) {
        console.log("Player X wins!");
        board.forEach((el) => console.log(el.join(" ")));
        break;
      } else if (
        board[0][2] == "X" &&
        board[1][1] == "X" &&
        board[2][0] == "X"
      ) {
        console.log("Player X wins!");
        board.forEach((el) => console.log(el.join(" ")));
        break;
      } else if (
        board[0][0] == "O" &&
        board[0][1] == "O" &&
        board[0][2] == "O"
      ) {
        console.log("Player O wins!");
        board.forEach((el) => console.log(el.join(" ")));
        break;
      } else if (
        board[1][0] == "O" &&
        board[1][1] == "O" &&
        board[1][2] == "O"
      ) {
        console.log("Player O wins!");
        board.forEach((el) => console.log(el.join(" ")));
        break;
      } else if (
        board[2][0] == "O" &&
        board[2][1] == "O" &&
        board[2][2] == "O"
      ) {
        console.log("Player O wins!");
        board.forEach((el) => console.log(el.join(" ")));
        break;
      } else if (
        board[0][0] == "O" &&
        board[1][1] == "O" &&
        board[2][2] == "O"
      ) {
        console.log("Player O wins!");
        board.forEach((el) => console.log(el.join(" ")));
        break;
      } else if (
        board[0][2] == "O" &&
        board[1][1] == "O" &&
        board[2][0] == "O"
      ) {
        console.log("Player O wins!");
        board.forEach((el) => console.log(el.join(" ")));
        break;
      }
    }
  }
}
ticTacToe([
  "0 1",

  "0 0",

  "0 2",

  "2 0",

  "1 0",

  "1 2",

  "1 1",

  "2 1",

  "2 2",

  "0 0",
]);

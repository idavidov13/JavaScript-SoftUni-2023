// 12. *Orbit

// You will be given an empty rectangular space of cells. Then you will be given the position of a star. You need to build the orbits around it.
// You will be given a coordinate of a cell, which will always be inside the matrix, on which you will put the value - 1. Then you must set the values of the cells directly surrounding that cell, including the diagonals, to 2. After which you must set the values of the next surrounding cells to 3 and so on. Check the pictures for more information.

// For example, we are given a matrix that has 5 rows and 5 columns, and the star is at coordinates - 0, 0. Then the following should happen:

// The input comes as an array of 4 numbers [width, height, x, y] which represents the dimensions of the matrix and the coordinates of the star.

// The output is the filled matrix, with the cells separated by a space, each row on a new line.
function orbit(arr) {
  let width = arr.shift();
  let height = arr.shift();
  let x = arr.shift();
  let y = arr.shift();
  let board = [];

  for (let i = 0; i < height; i++) {
    let curArr = [];
    for (let j = 0; j < width; j++) {
      curArr.push(0);
    }
    board.push(curArr);
  }

  board[x][y] = 1;

  for (let k = 2; k <= width; k++) {
    for (let i = x + 1 - k; i <= x - 1 + k; i++) {
      for (let j = y + 1 - k; j <= y - 1 + k; j++) {
        if (i >= 0 && j >= 0 && i < height && j < width) {
          if (board[i][j] == 0) board[i][j] = k;
        }
      }
    }
  }

  board.forEach((el) => console.log(el.join(" ")));
}

orbit([5, 5, 2, 2]);

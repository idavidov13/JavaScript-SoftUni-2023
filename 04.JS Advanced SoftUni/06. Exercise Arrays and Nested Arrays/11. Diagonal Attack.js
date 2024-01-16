// 11. **Diagonal Attack

// Write a JS function that reads a given matrix of numbers and checks if both main diagonals have equal sums. If they do, set every element that is NOT part of the main diagonals to that sum, alternatively just print the matrix unchanged.

// The input comes as an array of strings. Each element represents a string of numbers, with spaces between them. Parse it into a matrix of numbers, so you can work with it.

// The output is either the new matrix, with all cells not belonging to a main diagonal are changed to the diagonal sum, or the original matrix if the two diagonals have different sums. You need to print every row on a new line, with cells separated by a space. Check the examples below.
function diagonalAttack(arr) {
  let matrix = arr.map((str) => str.split(" ").map(Number));
  let sumFirst = 0;
  let sumSecond = 0;

  for (let i = 0; i < matrix.length; i++) {
    sumFirst += Number(matrix[i][i]);
    sumSecond += Number(matrix[matrix.length - 1 - i][i]);
  }

  if (sumFirst === sumSecond) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (i !== j && j + i !== matrix.length - 1) {
          matrix[i][j] = sumFirst;
        }
      }
    }
  }
  matrix.forEach((el) => console.log(el.join(" ")));
}

diagonalAttack([
  "5 3 12 3 1",

  "11 4 23 2 5",

  "101 12 3 21 10",

  "1 4 5 2 2",

  "5 22 33 11 1",
]);

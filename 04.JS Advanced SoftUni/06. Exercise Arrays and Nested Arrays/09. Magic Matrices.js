// 9. Magic Matrices

// Write a function that checks if a given matrix of numbers is magical. A matrix is magical if the sums of the cells of every row and every column are equal.

// The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.

// The output is a Boolean result indicating whether the matrix is magical or not.
function magicMatrix(arr) {
  let sum = 0;
  let flag = true;

  for (let i = 0; i < arr[0].length; i++) {
    sum += arr[0][i];
  }

  for (let i = 0; i < arr.length; i++) {
    let curSumRow = 0;
    let curSumCol = 0;
    for (let j = 0; j < arr[i].length; j++) {
      curSumRow += arr[i][j];
      curSumCol += arr[j][i];
    }
    if (curSumRow !== sum || curSumCol !== sum) {
      flag = false;
    }
  }

  console.log(flag);
}
magicMatrix([1, 0, 0], [0, 0, 1], [0, 1, 0]);

// 6. Bomb Numbers

// Write a function that receives two parameters: sequence of numbers and special bomb number with a certain power.

// Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors from left and right. Detonations are performed from left to right and all detonated numbers disappear.

// The input contains two arrays of numbers. The first contains the initial sequence and the second contains the special bomb number and its power.

// The output is the sum of the remaining elements in the sequence.
function bombNumber(arr1, arr2) {
  let mines = [...arr1];
  let bomb = arr2[0];
  let strength = arr2[1];
  while (mines.includes(bomb)) {
    let index = mines.indexOf(bomb);
    let startIndex = Math.max(index - strength, 0);
    let endIndex = Math.min(index + strength, mines.length - 1);
    mines.splice(startIndex, endIndex - startIndex + 1);
  }
  let sum = 0;
  mines.forEach((num) => (sum += num));
  console.log(sum);
}
bombNumber(
  [
    1, 1, 2, 1, 1, 1,

    2, 1, 1, 1,
  ],

  [2, 1]
);

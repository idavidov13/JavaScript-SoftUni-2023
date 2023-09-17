// Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples.
// • n will be in the interval [1...20].
// Examples
// Input Output Input Output Input Output
// 3 1
//   2 2
//   3 3 3
// 5 1
//   2 2
//   3 3 3
//   4 4 4 4
//   5 5 5 5 5
// 6 1
//   2 2
//   3 3 3
//   4 4 4 4
//   5 5 5 5 5
//   6 6 6 6 6 6
function printTriangle(n) {
  for (let i = 1; i <= n; i++) {
    console.log(`${i} `.repeat(i).trim());
  }
}
printTriangle(6);

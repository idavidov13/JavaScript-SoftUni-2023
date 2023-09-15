// Write a program that prints the next n odd numbers (starting from 1) and on the last row prints the sum of them.
// Input
// You will receive a number – n. This number shows how many odd numbers you should print.
// Output
// Print the next n odd numbers, starting from 1, separated by newlines.
// On the last line, print the sum of these numbers in the following format: `Sum: {total sum}`
// Constraints
// • n will be in the interval [1…100]
function sum(num) {
  let curNum = 1;
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    console.log(curNum);
    sum += curNum;
    curNum += 2;
  }
  console.log(`Sum: ${Number(sum)}`);
}
sum(5);

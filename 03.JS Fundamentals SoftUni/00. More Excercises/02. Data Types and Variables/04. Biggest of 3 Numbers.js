// 4. Biggest of 3 Numbers
// Write a function that finds the biggest number.
// The input comes as 3 parameters.
// The output is the biggest of the input numbers.
function biggest(num1, num2, num3) {
  let biggestNum = 0;
  if (num1 >= num2) {
    biggestNum = num1;
  } else {
    biggestNum = num2;
  }
  if (biggestNum >= num3) {
    console.log(biggestNum);
  } else {
    console.log(num3);
  }
}
biggest(130, 5, 99);

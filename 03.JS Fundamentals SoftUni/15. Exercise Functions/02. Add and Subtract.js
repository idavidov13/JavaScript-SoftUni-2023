// 2. Add and Subtract

// You will receive three integer numbers.

// Write a function sum() to calculate the sum of the first two integers and a function subtract(), which subtracts the result of the function sum() and the third integer.
function addAndSubstract(num1, num2, num3) {
  let sum = add(num1, num2);
  let result = subtract(sum, num3);

  function add(num1, num2) {
    return num1 + num2;
  }

  function subtract(sum, num3) {
    return sum - num3;
  }

  console.log(result);
}
addAndSubstract(23, 6, 10);

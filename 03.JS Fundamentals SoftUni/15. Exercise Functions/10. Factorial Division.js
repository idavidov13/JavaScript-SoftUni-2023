// 10. Factorial Division

// Write a function that receives two integer numbers. Calculate the factorial of each number. Divide the first result by the second and print the division formatted to the second decimal point.
function factorialDivision(num1, num2) {
  console.log((factorial(num1) / factorial(num2)).toFixed(2));
  function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}
factorialDivision(6, 2);

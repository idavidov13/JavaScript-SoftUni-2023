// 8. *Calculator

// Write a function that receives 3 parameters: a number, an operator (string), and another number.

// The operator can be: '+', '-', '/', '*'. Print the result of the calculation on the console formatted to the second decimal point.
function Calculator(num1, operator, num2) {
  if (operator === "+") {
    console.log((num1 + num2).toFixed(2));
  } else if (operator === "-") {
    console.log((num1 - num2).toFixed(2));
  } else if (operator === "*") {
    console.log((num1 * num2).toFixed(2));
  } else if (operator === "/") {
    console.log((num1 / num2).toFixed(2));
  }
}
Calculator(5, "+", 10);

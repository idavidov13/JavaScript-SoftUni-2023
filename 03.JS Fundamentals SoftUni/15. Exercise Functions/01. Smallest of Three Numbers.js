// 1. Smallest of Three Numbers

// Write a function that receives three integers and prints the smallest number. Use an appropriate name for the function.
function smallestNumber(num1, num2, num3) {
  let smallestNumber = num1;
  if (num2 < smallestNumber) {
    smallestNumber = num2;
  }
  if (num3 < smallestNumber) {
    smallestNumber = num3;
  }
  console.log(smallestNumber);
}
smallestNumber(2, 5, 3);

//Refactored
function smallestNumber(num1, num2, num3) {
  let smallestNumber = num1;
  console.log(Math.min(num1, num2, num3));
}
smallestNumber(2, 5, 3);

// 2. Greatest Common Divisor - GCD

// Write a function that takes two positive numbers as input and computes the greatest common divisor.

// The input comes as two positive integer numbers.

// The output should be printed on the console.

function divisor(num1, num2) {
  let maxDivisor = 1;
  let smallerNum = 0;
  if (num1 < num2) {
    smallerNum = num1;
  } else {
    smallerNum = num2;
  }
  for (let i = 1; i <= smallerNum; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      maxDivisor = i;
    }
  }
  console.log(maxDivisor);
}
divisor(2154, 458);

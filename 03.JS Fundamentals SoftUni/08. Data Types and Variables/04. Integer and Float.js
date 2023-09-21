// 4. Integer and Float

// You will receive 3 numbers. Your task is to find their sum and print result to the console in the following format: `{sum} - {type of the number (Integer or Float)}`
function sumType(numOne, numTwo, numThree) {
  let sum = numOne + numTwo + numThree;
  if (sum == Math.round(sum)) {
    console.log(`${sum} - Integer`);
  } else {
    console.log(`${sum} - Float`);
  }
}
sumType(9, 100, 1.1);

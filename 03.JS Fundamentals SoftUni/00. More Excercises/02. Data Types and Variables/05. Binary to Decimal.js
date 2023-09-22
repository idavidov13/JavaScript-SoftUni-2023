// 5. Binary to Decimal
// Write a function that reads an 8-bit binary number and converts it to a decimal.
// The input comes as one string element, representing a binary number. The output should be printed to the console

function solve(binaryStr) {
  let decimal = 0;
  for (let i = 0; i < binaryStr.length; i++) {
    decimal += parseInt(binaryStr[binaryStr.length - 1 - i]) * Math.pow(2, i);
  }
  // return decimal;
  console.log(decimal);
}
solve("00001001");

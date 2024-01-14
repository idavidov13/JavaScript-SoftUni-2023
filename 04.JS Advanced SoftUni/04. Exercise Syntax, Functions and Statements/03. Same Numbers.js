// 3. Same Numbers

// Write a function that takes an integer number as an input and checks if all the digits in a given number are the same or not.

// Print on the console true if all numbers are the same and false if not. On the next line, print the sum of all digits.

// The input comes as an integer number.

// The output should be printed on the console.
function sameNumber(num) {
  let string = num.toString();
  let allDigits = [];
  let flag = true;
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    allDigits.push(Number(string.charAt(i)));
  }

  let compare = allDigits[0];
  allDigits.forEach((digit) => {
    sum += digit;
    if (digit != compare) {
      flag = false;
    }
  });
  console.log(flag);
  console.log(sum);
}
sameNumber(2222222);

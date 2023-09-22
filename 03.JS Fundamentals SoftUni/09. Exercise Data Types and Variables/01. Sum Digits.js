// 1. Sum Digits

// Write a function, which will be given a single number. Your task is to find the sum of its digits.
function sum(num) {
  let sumOfNumbers = 0;
  let string = num.toString();
  for (let i = 0; i < string.length; i++) {
    sumOfNumbers += Number(string[i]);
  }
  console.log(sumOfNumbers);
}
sum(245678);

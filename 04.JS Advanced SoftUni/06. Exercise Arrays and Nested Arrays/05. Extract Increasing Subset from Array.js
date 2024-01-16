// 5. Extract Increasing Subset from Array

// Write a function that extracts only those numbers that form a non-decreasing subset. In other words, you start from the first element and continue to the end of the given array of numbers. Any number which is LESS THAN the current biggest one is ignored, alternatively if it’s equal or higher than the current biggest one you set it as the current biggest one and you continue to the next number.

// The input comes as an array of numbers.

// The output is the processed array after the filtration, which should be a non-decreasing subset. Return the array of numbers.
function extract(arr) {
  if (arr.length === 0) {
    return [];
  }

  let arrForPrint = [arr[0]];
  let biggestNum = arr.shift();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= biggestNum) {
      biggestNum = arr[i];
      arrForPrint.push(arr[i]);
    }
  }
  return arrForPrint;
}
console.log(extract([1, 3, 8, 4, 10, 12, 3, 2, 24]));

//Refactored
function extract2(arr) {
  if (arr.length === 0) {
    return [];
  }

  let arrForPrint = [arr[0]];
  let biggestNum = arr.shift();

  arr.forEach((el) => {
    if (biggestNum <= el) {
      biggestNum = el;
      arrForPrint.push(biggestNum);
    }
  });
  return arrForPrint;
}
console.log(extract2([1, 3, 8, 4, 10, 12, 3, 2, 24]));

//Refactored 2
function extract3(arr) {
  let biggestNum = arr[0];

  return arr.filter((el) => {
    if (el >= biggestNum) {
      biggestNum = el;
      return true;
    }
    return false;
  });
}
console.log(extract3([1, 3, 8, 4, 10, 12, 3, 2, 24]));

//Refactored 3
function extract4(arr) {
  let biggestNum = Number.MIN_SAFE_INTEGER;

  return arr.reduce((acc, el) => {
    if (el >= biggestNum) {
      biggestNum = el;
      acc.push(biggestNum);
    }
    return acc;
  }, []);
}
console.log(extract4([1, 3, 8, 4, 10, 12, 3, 2, 24]));

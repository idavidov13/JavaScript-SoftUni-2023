// 1. Sort Array

// Write a function that sorts an array with numeric values in ascending or descending order, depending on an argument that is passed to it.

// You will receive a numeric array and a string as arguments to the function in your code.

// · If the second argument is asc, the array should be sorted in ascending order (smallest values first).

// · If it is desc, the array should be sorted in descending order (largest first).

// Input

// You will receive a numeric array and a string as input parameters.

// Output

// The output should be the sorted array.

function sortArr(arr, str) {
  let sortedArr = [];
  if (str == "asc") {
    sortedArr = arr.sort((a, b) => a - b);
  } else {
    sortedArr = arr.sort((a, b) => b - a);
  }
  return sortedArr;
}
sortArr([14, 7, 17, 6, 8], "desc");

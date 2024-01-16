// 7. Sorting Numbers

// Write a function that sorts an array of numbers so that the first element is the smallest one, the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one, and so on.

// Return the resulting array.
function sort(arr) {
  let arrForPrint = [];
  arr.sort((a, b) => a - b);
  while (arr.length > 0) {
    let smallest = arr.shift();
    arrForPrint.push(smallest);
    if (arr.length > 0) {
      let biggest = arr.pop();
      arrForPrint.push(biggest);
    }
  }
  return arrForPrint;
}
sort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);

// 7. Max Sequence of Equal Elements

// Write a function that finds the longest sequence of equal elements in an array of numbers.

// If several longest sequences exist, print the leftmost one.
function sequence(arr) {
  let maxCount = 0;
  let maxCountDigit = 0;
  for (let i = 0; i < arr.length; i++) {
    let curDigit = Number(arr[i]);
    let count = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (Number(arr[j]) == curDigit) {
        count++;
        if (maxCount < count) {
          maxCount = count;
          maxCountDigit = curDigit;
        }
      } else {
        break;
      }
    }
  }
  let array = new Array(maxCount + 1).fill(maxCountDigit);
  console.log(array.join(" "));
}
sequence([4, 4, 4, 4]);

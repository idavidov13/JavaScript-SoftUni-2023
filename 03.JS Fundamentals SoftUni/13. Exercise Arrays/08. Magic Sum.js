// 8. Magic Sum

// Write a function, which prints all unique pairs in an array of integers whose sum is equal to a given number.
function print(arr, num) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == num) {
        console.log(`${arr[i]} ${arr[j]}`);
      }
    }
  }
}
print([14, 20, 60, 13, 7, 19, 8], 27);

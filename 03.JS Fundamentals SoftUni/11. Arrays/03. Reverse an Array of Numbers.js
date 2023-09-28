// 3. Reverse an Array of Numbers

// Write a program, which receives a number n and an array of elements. Your task is to create a new array with n numbers from the original array, reverse it and print its elements on a single line, space-separated.
function reverse(num, arr) {
  let reversedArr = "";
  for (let i = num - 1; i >= 0; i--) {
    reversedArr += arr[i] + " ";
  }
  console.log(reversedArr.trim());
}
reverse(3, [10, 20, 30, 40, 50]);

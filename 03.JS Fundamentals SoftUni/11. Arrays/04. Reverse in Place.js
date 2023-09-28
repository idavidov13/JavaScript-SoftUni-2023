// 4. Reverse In Place

// Write a program, which receives an array of strings. Your task is to reverse the array without creating a new array. Print the resulting elements on a single line, space-separated.
function reverse(arr) {
  let reversedArr = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr += arr[i] + " ";
  }
  console.log(reversedArr.trim());
}
reverse(["a", "b", "c", "d", "e"]);

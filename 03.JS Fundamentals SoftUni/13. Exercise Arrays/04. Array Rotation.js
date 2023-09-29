// 4. Array Rotation

// Write a function that receives an array and the number of rotations you have to perform.

// Note: Depending on the number of rotations, the first element goes to the end.

// Output

// Print the resulting array elements separated by a single space.
function rotation(arr, num) {
  for (let i = 0; i <= num - 1; i++) {
    arr.push(arr.shift());
  }
  console.log(arr.join(" "));
}
rotation([51, 47, 32, 61, 21], 2);

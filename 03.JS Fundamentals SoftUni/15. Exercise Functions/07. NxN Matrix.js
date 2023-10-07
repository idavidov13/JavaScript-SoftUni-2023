// 7. NxN Matrix

// Write a function that receives a single integer number n and prints nxn matrix with that number.
function drawMatrix(num) {
  for (let i = 1; i <= num; i++) {
    console.log(Array(num).fill(num).join(" "));
  }
}
drawMatrix(3);

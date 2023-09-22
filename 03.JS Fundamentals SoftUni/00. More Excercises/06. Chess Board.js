// 6. Chess Board
// Write a function to print a chessboard of size n X n. See the example for more information.
// The input comes as a single number argument n.
// The output should be returned as a result of your function in the form of a string.
function chess(num) {
  console.log(`<div class="chessboard">`);
  for (let i = 1; i <= num; i++) {
    console.log(`  <div>`);
    for (let j = 1; j <= num; j++) {
      if (i % 2 == 1) {
        if (j % 2 == 1) {
          console.log(`    <span class="black"></span>`);
        } else {
          console.log(`    <span class="white"></span>`);
        }
      } else {
        if (j % 2 == 1) {
          console.log(`    <span class="white"></span>`);
        } else {
          console.log(`    <span class="black"></span>`);
        }
      }
    }
    console.log(`  </div>`);
  }
  console.log(`</div>`);
}
chess(3);

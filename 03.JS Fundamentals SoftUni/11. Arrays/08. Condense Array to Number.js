// 8. Condense Array to Number

// Write a program, which receives an array of numbers, and condenses them by summing adjacent couples of elements until a single number is obtained.
function condense(arr) {
  let array = arr;
  while (array.length > 1) {
    for (let i = 0; i <= array.length - 1; i++) {
      array.push(Number(array[0]) + Number(array[1]));
      array.shift();
      if (i == array.length - 1) {
        array.splice(arr.length - 1);
      }
    }
  }
  console.log(array[0]);
}
condense([5, 0, 4, 1, 2]);

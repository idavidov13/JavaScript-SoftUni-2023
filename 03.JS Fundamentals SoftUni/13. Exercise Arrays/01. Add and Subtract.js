// 1. Add and Subtract

// Write a function, which changes the value of odd and even numbers in an array of numbers.

// · If the number is even - add to its value its index position

// · If the number is odd - subtract to its value its index position

// Output

// On the first line print the newly modified array, on the second line print the sum of numbers from the original array, on the third line print the sum of numbers from the modified array.
function solve(arr) {
  let array = arr;
  let sumInitial = 0;
  let sumRaworked = 0;
  for (let i = 0; i < array.length; i++) {
    if (Number(array[i]) % 2 == 0) {
      sumInitial += Number(array[i]);
      array[i] = Number(array[i]) + i;
      sumRaworked += Number(array[i]);
    } else {
      sumInitial += Number(array[i]);
      array[i] = Number(array[i]) - i;
      sumRaworked += Number(array[i]);
    }
  }
  console.log(array);
  console.log(sumInitial);
  console.log(sumRaworked);
}
solve([5, 15, 23, 56, 35]);

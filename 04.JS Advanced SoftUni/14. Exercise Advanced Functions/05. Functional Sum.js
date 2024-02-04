// 5. Functional Sum

// Write a function that adds a number passed to it to an internal sum and returns itself with its internal sum set to the new value, so it can be chained functionally.

// Hint: Overwrite toString() of the function.

// Input

// Your function needs to take one numeric argument.

// Output

// Your function needs to return itself with an updated context.
function add(num) {
  let sum = num;

  function newAdd(nextNum) {
    sum += nextNum;
    return newAdd;
  }

  newAdd.toString = function () {
    return sum;
  };

  return newAdd;
}
let result = add(1);
result = result(6);
result = result(-3);
console.log(result.toString());

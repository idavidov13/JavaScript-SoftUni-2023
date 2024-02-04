// 3. Fibonacci

// Write a JS function that when called, returns the next Fibonacci number, starting at 0, 1. Use a closure to keep the current number.

// Input

// There will be no input.

// Output

// The output must be a Fibonacci number and must be returned from the function.
function getFibonator() {
  let x = 0;
  let y = 1;

  return function () {
    let result = x + y;
    x = y;
    y = result;
    return x;
  };
}

let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());

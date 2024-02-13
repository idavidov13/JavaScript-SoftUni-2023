// 1. Array Extension

// Extend the built-in Array object with additional functionality. Implement the following functionality:

// · last() - returns the last element of the array

// · skip(n) - returns a new array which includes all original elements, except the first n elements; n is a Number parameter

// · take(n) - returns a new array containing the first n elements from the original array; n is a Number parameter

// · sum() - returns a sum of all array elements

// · average() - returns the average of all array elements

// Input / Output

// Input for functions that expect it will be passed as valid parameters. Output from functions should be their return value.

// Constraints

// Structure your code as an IIFE.
(function () {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };

  Array.prototype.skip = function (n) {
    return this.slice(n);
  };

  Array.prototype.take = function (n) {
    return this.slice(0, n);
  };

  Array.prototype.sum = function () {
    return this.reduce((acc, value) => acc + value);
  };

  Array.prototype.average = function () {
    return this.sum() / this.length;
  };
})();

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(myArr.last());
console.log(myArr.skip(3));
console.log(myArr.take(3));
console.log(myArr.sum());
console.log(myArr.average());

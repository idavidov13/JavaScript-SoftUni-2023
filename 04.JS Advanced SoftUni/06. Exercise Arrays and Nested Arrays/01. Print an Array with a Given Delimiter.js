// 1. Print an Array with a Given Delimiter

// The input comes as two parameters – an array of strings and a string. The second parameter is the delimiter.

// The output is the elements of the array, printed on the console, each element separated from the others by the given delimiter.
function print(arr, del) {
  console.log(arr.join(del));
}
print(["One", "Two", "Three", "Four", "Five"], "-");

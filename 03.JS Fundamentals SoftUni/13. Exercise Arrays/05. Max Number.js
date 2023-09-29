// 5. Max Number

// Write a function to find all the top integers in an array. A top integer is an integer, which is bigger than all the elements to its right.

// Output

// Print all top integers on the console, separated by a single space.
function maxNum(arr) {
  let array = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    let flag = true;
    if (i == arr.length - 1) {
      array.unshift(Number(arr[i]));
    }
    for (let j = arr.length - 1; j > i; j--) {
      if (Number(arr[i]) <= Number(arr[j])) {
        flag = false;
        continue;
      }
    }
    if (flag && i !== arr.length - 1) {
      array.unshift(Number(arr[i]));
    }
  }
  console.log(array.join(" "));
}
maxNum([41, 41, 34, 20]);

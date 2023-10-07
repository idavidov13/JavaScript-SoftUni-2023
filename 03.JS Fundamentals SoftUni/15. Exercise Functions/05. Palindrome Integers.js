// 5. Palindrome Integers

// A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. Write a function, which receives an array of positive integers and checks if each integer is a palindrome or not.

// Output

// · If the current integer is a palindrome, print: "true"

// · Otherwise, print: "false"
function palindrome(arr) {
  for (let i = 0; i < arr.length; i++) {
    let curNum = arr[i];
    let reverseNum = arr[i].toString().split("").reverse().join("");
    if (curNum == reverseNum) {
      console.log(`true`);
    } else {
      console.log(`false`);
    }
  }
}
palindrome([123, 323, 421, 121]);

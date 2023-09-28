// 5. Sum Even Numbers

// Write a program, which receives an array of strings, parse them into numbers, and sum only the even numbers.
function sumEven(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    let num = Number(arr[i]);
    if (num % 2 == 0) {
      sum += num;
    }
  }
  console.log(sum);
}
sumEven(["1", "2", "3", "4", "5", "6"]);

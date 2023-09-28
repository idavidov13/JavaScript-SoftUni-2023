// 6. Even and Odd Subtraction

// Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.
function evenOdd(arr) {
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    let num = Number(arr[i]);
    if (num % 2 == 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }
  console.log(sumEven - sumOdd);
}
evenOdd([2, 4, 6, 8, 10]);

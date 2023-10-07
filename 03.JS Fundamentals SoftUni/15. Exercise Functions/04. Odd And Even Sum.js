// 4. Odd and Even Sum

// You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits from that number.
function digitsSum(num) {
  let numToString = num.toString();
  let array = numToString.split("");
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i < array.length; i++) {
    if (Number(array[i]) % 2 == 0) {
      sumEven += Number(array[i]);
    } else {
      sumOdd += Number(array[i]);
    }
  }
  console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
digitsSum(3495892137259234);

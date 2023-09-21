// 9. Special Numbers

// Write a program that receives a number n. For all numbers in the range [1…n] print the number and if it is special or not (True / False).

// · A number is special when its sum of digits is 5, 7 or 11.
function special(num) {
  for (let i = 1; i <= num; i++) {
    let flag = false;
    let sum = 0;
    curDigit = i;
    let string = curDigit.toString();
    for (let j = 0; j < string.length; j++) {
      sum += Number(string[j]);
    }
    if (Number(sum) == 5 || Number(sum) == 7 || Number(sum) == 11) {
      flag = true;
    }
    if (flag) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}
special(20);

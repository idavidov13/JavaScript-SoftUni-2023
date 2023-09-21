// 5. Amazing Numbers

// Write a function, which as input will receive a number.

// Check and print if it is amazing or not into the following format:

// "{number} Amazing? {True or False}"

// An amazing number includes the digit 9 the sum of its digits.

// Examples for amazing numbers are 1233 (1 + 2 + 3 + 3 = 9), 583472 (5 + 8 + 3 + 4 + 7 + 2 = 29)
function amazing(num) {
  let sum = 0;
  let string = String(num);
  for (let i = 0; i < string.length; i++) {
    sum += Number(string[i]);
  }
  console.log(
    `${num} Amazing? ${String(sum).includes("9") ? "True" : "False"}`
  );
}
amazing(1233);

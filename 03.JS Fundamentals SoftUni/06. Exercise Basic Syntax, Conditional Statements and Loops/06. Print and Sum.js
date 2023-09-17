// Write a function that displays numbers from given start to given end and their sum. The input comes as two
// number parameters. Print the result like the examples below:
// Examples
// Input Output
// 5, 10 5 6 7 8 9 10
// Sum: 45
// 0, 26 0 1 2 … 26
// Sum: 351
// 50, 60 50 51 52 53 54 55 56 57 58 59 60
// Sum: 605

function print(start, end) {
  let string = "";
  let total = 0;
  for (let i = start; i <= end; i++) {
    string = string + " " + i;
    total += i;
  }
  console.log(string.trimStart());
  console.log(`Sum: ${total}`);
}
print(5, 10);

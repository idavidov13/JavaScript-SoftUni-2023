// Write a function that receives a number M and a number N (M will always be bigger than N). Print all numbers from
// M to N.
function print(num1, num2) {
  for (i = num1; i >= num2; i--) {
    console.log(i);
  }
}
print(5, 3);

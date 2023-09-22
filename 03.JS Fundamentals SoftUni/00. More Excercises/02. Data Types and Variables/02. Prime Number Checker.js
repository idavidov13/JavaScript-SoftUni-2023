// 2. Prime Number Checker
// Write a function to check if a number is prime (only divisible by itself and one).
// The input comes as a single number argument.
// The output should be the return value of your function. Return true for prime number and false otherwise.
function isPrime(num) {
  let prime = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      prime = false;
    }
  }
  if (prime) {
    console.log("true");
  } else {
    console.log("false");
  }
}
isPrime(81);

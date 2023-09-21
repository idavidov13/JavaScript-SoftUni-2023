// 8. Centuries to Minutes

// Write a program that receives a number of centuries and converts it to years, days, hours, and minutes.
function cent(num) {
  console.log(
    `${num} centuries = ${num * 100} years = ${Math.floor(
      num * 100 * 365.2422
    )} days = ${Math.floor(num * 100 * 365.2422) * 24} hours = ${
      Math.floor(num * 100 * 365.2422) * 24 * 60
    } minutes`
  );
}
cent(5);

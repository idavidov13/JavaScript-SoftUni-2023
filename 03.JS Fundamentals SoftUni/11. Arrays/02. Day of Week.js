// 2. Day of Week

// Write a program, which receives a number and prints the corresponding name of the day of the week (in English).

// If the number is NOT a valid day, print: "Invalid day!".
function weekDay(num) {
  let days = [
    "Invalid day!",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (num < 1 || num > 7) {
    console.log(days[0]);
  } else {
    console.log(days[num]);
  }
}
weekDay(2);

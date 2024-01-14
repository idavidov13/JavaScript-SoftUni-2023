// 4. Previous Day

// Write a JS function that calculates the date of the previous day by a given year, month, and day.

// The input comes as three numeric parameters. The first element is the year, the second is the month and the third is the day.

// The output must be the return date of the previous day in the format: `{year}-{month}-{day}`
function previousDay(year, month, day) {
  let currentDate = new Date(year, month - 1, day);
  currentDate.setDate(currentDate.getDate() - 1);
  console.log(
    `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`
  );
}
previousDay(2016, 9, 30);

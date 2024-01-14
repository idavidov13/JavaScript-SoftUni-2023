// 5. Time to Walk

// Write a function that calculates how long it takes a student to get to university. The function takes three numbers:

// · The first is the number of steps the student takes from their home to the university

// · The second number is the length of the student's footprint in meters

// · Тhe third number is the student speed in km/h

// Every 500 meters the student rests and takes a 1-minute break.

// Calculate how long the student walks from home to university and print on the console the result in the following format: `hours:minutes:seconds`.

// The input comes as three numbers.

// The output should be printed on the console.
function timeToWalk(steps, length, speed) {
  let totalLength = steps * length; //meters
  let totalTime = totalLength / 1000 / speed;
  let hours = Math.trunc(totalTime);
  let minutes = Math.floor(totalTime * 60);
  let seconds = Math.round((totalTime * 60 - minutes) * 60);
  let breaks = Math.trunc(totalLength / 500);
  let totalMinutes = minutes + breaks;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (totalMinutes > 60) {
    hours += 1;
    totalMinutes -= 60;
  }
  if (totalMinutes < 10) {
    totalMinutes = "0" + totalMinutes;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }

  console.log(`${hours}:${totalMinutes}:${seconds}`);
}
timeToWalk(4000, 0.6, 5);

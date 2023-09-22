// 4. Convert Meters to Kilometres

// You will be given a number that will be the distance in meters. Write a program that converts meters to kilometers formatted to the second decimal point.
function convert(meters) {
  console.log((meters / 1000).toFixed(2));
}
convert(1852);

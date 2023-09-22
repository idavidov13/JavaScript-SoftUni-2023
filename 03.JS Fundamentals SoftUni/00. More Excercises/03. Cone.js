// 3. Cone
// Write a function to calculate a cone’s volume and total surface area by given height and radius of the base.
// The input comes as two number arguments. The first element is the cone’s radius and the second is its height.
// The output should be printed to the console on a new line for every result. The result should be formatted to the
// fourth decimal point.
function cone(radius, height) {
  console.log(
    `volume = ${((Math.PI * radius * radius * height) / 3).toFixed(4)}`
  );
  console.log(
    `area = ${(
      Math.PI *
      radius *
      (radius + Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2)))
    ).toFixed(4)}`
  );
}
cone(3, 5);

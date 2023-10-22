// Problem 2 - Tax Calculator
// The National Revenue Agency hired you to create software, which will help them to calculate the vehicle taxes. You will be given a string representing vehicles that will be taxed. Each vehicle is separated by ">>", where the first element is a string representing the car type, the second element is an integer representing the years the tax should be paid, and the third element is an integer representing the kilometers traveled. There are three valid types of vehicles: • "family" – the initial tax for a family car is 50 euros • " heavyDuty" – the initial tax for a heavy-duty is 80 euros • "sports" – the initial tax for a sports car is 100 euros If the car is not valid print "Invalid car type." and continue to the next vehicle.  When calculating tax keep in mind the following rules: • For  a family car,  the  tax declines by 5 euros for  every year in  use. Also, the  tax increases by 12 euros for every 3000 km. traveled. • For a heavyDuty car, the tax declines by 8 euros for every year in use. Also, the tax increases by 14 euros for every 9000 km. traveled. • For a sports car, the tax declines by 9 euros for every year in use. Also, the tax increase by 18 euros for every 2000 km. Traveled. Input You receive a string representing the vehicles, separated with ">>": "vehicle1>>vehicle2>>vehicle3...". Output • Upon every successful taxed car print: "A {car type} car will pay {total tax to pay} euros in taxes." Format the total tax to pay to the second digit after the decimal point.  • On the last line, print how much the National Revenue Agency will collect: "The National Revenue Agency will collect {total tax collected} euros in taxes." Formatted to the second digit after the decimal point.
function taxCalculator(arr) {
  let str = arr.shift();
  let input = str.split(">>");
  let totalTax = 0;
  for (let i = 0; i < input.length; i++) {
    let tax = 0;
    let command = input[i].split(" ");
    if (command[0] == "family") {
      tax =
        50 -
        Number(command[1]) * 5 +
        Math.floor(Number(command[2]) / 3000) * 12;
      console.log(
        `A ${command[0]} car will pay ${tax.toFixed(2)} euros in taxes.`
      );
      totalTax += tax;
    } else if (command[0] == "heavyDuty") {
      tax =
        80 -
        Number(command[1]) * 8 +
        Math.floor(Number(command[2]) / 9000) * 14;
      console.log(
        `A ${command[0]} car will pay ${tax.toFixed(2)} euros in taxes.`
      );
      totalTax += tax;
    } else if (command[0] == "sports") {
      tax =
        100 -
        Number(command[1]) * 9 +
        Math.floor(Number(command[2]) / 2000) * 18;
      console.log(
        `A ${command[0]} car will pay ${tax.toFixed(2)} euros in taxes.`
      );
      totalTax += tax;
    } else {
      console.log("Invalid car type.");
    }
  }
  console.log(
    `The National Revenue Agency will collect ${totalTax.toFixed(
      2
    )} euros in taxes.`
  );
}
taxCalculator(["family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410"]);
taxCalculator([
  "family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012",
]);

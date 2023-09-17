// You are given a group of people, the type of the group, and the day of the week they are going to stay. Based on
// that information calculate how much they have to pay and print that price on the console. Use the table below. In
// each cell is the price for a single person.
// The output should look like that: `Total price: {price}`.The price should be formatted to the second
// decimal point.
// Friday Saturday Sunday
// Students 8.45 9.80 10.46
// Business 10.90 15.60 16
// Regular 15 20 22.50
// There are also discounts based on some conditions:
// • Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
// • Business – if the group is bigger than or equal to 100 people 10 of them can stay for free
// • Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%
// Note: You should reduce the prices in that EXACT order
function vacation(num, type, day) {
  let price = 0;
  switch (type) {
    case "Students":
      switch (day) {
        case "Friday":
          price = 8.45;
          break;
        case "Saturday":
          price = 9.8;
          break;
        case "Sunday":
          price = 10.46;
          break;
      }
      break;
    case "Business":
      switch (day) {
        case "Friday":
          price = 10.9;
          break;
        case "Saturday":
          price = 15.6;
          break;
        case "Sunday":
          price = 16;
          break;
      }
      break;
    case "Regular":
      switch (day) {
        case "Friday":
          price = 15;
          break;
        case "Saturday":
          price = 20;
          break;
        case "Sunday":
          price = 22.5;
          break;
      }
      break;
  }
  let totalPrice = num * price;
  if (type === "Students" && num >= 30) {
    totalPrice *= 0.85;
  } else if (type === "Business" && num >= 100) {
    totalPrice = (num - 10) * price;
  } else if (type === "Regular" && num >= 10 && num <= 20) {
    totalPrice *= 0.95;
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(40, "Regular", "Saturday");

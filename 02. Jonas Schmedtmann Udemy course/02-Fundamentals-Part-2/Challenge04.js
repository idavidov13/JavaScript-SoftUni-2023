// CHALLENGE #4
// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:

// Create an array called bills containing all 10 test bill values.

// Create empty arrays for the tips and the totals (tips and totals)

// Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];
let tip = 0;
let bill = 0;
for (let i = 0; i < bills.length; i++) {
  bill = bills[i];
  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
    tips.push(tip);
    totals.push(tip + bill);
  } else {
    tip = bill * 0.2;
    tips.push(tip);
    totals.push(tip + bill);
  }
}
console.log(tips);
console.log(totals);

// 1. Calorie Object

// Write a function that composes an object by given properties. The input comes as an array of strings. Every even index of the array represents the name of the food. Every odd index is a number that is equal to the calories in 100 grams of the given product. Assign each value to its corresponding property, and finally print the object.

// The input comes as an array of string elements.

// The output should be printed on the console.
function calorieObject(arr) {
  let calObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      if (calObj.hasOwnProperty(arr[i]) == false) {
        calObj[arr[i]] = 0;
      }
    } else {
      calObj[arr[i - 1]] += Number(arr[i]);
    }
  }
  console.log(calObj);
}
calorieObject(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);

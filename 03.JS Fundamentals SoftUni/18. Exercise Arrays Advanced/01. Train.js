// 1. Train

// You will be given an array of strings.

// The first element will be a string containing wagons (numbers). Each number inside the string represents the number of passengers that are currently in a wagon.

// The second element in the array will be the max capacity of each wagon (single number).

// The rest of the elements will be commands in the following format:

// · Add {passengers} – add a wagon to the end with the given number of passengers.

// · {passengers} - find an existing wagon to fit all the passengers (starting from the first wagon)

// At the end, print the final state of the train (all the wagons separated by a space).
function train(arr) {
  let wagonArr = arr[0].split(" ").map(Number);
  let maxCapacity = Number(arr[1]);
  for (let i = 2; i < arr.length; i++) {
    let input = arr[i];
    let splitInput = input.split(" ");
    if (splitInput[0] == "Add") {
      wagonArr.push(Number(splitInput[1]));
    } else {
      for (let i = 0; i < wagonArr.length; i++) {
        if (Number(splitInput) + wagonArr[i] <= maxCapacity) {
          wagonArr[i] += Number(splitInput);
          break;
        }
      }
    }
  }
  console.log(wagonArr.join(" "));
}
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);

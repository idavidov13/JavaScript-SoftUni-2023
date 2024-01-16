// 6. List of Names

// You will receive an array of names. Sort them alphabetically in ascending order and print a numbered list of all the names, each on a new line.
function sortNames(arr) {
  arr.sort((a, b) => a.localeCompare(b));
  for (let i = 0; i < arr.length; i++) {
    console.log(`${i + 1}.${arr[i]}`);
  }
}
sortNames(["John", "Bob", "Christina", "Ema"]);

//Refactored
function sortNames1(arr) {
  arr
    .sort((a, b) => a.localeCompare(b))
    .forEach((el, i) => {
      console.log(`${i + 1}.${el}`);
    });
}
sortNames1(["John", "Bob", "Christina", "Ema"]);

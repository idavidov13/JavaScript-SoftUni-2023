// 3. Add and Remove Elements

// Write a JS function that adds and removes numbers to/from an array. You will receive a command which can either be "add" or "remove".

// The initial number is 1.

// Upon receiving an "add" command you should add the current number to your array. Upon receiving the "remove" command you should remove the last entered number, currently existent in the array.
// Each input command should increase that number, regardless of what it is.

// The input comes as an array of strings. Each element holds a command.

// The output is the element of the array, each printed on a new line. In case of an empty array, just print "Empty".
function addOrRemove(arr) {
  let iNum = 1;
  let arrForPrint = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "add") {
      arrForPrint.push(iNum);
    } else {
      arrForPrint.pop();
    }
    iNum++;
  }
  if (arrForPrint.length > 0) {
    arrForPrint.forEach((el) => console.log(el));
  } else {
    console.log("Empty");
  }
}
addOrRemove(["remove", "remove", "remove"]);

//Refactored
function addOrRemove2(arr) {
  let iNum = 1;
  let arrForPrint = [];

  arr.forEach((el) => {
    el === "add" ? arrForPrint.push(iNum) : arrForPrint.pop();
    return iNum++;
  });
  return arrForPrint.length ? arrForPrint.join("/n") : "Empty";
}
console.log(addOrRemove2(["remove", "remove", "remove"]));

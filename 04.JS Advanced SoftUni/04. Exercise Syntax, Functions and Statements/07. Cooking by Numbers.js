// 7. Cooking by Numbers

// Write a program that receives 6 parameters which are a number and a list of five operations. Perform the operations sequentially by starting with the input number and using the result of every operation as a starting point for the next one. Print the result of every operation in order. The operations can be one of the following:

// · chop - divide the number by two

// · dice - square root of a number

// · spice - add 1 to the number

// · bake - multiply number by 3

// · fillet - subtract 20% from the number

// The input comes as 6 string elements. The first element is the starting point and must be parsed to a number. The remaining 5 elements are the names of the operations to be performed.

// The output should be printed on the console.
function cooking(num, ...operationsArray) {
  let initialNum = Number(num);
  operationsArray.forEach((operation) => {
    switch (operation) {
      case "chop":
        initialNum /= 2;
        console.log(initialNum);
        break;
      case "dice":
        initialNum = Math.sqrt(initialNum);
        console.log(initialNum);
        break;
      case "spice":
        initialNum += 1;
        console.log(initialNum);
        break;
      case "bake":
        initialNum *= 3;
        console.log(initialNum);
        break;
      case "fillet":
        initialNum -= 0.2 * initialNum;
        console.log(initialNum);
        break;
    }
  });
}
cooking("9", "dice", "spice", "chop", "bake", "fillet");

//Refactored
function cookingR(num, ...operationsArray) {
  let operationEnum = {
    chop: (num) => num / 2,
    dice: (num) => Math.sqrt(num),
    spice: (num) => num + 1,
    bake: (num) => num * 3,
    fillet: (num) => num * 0.8,
  };

  operationsArray.forEach((el) => {
    num = operationEnum[el](num);
    console.log(num);
  });
}
cookingR("9", "dice", "spice", "chop", "bake", "fillet");

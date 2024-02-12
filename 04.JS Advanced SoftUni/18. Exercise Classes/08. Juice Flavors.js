// 8. Juice Flavors

// You will be given different juices, as strings. You will also receive quantity as a number. If you receive a juice that you already have, you must sum the current quantity of that juice, with the given one. When a juice reaches 1000 quantity, it produces a bottle. You must store all produced bottles and you must print them at the end.

// Note: 1000 quantity of juice is one bottle. If you happen to have more than 1000, you must make as many bottles as you can, and store what is left from the juice.
// Example: You have 2643 quantity of Orange Juice – this is 2 bottles of Orange Juice and 643 quantity left.

// Input

// The input comes as an array of strings. Each element holds data about a juice and quantity in the following format:

// "{juiceName} => {juiceQuantity}"

// Output

// The output is the produced bottles. The bottles are to be printed in the order of obtaining the bottles. Check the second example below - even though we receive the Kiwi juice first, we don’t form a bottle of Kiwi juice until the 4th line, at which point we have already created Pear and Watermelon juice bottles, thus the Kiwi bottles appear last in the output.
function juiceFlavors(arr) {
  const juices = {};
  const bottles = {};

  const addBottles = (n, q) => {
    const btlToAdd = (q - (q % 1000)) / 1000;

    if (btlToAdd > 0) {
      bottles[n] = (bottles[n] || 0) + btlToAdd;
      return q % 1000;
    }

    return q;
  };

  arr.forEach((x) => {
    const [name, quantity] = x.split(" => ");
    juices[name] = juices[name] || 0;

    juices[name] = addBottles(name, juices[name] + Number(quantity));
  });

  return Object.entries(bottles)
    .map(([name, quantity]) => `${name} => ${quantity}`)
    .join("\n");
}
console.log(
  juiceFlavors([
    "Kiwi => 234",

    "Pear => 2345",

    "Watermelon => 3456",

    "Kiwi => 4567",

    "Pear => 5678",

    "Watermelon => 6789",
  ])
);

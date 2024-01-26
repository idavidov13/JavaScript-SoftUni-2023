// 6. Store Catalogue

// You have to create a sorted catalog of store products. You will be given the products’ names and prices. You need to order them in alphabetical order.

// Input

// The input comes as an array of strings. Each element holds info about a product in the following format:

// "{productName} : {productPrice}"

// The product’s name will be a string, which will always start with a capital letter, and the price will be a number. There will be NO duplicate product input. The comparison for alphabetical order is case-insensitive.

// Output

// As output, you must print all the products in a specified format. They must be ordered exactly as specified above. The products must be divided into groups, by the initial of their name. The group's initial should be printed, and after that, the products should be printed with 2 spaces before their names. For more info check the examples.
function store(arr) {
  let sortedArr = arr.sort((a, b) => a.localeCompare(b));
  let letter = arr[0][0];
  console.log(letter);
  for (let each of sortedArr) {
    let curLetter = each[0];
    let [product, price] = each.split(" : ");
    if (letter != curLetter) {
      letter = curLetter;
      console.log(letter);
    }
    console.log(` ${product}: ${price}`);
  }
}
store([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

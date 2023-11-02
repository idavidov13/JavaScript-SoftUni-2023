// 9.	*Catalogue
// You have to create a sorted catalog of store products. You will be given the products’ names and prices. You need to order them in alphabetical order.
// The input comes as an array of strings. Each element holds info about a product in the following format:
// "{productName} : {productPrice}"
// The product’s name will be a string, which will always start with a capital letter, and the price will be a number. You can safely assume there will be NO duplicate product input. The comparison for alphabetical order is case-insensitive.
// As output, you must print all the products in a specified format. They must be ordered exactly as specified above. The products must be divided into groups, by the initial of their name. The group's initial should be printed, and after that, the products should be printed with 2 spaces before their names. For more info check the examples.
function catalogue(arr) {
  let catalog = [];

  for (let each of arr) {
    let [productName, productPrice] = each.split(" : ");
    catalog.push({ name: productName, price: Number(productPrice) });
  }

  catalog.sort((a, b) => a.name.localeCompare(b.name));

  let groupedCatalog = catalog.reduce((acc, product) => {
    let firstLetter = product.name[0];
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(product);
    return acc;
  }, {});

  for (let group in groupedCatalog) {
    console.log(group);
    groupedCatalog[group].forEach((product) => {
      console.log(`  ${product.name}: ${product.price}`);
    });
  }
}

catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

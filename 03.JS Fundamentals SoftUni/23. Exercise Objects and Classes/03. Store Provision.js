// 3. Store Provision

// You will receive two arrays. The first array represents the current stock of the local store. The second array will contain products that the store has ordered for delivery.

// The following information applies to both arrays:

// Every even index will hold the name of the product and every odd index will hold the quantity of that product. The second array could contain products that are already in the local store. If that happens increase the quantity for the given product. You should store them into an object, and print them in the following format: (product -> quantity)

// All of the arrays’ values will be strings.
function storeProvisions(stock, order) {
  let finalStock = {};

  for (let i = 0; i < stock.length; i += 2) {
    let productName = stock[i];
    let qty = Number(stock[i + 1]);
    finalStock[productName] = qty;
  }

  for (let i = 0; i < order.length; i += 2) {
    let productName = order[i];
    let qty = Number(order[i + 1]);
    if (productName in finalStock) {
      finalStock[productName] += qty;
    } else {
      finalStock[productName] = qty;
    }
  }
  let array = Object.entries(finalStock);
  for (let entrie of array) {
    console.log(entrie.join(" -> "));
  }
}
storeProvisions(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);

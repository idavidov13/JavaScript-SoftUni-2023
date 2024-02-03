// 6. Furniture

// You will be given some furniture as an array of objects. Each object will have a name, a price, and a decoration factor.

// When the ["Generate"] button is clicked, add a new row to the table for each piece of furniture with image, name, price, and decoration factor (code example below).

// When the ["Buy"] button is clicked, get all checkboxes that are marked and show in the result textbox the names of the piece of furniture that were checked, separated by a comma and single space (", ") in the following format: "Bought furniture: {furniture1}, {furniture2}…".

// On the next line, print the total price in the format: "Total price: {totalPrice}" (formatted to the second decimal point). Finally, print the average decoration factor in the format: "Average decoration factor: {decFactor}"

// Input Example

// [{"name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2}]
function solve() {
  //get the button Generate and Buy
  let generateBtn = document.getElementsByTagName("button")[0];
  let buyBtn = document.getElementsByTagName("button")[1];

  //get the input from the generate textarea and result
  let textArea = document.getElementsByTagName("textarea")[0];
  let textAreaF = document.getElementsByTagName("textarea")[1];

  //add event listener to the button Generate
  generateBtn.addEventListener("click", generate);

  //make a function that generate a furniture
  function generate() {
    //get the input from the generate textarea
    let textArea = document.getElementsByTagName("textarea")[0];
    let textFromTextArea = JSON.parse(textArea.value);
    //transform the data into array
    let furnitureToBeGenerated = textFromTextArea.map((furniture) => {
      return Object.entries(furniture).map(([key, value]) => [key, value]);
    });

    // Loop through the array to create all cells with date
    for (let one of furnitureToBeGenerated) {
      // Create an empty new element that will contain all the date for the new entry
      let newRow = document.createElement("tr");
      for (let each of one) {
        // Create key and value parameters
        let [key, value] = each;
        let newData = document.createElement("td");
        let newP = document.createElement("p");
        if (key === "img") {
          let newImg = document.createElement("img");
          newImg.src = value;
          newData.appendChild(newImg);
          newRow.appendChild(newData);
        } else {
          newP.textContent = value;
          newData.appendChild(newP);
          newRow.appendChild(newData);
        }
      }

      // Create checkbox for the row
      let checkbox = document.createElement("td");
      let checkboxInput = document.createElement("input");
      checkboxInput.type = "checkbox";
      checkbox.appendChild(checkboxInput);
      newRow.appendChild(checkbox);

      let table = document.getElementsByTagName("tbody")[0];
      table.appendChild(newRow);
    }
  }

  //add event listener to the button Buy
  buyBtn.addEventListener("click", buy);

  //make a function that buy selected furniture
  function buy() {
    //take rows that are checked
    let selectedRows = document.querySelectorAll(
      "input[type='checkbox']:checked"
    );

    //initialize variables
    let name = [];
    let price = 0;
    let sumDecFac = 0;

    //loop through all selected rows
    for (let each of selectedRows) {
      //make an array with data
      let [imgRef, nameRef, priceRef, decFactor] = Array.from(
        each.parentElement.parentElement.children
      );

      //transform the date from every selected row
      let nameValue = nameRef.children[0].textContent;
      let priceValue = Number(priceRef.children[0].textContent);
      let decFactorValue = Number(decFactor.children[0].textContent);
      name.push(nameValue);
      price += priceValue;
      sumDecFac += decFactorValue;
    }

    //prepare final result
    let res = "Bought furniture: ";
    res += name.join(", ");
    res += "\n";
    res += `Total price:${price.toFixed(2)}\n`;
    res += `Average decoration factor: ${sumDecFac / name.length}`;
    textAreaF.value = res;
  }
}

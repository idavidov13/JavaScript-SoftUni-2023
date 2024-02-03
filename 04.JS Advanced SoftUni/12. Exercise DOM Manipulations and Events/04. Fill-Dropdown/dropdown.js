// 4. Fill Dropdown

// Your task is to take values from input fields with ids "newItemText" and "newItemValue". Then you should create and append an <option> to the <select> with id "menu".
// Hints

// · Your function should take the values of newItemText and newItemValue. After that, you should create a new option element and set its textContent and its value to the newly taken ones.

// · Once you have done all of that, you should append the newly created option as a child to the select item with id "menu".

// · Finally, you should clear the value of the two input fields.
function addItem() {
  // Take parent element
  let appendHere = document.getElementById("menu");
  //Take values of the two fields
  let text = document.getElementById("newItemText");
  let value = document.getElementById("newItemValue");

  // Construc the text that should be added
  textToBeAdded = `${text.value} ${value.value}`;

  //Create child element
  let newEl = document.createElement("option");
  newEl.textContent = textToBeAdded;

  //Append child to the "menu"
  appendHere.appendChild(newEl);

  //Clear all the text values
  text.value = "";
  value.value = "";
}

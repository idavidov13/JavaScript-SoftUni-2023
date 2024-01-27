// 2. Pascal or Camel Case

// An HTML file is given and your task is to write a function that takes two string parameters as an input and transforms the first parameter to the type required by the second parameter.

// · The first parameter will be the text that you need to modify depending on the second parameter. The words in it will always be separated by space.

// · The second parameter will be either "Camel Case" or "Pascal Case". In case of different input, your output should be "Error!"

// When the button is clicked the function should convert the first string to either of the cases. The output should consist of only one word - the string you have modified. Once your output is done, you should set it as HTML to the <span> element. For more information, see the examples below:
function solve() {
  let stringToBeTransformed = document
    .getElementById("text")
    .value.toLowerCase();
  let convention = document.getElementById("naming-convention").value;
  let result = "";
  switch (convention) {
    case "Camel Case":
      let arr = stringToBeTransformed.split(" ");
      for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
      result = arr.join("");
      break;

    case "Pascal Case":
      let arrP = stringToBeTransformed.split(" ");
      for (let i = 0; i < arrP.length; i++) {
        arrP[i] = arrP[i].charAt(0).toUpperCase() + arrP[i].slice(1);
        result = arrP.join("");
      }
      break;

    default:
      result = "Error!";
  }

  document.getElementById("result").innerText = result;
}

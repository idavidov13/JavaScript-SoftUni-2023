// 1. Sections

// You will receive an array of strings. For each string, create a div with a paragraph with the string in it. Each paragraph is initially hidden (display:none). Add a click event listener to each div that displays the hidden paragraph. Finally, you should append all divs to the element with an id "content".
function create(words) {
  //Take the parent element to which we will append childs
  let appendHere = document.getElementById("content");

  // Loop through the input to create div and p and set their properties. Add an eventListener that will change the display style
  for (let each of words) {
    let newDiv = document.createElement("div");
    let newP = document.createElement("p");

    newP.style.display = "none";
    newP.textContent = each;

    newDiv.appendChild(newP);
    appendHere.appendChild(newDiv);

    newDiv.addEventListener("click", function () {
      newP.style.display = "block";
    });
  }
}

//Refactored with the creation of new function
function create(words) {
  //Take the parent element to which we will append childs
  let appendHere = document.getElementById("content");

  // Loop through the input to create div and p and set their properties. Add an eventListener that will change the display style
  for (let each of words) {
    let newDiv = document.createElement("div");
    let newP = document.createElement("p");

    newP.style.display = "none";
    newP.textContent = each;

    newDiv.appendChild(newP);
    appendHere.appendChild(newDiv);

    newDiv.addEventListener("click", clickHandler);
  }
}

function clickHandler(event) {
  let target = event.currentTarget;
  let children = target.children;
  let p = children[0];
  p.style.display = "block";
}

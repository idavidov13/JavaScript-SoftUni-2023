// 1. Sections

// You will receive an array of strings. For each string, create a div with a paragraph with the string in it. Each paragraph is initially hidden (display:none). Add a click event listener to each div that displays the hidden paragraph. Finally, you should append all divs to the element with an id "content".
function create(words) {
  let appendHere = document.getElementById("content");

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

// 5. Table - Search Engine
// Write a function that searches in a table by given input.
// When the "Search" button is clicked, go through all cells in the table except for the first row (Student name, Student email, and Student course) and check if the given input has a match (check for both full words and single letters).

// If any of the rows contain the submitted string, add a class select to that row. Note that more than one row may contain the given string.

// Оtherwise, if there is no match, nothing should happen.

// Note: After every search ("Search" button is clicked), clear the input field and remove all already selected classes (if any) from the previous search, for the new search to contain only the new result.

function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let input = document.getElementById("searchField").value;
    document.getElementById("searchField").value = "";

    let selectedRows = document.getElementsByClassName("select");
    while (selectedRows.length > 0) {
      selectedRows[0].classList.remove("select");
    }

    let rowData = document.querySelectorAll("tr");

    for (let row of rowData) {
      let cellData = row.querySelectorAll("td");
      let flag = false;

      for (let cell of cellData) {
        if (cell.textContent.includes(input)) {
          flag = true;
          break;
        }
      }
      if (flag) {
        row.classList.add("select");
      }
    }
  }
}

// 4. Search in List

// An HTML page holds a list of towns, a search box, and a [Search] button. Implement the search function to bold and underline the items from the list which include the text from the search box. Also, print the number of items the current search matches in the format `${matches} matches found`.

// Note: It is necessary to clear the results of the previous search.
function search() {
  let counter = 0;
  let arr = Array.from(document.querySelectorAll("ul li"));
  let input = document.getElementById("searchText").value;
  for (let entry of arr) {
    if (entry.textContent.includes(input)) {
      entry.style.fontWeight = "bold";
      entry.style.textDecoration = "underline";
      counter++;
    } else {
      entry.style.fontWeight = "normal";
      entry.style.textDecoration = "none";
    }
  }
  document.getElementById("result").innerText = `${counter} matches found`;
}

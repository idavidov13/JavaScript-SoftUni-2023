// 8. Generate Report

// You will be given a web page, containing a table and output area.
// When the "Generate Report" button is pressed:

// · You must generate a JSON report from the data inside the table, by only taking the columns, which are selected.

// Each table header has a checkbox. If the checkbox is checked, then the data from this column must be included in the report. Unchecked columns must be omitted.
// For every row (excluding the header):

// · Create an object with properties for each of its columns.

// · The name of each property is the name attribute of the column’s header, and the value is the text content of the cell.

// · Store the result in an array and output it as a JSON string display it inside the <textarea> with id "output". See the example for details.
// Input/Output

// There will be input, your program must execute based on the page content. The output must be a JSON string, displayed in the <textarea> with id "output".
function generateReport() {
  let inputElements = Array.from(document.getElementsByTagName("input"));

  const resultArr = [];
  let tableRows = Array.from(document.getElementsByTagName("tr"));
  const checkedCols = [];

  for (let i = 0; i < tableRows.length; i++) {
    const row = tableRows[i];
    const obj = {};

    for (let y = 0; y < row.children.length; y++) {
      const element = row.children[y];
      if (i == 0) {
        if (element.children[0].checked) {
          checkedCols.push(y);
        }
        continue;
      }

      if (checkedCols.includes(y)) {
        let propertyName = inputElements[y].name;
        obj[propertyName] = element.textContent;
      }
    }
    if (i !== 0) {
      resultArr.push(obj);
    }
  }

  document.getElementById("output").value = JSON.stringify(resultArr);
}

// function generateReport() {
//   let columns = document.querySelectorAll("thead tr th");
//   let columnName = [];
//   let isChecked = [];
//   let tableRow = document.querySelectorAll("tbody tr");
//   let reportObj = [];

//   for (let column of columns) {
//     columnName.push(column.textContent);
//     isChecked.push(column.querySelector("input[type='checkbox']").checked);
//   }

//   for (let row of tableRow) {
//     let information = {};

//     for (let i = 0; i < row.cells.length; i++) {
//       if (isChecked[i]) {
//         information[columnName[i]] = row.cells[i].textContent.trim();
//       } else {
//         information[columnName[i]] = null;
//       }
//     }
//     reportObj.push(information);
//   }
//   let result = JSON.stringify(reportObj, null, 2);
//   let finalText = document.getElementById("output");
//   finalText.value = result;
// }

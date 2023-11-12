// 6. Company Users

// Write a function, which keeps the information about companies and their employees.

// You will receive an array of strings containing the company name and employee's id. Add each employee to the given company. Keep in mind that a company cannot have two employees with the same id.

// When you finish reading data, order the companies by their name in ascending order.

// Print the company name and each employee's id in the following format:

// {companyName}

// -- {id1}

// -- {id2}

// -- {idN}

// Input / Constraints

// · The input come as array of strings, each in the format: "{companyName} -> {employeeId}".

// · The input always will be valid.
function companyUsers(arr) {
  let companyEmp = {};

  for (let each of arr) {
    let [company, empNumber] = each.split(" -> ");
    if (company in companyEmp) {
      let empArr = new Array(companyEmp[company]);
      //console.log(empArr);
      if (!empArr.includes(empNumber)) {
        companyEmp[company] = companyEmp[company] + ", " + empNumber;
      }
    } else {
      companyEmp[company] = empNumber;
    }
  }
  let sortedArr = Object.entries(companyEmp).sort();
  for (let each of sortedArr) {
    console.log(each[0]);
    let personsNum = each[1].split(", ");
    for (let i = 0; i < personsNum.length; i++) {
      console.log(`-- ${personsNum[i]}`);
    }
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);

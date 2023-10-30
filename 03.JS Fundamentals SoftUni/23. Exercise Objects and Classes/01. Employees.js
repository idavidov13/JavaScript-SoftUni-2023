// 1. Employees

// You're tasked to create a list of employees and their personal numbers.

// You will receive an array of strings. Each string is an employee name and to assign them a personal number you have to find the length of the name (whitespace included).

// Try to use an object.

// At the end print all the list employees in the following format:

// "Name: {employeeName} -- Personal Number: {personalNum}"

function employees(arr) {
  class Employees {
    constructor(name, personalNum) {
      this.name = name;
      this.personalNum = this.name.length;
    }
  }
  for (let employee of arr) {
    let person = new Employees(employee);
    console.log(
      `Name: ${person.name} -- Personal Number: ${person.personalNum}`
    );
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);

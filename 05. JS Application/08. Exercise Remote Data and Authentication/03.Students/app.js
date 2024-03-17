// 3. Students

// Your task is to implement functionality for creating and listing students from a database. Create a new collection called "students",

// Each student has:

// § firstName - string, non-empty

// § lastName - string, non-empty

// § facultyNumber - string of numbers, non-empty

// § grade - number, non-empty

// You need to write functionality for creating students. When creating a new student, make sure you name the properties accordingly.

// You will also need to extract students. You will be given an HTML template with a table in it. Create an AJAX request that extracts all the students.

// URL for this task: http://localhost:3030/jsonstore/collections/students

function attachEvents() {
  const url = "http://localhost:3030/jsonstore/collections/students";
  const tableRef = document.querySelector("tbody");
  const submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", submitForm);

  async function loadStudents() {
    let response = await fetch(url);
    let data = await response.json();
    tableRef.innerHTML = "";

    Object.values(data).forEach((rec) => {
      createAndAppendRow(rec);
    });
  }

  loadStudents();

  function createAndAppendRow(data) {
    let row = document.createElement("tr");
    let firstName = document.createElement("th");
    let lastName = document.createElement("th");
    let facultyNumber = document.createElement("th");
    let grade = document.createElement("th");
    firstName.textContent = data.firstName;
    lastName.textContent = data.lastName;
    facultyNumber.textContent = data.facultyNumber;
    grade.textContent = data.grade;

    row.appendChild(firstName);
    row.appendChild(lastName);
    row.appendChild(facultyNumber);
    row.appendChild(grade);
    tableRef.appendChild(row);
  }

  async function submitForm(e) {
    e.preventDefault();
    let firstNameRef = document.querySelector('input[name="firstName');
    let lastNameRef = document.querySelector('input[name="lastName');
    let facultyNumberRef = document.querySelector('input[name="facultyNumber');
    let gradeRef = document.querySelector('input[name="grade');

    let firstName = firstNameRef.value;
    let lastName = lastNameRef.value;
    let facultyNumber = facultyNumberRef.value;
    let grade = gradeRef.value;

    if (!firstName || typeof firstName !== "string") {
      return;
    }

    if (!lastName || typeof lastName !== "string") {
      return;
    }

    if (!facultyNumber || isNaN(facultyNumber)) {
      return;
    }

    if (!grade || isNaN(grade)) {
      return;
    }

    let data = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, facultyNumber, grade }),
    };

    await fetch(url, data);
    firstNameRef.value = "";
    lastNameRef.value = "";
    facultyNumberRef.value = "";
    gradeRef.value = "";
    loadStudents();
  }
}

attachEvents();

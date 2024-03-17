// 4. Book Library

// First task is to "GET" all books. To consume the request with POSTMAN your url should be the following: http://localhost:3030/jsonstore/collections/books

// Using the provided skeleton, write the missing functionalities.

// Load all books by clicking the button "LOAD ALL BOOKS"

// Get Book

// This functionality is not needed in this task, but you can try it with postman by sending request to "GET" the Book with id:" d953e5fb-a585-4d6b-92d3-ee90697398a0". Send a GET request to this URL:

// http://localhost:3030/jsonstore/collections/books/:id

// Create Book

// Write functionality to create a new book, when the submit button is clicked. Before sending the request be sure the fields are not empty (make validation of the input). To create a book, you have to send a "POST" request and the JSON body should be in the following format:

// {

//   "author": "New Author",

//   "title": "New Title"

//   }

//   Update Book

//   By clicking the edit button of a book, change the form like this:

//   The HTTP command "PUT" modifies an existing HTTP resource. The URL is:

// http://localhost:3030/jsonstore/collections/books/:id

// The JSON body should be in the following format:

// {

// "author": "Changed Author",

// "title": "Changed Title"

// }

// Delete Book

// By clicking the delete button you have to delete the book, without any confirmation. To delete a book use "DELETE" command and send REQUEST: http://localhost:3030/jsonstore/collections/books/:id

const loadBooksBtn = document.getElementById("loadBooks");
loadBooksBtn.addEventListener("click", loadBooks);
const url = "http://localhost:3030/jsonstore/collections/books/";
const tableRef = document.querySelector("tbody");
const formRef = document.querySelector("form");
const submitBtn = document.querySelectorAll("form button")[0];
submitBtn.addEventListener("click", addNewBook);
let titleRef = document.querySelector('input[name="title"]');
let authorRef = document.querySelector('input[name="author"]');
let id = "";
let curTitle = "";
let curAuthor = "";

async function loadBooks() {
  tableRef.innerHTML = "";
  let response = await fetch(url);
  let responseData = await response.json();
  let data = Object.entries(responseData);
  data.forEach((element) => {
    let row = createNewRow(element);
    tableRef.appendChild(row);
  });
}

function createNewRow(data) {
  const row = document.createElement("tr");
  const title = document.createElement("td");
  const author = document.createElement("td");
  const action = document.createElement("td");
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.dataset.id = data[0];
  editBtn.addEventListener("click", onEditClick);
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.dataset.id = data[0];
  deleteBtn.addEventListener("click", onDeleteClick);
  action.appendChild(editBtn);
  action.appendChild(deleteBtn);

  title.textContent = data[1].title;
  author.textContent = data[1].author;
  row.appendChild(title);
  row.appendChild(author);
  row.appendChild(action);
  return row;
}

async function addNewBook(e) {
  e.preventDefault();
  let title = titleRef.value;
  let author = authorRef.value;

  if (!title || !author) {
    return;
  }

  let data = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title, author }),
  };

  await fetch(url, data);
  titleRef.value = "";
  authorRef.value = "";
  loadBooks();
}

function onEditClick(e) {
  id = e.target.dataset.id;
  let allChildren = e.currentTarget.parentElement.parentElement.children;
  curTitle = allChildren[0].textContent;
  curAuthor = allChildren[1].textContent;
  let formText = document.querySelector("h3");
  formText.textContent = "Edit FORM";
  submitBtn.textContent = "Save";
  submitBtn.removeEventListener("click", addNewBook);
  submitBtn.addEventListener("click", onEdit);
  titleRef.value = curTitle;
  authorRef.value = curAuthor;
}

async function onEdit(e) {
  e.preventDefault();
  let title = titleRef.value;
  let author = authorRef.value;
  if (!title || !author) {
    return;
  }

  let data = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title, author }),
  };
  await fetch(url + "/" + id, data);
  titleRef.value = "";
  authorRef.value = "";
  loadBooks();
}

async function onDeleteClick(e) {
  const curId = e.target.dataset.id;
  const option = {
    method: "DELETE",
  };

  await fetch(url + "/" + curId, option);
  loadBooks();
}

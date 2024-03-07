// 2. Phonebook

// Write a JS program that can load, create and delete entries from a Phonebook. You will be given an HTML template to which you must bind the needed functionality.

// When the [Load] button is clicked, a GET request should be made to the server to get all phonebook entries. Each received entry should be in a li inside the ul with id="phonebook" in the following format with text "<person>: <phone> " and a [Delete] button attached. Pressing the [Delete] button should send a DELETE request to the server and delete the entry. The received response will be an object in the following format: {<key>:{person:<person>, phone:<phone>}, <key2>:{person:<person2>, phone:<phone2>,…} where <key> is an unique key given by the server and <person> and <phone> are the actual values.

// When the [Create] button is clicked, a new POST request should be made to the server with the information from the Person and Phone textboxes, the Person and Phone textboxes should be cleared and the Phonebook should be automatically reloaded (like if the [Load] button was pressed).

// The data sent on a POST request should be a valid JSON object, containing properties person and phone. Example format: {

// "person": "<person>",

// "phone": "<phone>"

// }

// The url to which your program should make requests is:

// http://localhost:3030/jsonstore/phonebook

// GET and POST requests should go to http://localhost:3030/jsonstore/phonebook, while DELETE requests should go to http://localhost:3030/jsonstore/phonebook/:key> , where :key is the unique key of the entry (you can find out the key from the key property in the GET request)
function attachEvents() {
  const url = "http://localhost:3030/jsonstore/phonebook";
  const ulRef = document.getElementById("phonebook");

  document.getElementById("btnLoad").addEventListener("click", onLoadRecords);
  document
    .getElementById("btnCreate")
    .addEventListener("click", onCreateRecords);

  async function onLoadRecords(e) {
    let response = await fetch(url);
    let data = await response.json();
    ulRef.innerHTML = "";

    Object.values(data).forEach((rec) => {
      createAndAppendLi(rec);
    });
  }

  function createAndAppendLi(data) {
    let li = document.createElement("li");
    li.textContent = `${data.person}: ${data.phone}`;

    let btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.dataset.id = data._id;
    btn.addEventListener("click", onDelete);

    li.appendChild(btn);

    ulRef.appendChild(li);
  }

  async function onDelete(e) {
    let id = e.target.dataset.id;
    await fetch(url + "/" + id, {
      method: "DELETE",
    });
    onLoadRecords();
  }

  async function onCreateRecords(e) {
    let personRef = document.getElementById("person");
    let phoneRef = document.getElementById("phone");

    let person = personRef.value;
    let phone = phoneRef.value;

    if (!person || !phone) {
      return;
    }

    let data = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ person, phone }),
    };

    await fetch(url, data);
    personRef.value = "";
    phoneRef.value = "";
    onLoadRecords();
  }
}

attachEvents();

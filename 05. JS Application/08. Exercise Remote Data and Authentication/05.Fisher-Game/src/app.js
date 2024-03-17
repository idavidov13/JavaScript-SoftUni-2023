// 5. Fisher Game

//const { use } = require("chai");

// Use the provided skeleton and the server.
// Login User

// The Login page contains a form for existing user authentication. By given username and password, the app should login an existing user.

// · After a successful login the home page should be displayed.

// · In case of error, an appropriate error message should be displayed and the user should be able to fill in the login form again.

// · Keep the user data in the browser's session or locale storage.

// · Get request: http://localhost:3030/users/login
// If the user is not logged in, all the buttons should be disabled except the "LOAD" button.

// Register User

// By given email and password, the app should register a new user in the system.

// · In case of error (eg. invalid username/password), an appropriate error message should be displayed, and the user should be able to try to register again.

// · Keep the user data in the browser's session or local storage.

// · After a successful registration the home page should be displayed.

// · Post request: http://localhost:3030/users/register
// Logout

// The logout action is available to logged-in users. Send the following request to perform logout:

// · Get: http://localhost:3030/users/logout

// Required headers are described in the documentation. Upon success, the REST service will return an empty response. Clear any session information you’ve stored in browser storage.

// If the logout was successful, redirect the user to the Home page and change the button in navigation.

// Load catches

// By clicking it you have to load all the catches from the server and render them like on the picture:

// · Pressing the [Load] button should list all catches. (For all users)

// · Pressing the [Update] button should send a PUT request, updating the catch in http://localhost:3030/data/catches/:id. (Only for the creator of the catch)

// · Pressing the [Delete] button should delete the catch from http://localhost:3030/data/catches/:id. (Only for the creator of the catch)

// · Pressing the [Add] button should submit a new catch with the values of the inputs in the fieldset with id="addFrom". (Only for logged in users)

// · Button [Add] should be disabled in there are no logged in user.

// · Buttons [Update] and [Delete] should be disabled if the currently logged-in user is not the author of the catch.
// · angler - string representing the name of the person who caught the fish

// · weight - floating-point number representing the weight of the fish in kilograms

// · species - string representing the name of the fish species

// · location - string representing the location where the fish was caught

// · bait - string representing the bait used to catch the fish

// · captureTime - integer number representing the time needed to catch the fish in minutes

// Use the following requests to access your data:

// · List All Catches

// o Endpoint - http://localhost:3030/data/catches

// o Method: GET

// · Create a New Catch

// o Endpoint: http://localhost:3030/data/catches

// o Method: POST

// o Request body (JSON): {"angler":"…", "weight":…, "species":"…", "location":"…", "bait":"…", "captureTime":…}

// · Update a Catch

// o Endpoint: http://localhost:3030/data/catches/:catchId

// o Method: PUT

// o Request body (JSON): {"angler":"…", "weight":…, "species":"…", "location":"…", "bait":"…", "captureTime":…}

// · Delete a Catch

// o Endpoint: http://localhost:3030/data/catches /:catchId

// o Method: DELETE
document.querySelector("a[id='home']").classList.add("active");
document.getElementById("logout").addEventListener("click", onLogout);
document.querySelector(".load").addEventListener("click", onLoadCatch);
document.getElementById("addForm").addEventListener("submit", onCreate);

let userData = JSON.parse(sessionStorage.getItem("userData"));
const userNav = document.getElementById("user");
const guestNav = document.getElementById("guest");
const addBtnRef = document.querySelector(".add");
const catchesContainerRef = document.getElementById("catches");
const endpoints = {
  logout: "http://localhost:3030/users/logout",
  catches: "http://localhost:3030/data/catches",
};

function hasOwner(id) {
  return userData?._id == id;
}

//update nav
updateNav();
function updateNav() {
  if (userData) {
    document.querySelector("nav p span").textContent = userData.email;
    userNav.style.display = "inline-block";
    guestNav.style.display = "none";
    addBtnRef.disabled = false;
  } else {
    document.querySelector("nav p span").textContent = "guest";
    userNav.style.display = "none";
    guestNav.style.display = "inline-block";
    addBtnRef.disabled = true;
  }
}

async function onLogout(e) {
  let option = {
    method: "GET",
    headers: {
      "X-Authorization": userData.accessToken,
    },
  };
  await fetch(endpoints.logout, option);
  sessionStorage.clear();
  userData = "";
  await onLoadCatch();
  updateNav();
}

async function onLoadCatch(e) {
  catchesContainerRef.innerHTML = "";
  const response = await fetch(endpoints.catches);
  const data = await response.json();
  for (const x of data) {
    let div = listCatches(x);
    catchesContainerRef.appendChild(div);
  }
}
// async function onLoadCatch(e) {
//   catchesContainerRef.innerHTML = "";
//   const response = await fetch(endpoints.catches);
//   const data = await response.json();
//   debugger;
//   data.forEach((x) => {
//     let div = listCatches(x);
//     catchesContainerRef.appendChild(div);
//   });
//   debugger;
// }

function listCatches(data) {
  let isOwner = hasOwner(data._ownerId);
  let div = document.createElement("div");
  div.classList.add("catch");
  div.innerHTML += `<label>Angler</label>`;
  div.innerHTML += `<input type="text" class="angler" ${
    isOwner ? "" : "disabled"
  } value="${data.angler}">`;
  div.innerHTML += `<label>Weight</label>`;
  div.innerHTML += `<input type="text" class="weight" ${
    isOwner ? "" : "disabled"
  } value="${data.weight}">`;
  div.innerHTML += `<label>Species</label>`;
  div.innerHTML += `<input type="text" class="species" ${
    isOwner ? "" : "disabled"
  } value="${data.species}">`;
  div.innerHTML += `<label>Location</label>`;
  div.innerHTML += `<input type="text" class="location" ${
    isOwner ? "" : "disabled"
  } value="${data.location}">`;
  div.innerHTML += `<label>Bait</label>`;
  div.innerHTML += `<input type="text" class="bait" ${
    isOwner ? "" : "disabled"
  } value="${data.bait}">`;
  div.innerHTML += `<label>Capture Time</label>`;
  div.innerHTML += `<input type="number" class="captureTime" ${
    isOwner ? "" : "disabled"
  } value="${data.captureTime}">`;

  const updateBtn = document.createElement("button");
  updateBtn.classList.add("update");
  updateBtn.dataset.id = data._id;
  updateBtn.textContent = "Update";

  const delBtn = document.createElement("button");
  delBtn.classList.add("delete");
  delBtn.dataset.id = data._id;
  delBtn.textContent = "Delete";

  if (!hasOwner(data._ownerId)) {
    updateBtn.disabled = true;
    delBtn.disabled = true;
  }

  div.appendChild(updateBtn);
  div.appendChild(delBtn);
  updateBtn.addEventListener("click", onUpdate);
  delBtn.addEventListener("click", onDelete);
  return div;
}
async function onCreate(e) {
  e.preventDefault();
  let formData = new FormData(e.target);
  let angler = formData.get("angler");
  let weight = formData.get("weight");
  let species = formData.get("species");
  let location = formData.get("location");
  let bait = formData.get("bait");
  let captureTime = formData.get("captureTime");
  let _ownerId = userData._id;

  if (!angler || !weight || !species || !location || !bait || !captureTime) {
    return;
  }
  let data = { angler, weight, species, location, bait, captureTime, _ownerId };
  const option = createOption("POST", data);
  await fetch(endpoints.catches, option);
  onLoadCatch();
}

async function onUpdate(event) {
  event.preventDefault();
  const targetDiv = event.target.closest(".catch");
  const angler = targetDiv.querySelector(".angler").value;
  const weight = targetDiv.querySelector(".weight").value;
  const species = targetDiv.querySelector(".species").value;
  const location = targetDiv.querySelector(".location").value;
  const bait = targetDiv.querySelector(".bait").value;
  const captureTime = targetDiv.querySelector(".captureTime").value;
  const id = event.target.dataset.id;

  if (!angler || !weight || !species || !location || !bait || !captureTime) {
    return;
  }

  let data = { angler, weight, species, location, bait, captureTime, id };
  const options = {
    method: "PUT",
    headers: {
      "X-Authorization": userData.accessToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  debugger;
  await fetch(endpoints.catches + "/" + id, options);

  onLoadCatch();
}

async function onDelete(e) {
  const id = e.target.dataset.id;
  const option = {
    method: "DELETE",
    headers: {
      "X-Authorization": userData.accessToken,
    },
  };
  await fetch(endpoints.catches + "/" + id, option);
  onLoadCatch();
}

function createOption(method, data) {
  return {
    method,
    headers: {
      "Content-type": "application/json",
      "X-Authorization": userData.accessToken,
    },
    body: JSON.stringify(data),
  };
}

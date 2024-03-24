import { getAllMovies } from "./dataServices.js";
import { getUserId } from "./userHelper.js";
import { showDetails } from "./details.js";

const ul = document.getElementById("movies-list");

export function showHome() {
  document
    .querySelectorAll("section")
    .forEach((section) => (section.style.display = "none"));
  document.getElementById("home-page").style.display = "block";

  const userId = getUserId();
  if (userId) {
    showAddBtn();
  }

  showAllMovies(userId);
}

function showAddBtn() {
  document.getElementById("add-movie-button").style.display = "block";
}

async function showAllMovies(userId) {
  document.getElementById("movie").style.display = "block";
  document.getElementById("movies-list").replaceChildren();
  const data = await getAllMovies();
  data.forEach((movie) => {
    createMovie(movie, userId);
  });
}

function createMovie(data, userId) {
  const li = document.createElement("li");
  li.classList.add("card");
  li.classList.add("md-4");
  li.innerHTML = `
  <img class="card-img-top" src="${data.img}" alt="Card image cap" width="400">
  <div class='card-body'>
  <h4 class='card-title'>${data.title}</h4>
  <a href="/details/${data._id}"> </a>
  </div>
  `;
  if (userId) {
    li.innerHTML += `<div class="card-footer">
    <button type="button" class="btn btn-info" data-id=${data._id}>Details</button>
  </div>`;
    li.addEventListener("click", showDetails);
  }

  ul.appendChild(li);
}

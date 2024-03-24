import { getLike, getSingleMovies } from "./dataServices.js";
import { getUserId } from "./userHelper.js";

export async function showDetails(e) {
  e.preventDefault();
  document
    .querySelectorAll("section")
    .forEach((section) => (section.style.display = "none"));
  const section = document.getElementById("movie-example");
  section.style.display = "block";
  section.replaceChildren();
  const id = e.target.dataset.id;
  const data = await getSingleMovies(id);
  const likes = await getLike(id);

  const sectionDetails = await createMovieDetails(data, likes);
  sectionDetails.addEventListener("click", onAction);
  section.appendChild(sectionDetails);
}

async function createMovieDetails(data, likes) {
  const element = document.createElement("section");
  const isOwner = getUserId() == data._ownerId;
  if (isOwner) {
    element.innerHTML = `<section id="movie-example" class="view-section" style="display: block;">
  <div class="container">
    <div class="row bg-light text-dark">
      <h1>Movie title: ${data.title}</h1>

      <div class="col-md-8">
        <img class="img-thumbnail" src="${data.img}" alt="Movie">
      </div>
      <div class="col-md-4 text-center">
        <h3 class="my-3">Movie Description</h3>
        <p>
          ${data.description}
        </p>
        <a class="btn btn-danger" href="#">Delete</a>
        <a class="btn btn-warning" href="#">Edit</a>
        <span class="enrolled-span">Liked ${likes}</span>
      </div>
    </div>
  </div>
</section>`;
  } else {
    element.innerHTML = `<section id="movie-example" class="view-section" style="display: block;">
  <div class="container">
    <div class="row bg-light text-dark">
      <h1>Movie title: ${data.title}</h1>

      <div class="col-md-8">
        <img class="img-thumbnail" src="${data.img}" alt="Movie">
      </div>
      <div class="col-md-4 text-center">
        <h3 class="my-3">Movie Description</h3>
        <p>
          ${data.description}
        </p>
                <a class="btn btn-primary" href="likeMovie">Like</a>
        <span class="enrolled-span">Liked ${likes}</span>
      </div>
    </div>
  </div>
</section>`;
  }
  return element;
}

function onAction(e) {
  debugger;
}

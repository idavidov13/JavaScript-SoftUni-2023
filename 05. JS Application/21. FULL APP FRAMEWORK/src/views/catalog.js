import { getAllEvenets } from "../data/events.js";
import { html, render } from "../lib.js";

//CREATING THE TEMPLATE FOR CATALOG VIEW. IT RECIEVES AN ARRAY OF RECORDS AND WITH TERNARY OPERATOR POPULATES THE FULL CATALOG.
const catalogTemplate = (events) => html`<h2>Current Events</h2>
  <section id="dashboard">
    ${events.length != 0
      ? events.map(eventTemplate)
      : html`<h4>No Events yet.</h4>`}
  </section>`;

//CREATING THE TEMPLATE FOR SINGLE RECORD OF THE CATALOG. IT RECIEVES SINGLE RECORD WITH DATA AND POPULATES ALL THE FIELDS. CHECK IF THERE IS ANY NEED TO UPDATE LINKS (IDs)
const eventTemplate = (event) => html`<div class="event">
  <img src=${event.imageUrl} alt="example1" />
  <p class="title">${event.name}</p>
  <p class="date">${event.date}</p>
  <a class="details-btn" href="/catalog/${event._id}">Details</a>
</div>`;

//CREATING A FUNCTION FOR SHOWING CATALOG VIEW
export async function showCatalog(ctx) {
  const events = await getAllEvenets();

  render(catalogTemplate(events));
}

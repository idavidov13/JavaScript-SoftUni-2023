import page from "../node_modules/page/page.mjs";
import { html, render } from "../node_modules/lit-html/lit-html.js";
import { showAllPosts } from "./views/homeView.js";
import { createEvent } from "../data/events.js";

const formRef = document.querySelector("form");
const postBtn = document.getElementsByClassName("public");
debugger;
postBtn.addEventListener("submit", onSubmit);

async function onSubmit(e) {
  e.preventDefault();
  debugger;
  if (!title || !username || !post) {
    return alert("All fields are required!");
  }
  await createEvent(title, username, post);
  page.redirect("/");
}

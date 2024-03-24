import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../service/dataService.js";

const root = document.getElementById("menu");
document.querySelector("form").addEventListener("submit", addItem);

onLoad();

async function addItem(e) {
  e.preventDefault();
  const inputRef = document.getElementById("itemText");
  const text = inputRef.value;
  inputRef.value = "";
  await dataService.postNewOption({ text });
  onLoad();
}

async function onLoad() {
  const data = await dataService.getAllOptions();
  const option = Object.values(data).map((op) => optionTemp(op));
  update(option);
}

function optionTemp(data) {
  return html`<option value=${data._id}>${data.text}</option>`;
}

function update(data) {
  render(data, root);
}

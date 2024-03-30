//IMPORTING ALL THE FUNCTIONS/MODULES, NEEDED IN THE APP INTO ONE PLACE. ALL MODULES WILL IMPORT OUTSIDE DEPENDENCIES FROM THIS FILE

import {
  html,
  render as renderBase,
} from "../node_modules/lit-html/lit-html.js";
import { classMap } from "../node_modules/lit-html/directives/class-map.js";
import { styleMap } from "../node_modules/lit-html/directives/style-map.js";
import page from "../node_modules/page/page.mjs";

//TODO
const root = document.querySelector("main"); //Check the correct root element

//DECORATOR FUNCTION OF PRIVATE RENDER FROM LIT-HTML LIBRARY
function render(templateResult) {
  renderBase(templateResult, root);
}

export { html, render, classMap, styleMap, page };

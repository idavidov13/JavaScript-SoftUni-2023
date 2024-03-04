window.onload = async function solution() {
  const articlesUrl = "http://localhost:3030/jsonstore/advanced/articles/list";
  const response = await fetch(articlesUrl);
  const data = await response.json();
  const dataArr = Object.entries(data);
  const mainSection = document.getElementById("main");

  for (let each of dataArr) {
    let id = each[1]._id;
    let title = each[1].title;
    let curEl = await createElement(id, title);
    mainSection.appendChild(curEl);
  }
};

async function createElement(id, title) {
  let mainEl = document.createElement("div");
  mainEl.classList.add("accordion");
  let secEl = document.createElement("div");
  secEl.classList.add("head");
  let spanEl = document.createElement("span");
  spanEl.textContent = title;
  let btn = document.createElement("button");
  btn.classList.add("button");
  btn.setAttribute("id", `${id}`);
  btn.textContent = "More";
  btn.addEventListener("click", doTheStuff);
  let infoEl = await createInformation(id);
  secEl.appendChild(spanEl);
  secEl.appendChild(btn);
  mainEl.appendChild(secEl);
  mainEl.appendChild(infoEl);
  return mainEl;
}

async function createInformation(id) {
  let infoDiv = document.createElement("div");
  infoDiv.classList.add("extra");
  let infoP = document.createElement("p");
  let infoUrl = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;

  let response = await fetch(infoUrl);
  let text = await response.json();

  infoP.textContent = text.content;
  infoDiv.appendChild(infoP);
  return infoDiv;
}

async function doTheStuff(e) {
  let curState = e.currentTarget.textContent;
  const button = e.currentTarget;
  const headDiv = button.parentElement;
  const extraDiv = headDiv.nextElementSibling;
  if (curState == "More") {
    e.currentTarget.textContent = "Less";
    extraDiv.style.display = "block";
  } else {
    e.currentTarget.textContent = "More";
    extraDiv.style.display = "none";
  }
}

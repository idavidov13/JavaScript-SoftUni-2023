async function lockedProfile() {
  const profileUrl = "http://localhost:3030/jsonstore/advanced/profiles";
  const response = await fetch(profileUrl);
  const data = await response.json();
  const profilesArr = Object.entries(data);
  const mainElement = document.getElementById("main");
  mainElement.innerHTML = "";
  let count = 1;
  for (let each of profilesArr) {
    const { age, email, username, _id } = each[1];
    createUserCard(age, email, username, count);
    count++;
  }
}

function createUserCard(age, email, username, _id) {
  const mainElement = document.getElementById("main");
  let element = document.createElement("div");
  element.classList.add("profile");
  element.innerHTML = `<img src="./iconProfile2.png" class="userIcon" />
  <label>Lock</label>
  <input type="radio" name="user${_id}Locked" value="lock" checked>
  <label>Unlock</label>
  <input type="radio" name="user${_id}Locked" value="unlock"><br>
  <hr>
  <label>Username</label>
  <input type="text" name="user${_id}Username" value="${username}" disabled readonly />
  <div id="user${_id}Username" hidden>
      <hr>
      <label>Email:</label>
      <input type="email" name="user${_id}Email" value="${email}" disabled readonly />
      <label>Age:</label>
      <input type="email" name="user${_id}Age" value="${age}" disabled readonly />
      </div>`;
  const btn = document.createElement("button");
  btn.textContent = "Show more";
  btn.addEventListener("click", toggleInformation);
  element.appendChild(btn);
  mainElement.appendChild(element);
}

function toggleInformation() {
  const parentProfile = this.closest(".profile");
  const radioButton = parentProfile.querySelectorAll('input[type="radio"]');
  const unlocked = radioButton[1].checked;
  const btn = parentProfile.querySelector("button");
  const divElement = parentProfile.querySelector("div");
  console.log(divElement.hidden);
  if (unlocked) {
    if (btn.textContent == "Show more") {
      divElement.removeAttribute("hidden");
      btn.textContent = "Hide it";
    } else {
      divElement.setAttribute("hidden", "");
      btn.textContent = "Show more";
    }
  }
}

// 3. Locked Profile

// In this problem, you should create a JS functionality that shows and hides the additional information about users.
// When one of the [Show more] buttons is clicked, the hidden information inside the div should

// be shown, only if the profile is not locked! If the current profile is locked, nothing should happen.
// If the hidden information is displayed and we lock the profile again, the [Hide it] button should not be working!

// Otherwise, when the profile is unlocked and we click on the [Hide it] button, the new fields must hide again.

function lockedProfile() {
  //Get all the buttons
  let buttons = Array.from(document.getElementsByTagName("button"));

  for (let btn of buttons) {
    btn.addEventListener("click", showMore);
  }

  function showMore(e) {
    //Get clicked button and all the necessary attributes(is the profile Locked, style of the div and more info tab)
    let lock = e.currentTarget.parentElement.children[2].checked;
    let moreInfo = e.currentTarget.parentElement.children[9];
    let style = e.currentTarget.parentElement.children[9].style.display;
    let buttonLabel = e.currentTarget.parentElement.children[10];

    //Show the information and change the text of the button
    if (!lock && (style == "" || style == "none")) {
      moreInfo.style.display = "block";
      buttonLabel.textContent = "Hide it";
    }

    //Hide the information and change the text of the button
    if (!lock && style == "block") {
      moreInfo.style.display = "none";
      buttonLabel.textContent = "Show more";
    }
  }
}

//Refactored
function lockedProfile() {
  let buttons = Array.from(document.querySelectorAll("button"));

  buttons.forEach((x) => x.addEventListener("click", showMore));

  function showMore(e) {
    let hiddenInfo = e.currentTarget.parentElement.querySelector("div");

    let curRadioBtn = e.target.parentElement.querySelector(
      "input[type='radio']:checked"
    );
    if (curRadioBtn.value === "unlock") {
      if (e.currentTarget.textContent == "Show more") {
        e.currentTarget.textContent = "Hide it";
        hiddenInfo.style.display = "block";
      } else {
        e.currentTarget.textContent = "Show more";
        hiddenInfo.style.display = "none";
      }
    }
  }
}

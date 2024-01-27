function toggle() {
  let info = document.getElementById("extra");
  let text = document.querySelector(".button").textContent;

  if (text == "More") {
    info.style.display = "block";
    document.querySelector(".button").textContent = "Less";
  } else {
    info.style.display = "none";
    document.querySelector(".button").textContent = "More";
  }
}

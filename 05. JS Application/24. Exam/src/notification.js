export function showError(message) {
  const errorBox = document.getElementById("errorBox");
  errorBox.textContent = message;
  errorBox.style.display = "block";

  // Hide error after 3 seconds
  setTimeout(() => {
    errorBox.textContent = "";
    errorBox.style.display = "none";
  }, 3000);
}

// 6. Dynamic Validation

// Write a JS function that dynamically validates an email input field when it is changed. If the input is invalid, apply to it the class "error". Do not validate on every keystroke, as it is annoying for the user, consider only change events.
// A valid email will be in format: <name>@<domain>.<extension>

// Only lowercase Latin characters are allowed for any of the parts of the email. If the input is valid, clear the style.

// Input/Output

// There will be no input/output, your program should instead modify the DOM of the given HTML document.
function validate() {
  let inputRef = document.getElementById("email");
  inputRef.addEventListener("change", onChange);
  function onChange(e) {
    let email = e.target.value;
    let pattern = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/g;
    if (pattern.test(email)) {
      e.target.classList.remove("error");
    } else {
      e.target.classList.add("error");
    }
  }
}

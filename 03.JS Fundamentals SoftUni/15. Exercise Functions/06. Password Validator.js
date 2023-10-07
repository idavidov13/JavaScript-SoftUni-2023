// 6. Password Validator

// Write a function that checks if a given password is valid. Password validations are:

// · The length should be 6 - 10 characters (inclusive)

// · It should consist only of letters and digits

// · It should have at least 2 digits

// If a password is a valid print: "Password is valid".

// If it is NOT valid, for every unfulfilled rule print a message:

// · "Password must be between 6 and 10 characters"

// · "Password must consist only of letters and digits"

// · "Password must have at least 2 digits"
function passwordValidator(pass) {
  let validPassword = true;
  checkNumberOfChars(pass);
  checkConsistency(pass);
  atLeast2digits(pass);
  function checkNumberOfChars(pass) {
    if (pass.length < 6 || pass.length > 10) {
      console.log("Password must be between 6 and 10 characters");
      validPassword = false;
    }
  }
  function checkConsistency(pass) {
    for (let i = 0; i < pass.length; i++) {
      let curChar = pass[i].charCodeAt(0);
      if (
        !(
          (curChar >= 65 && curChar <= 90) ||
          (curChar >= 97 && curChar <= 122) ||
          (curChar >= 48 && curChar <= 57)
        )
      ) {
        console.log("Password must consist only of letters and digits");
        validPassword = false;
        break;
      }
    }
  }
  function atLeast2digits(pass) {
    let digitsCount = 0;
    for (let i = 0; i < pass.length; i++) {
      let curChar = pass[i].charCodeAt(0);
      if (curChar >= 48 && curChar <= 57) {
        digitsCount++;
      }
    }
    if (digitsCount < 2) {
      console.log(`Password must have at least 2 digits`);
      validPassword = false;
    }
  }
  if (validPassword) {
    console.log(`Password is valid`);
  }
}
passwordValidator("logIn");

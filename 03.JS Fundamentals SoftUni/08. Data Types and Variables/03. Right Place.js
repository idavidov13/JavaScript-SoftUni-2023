// 3. Right Place

// You will receive 3 parameters (string, char, string). The first string will be a word with a missing char replaced with an underscore '_'. You have to replace the missing character (underscore) of the first string with the character passed as the second parameter and compare the result with the second string.

// If they are equals, you should print "Matched", otherwise print "Not Matched".
function rightPlace(stringOne, char, stringTwo) {
  let newString = "";
  for (let i = 0; i < stringOne.length; i++) {
    if (stringOne[i] != "_") {
      newString += stringOne[i];
    } else {
      newString += char;
    }
  }
  if (newString == stringTwo) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}
rightPlace("Str_ng", "I", "Strong");

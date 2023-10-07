// 3. Characters in Range

// Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code. Keep in mind that the second character code might be before the first one inside the ASCII table.
function charInRange(char1, char2) {
  let code1 = char1.charCodeAt(0);
  let code2 = char2.charCodeAt(0);
  let min = code1;
  let max = code2;
  let array = [];
  if (min > max) {
    min = code2;
    max = code1;
  }
  for (let i = min + 1; i < max; i++) {
    array.push(String.fromCharCode(i));
  }
  console.log(array.join(" "));
}
charInRange("a", "d");

//Refactored
function charInRange(char1, char2) {
  let code1 = char1.charCodeAt(0);
  let code2 = char2.charCodeAt(0);
  let min = Math.min(code1, code2);
  let max = Math.max(code1, code2);
  let array = [];
  for (let i = min + 1; i < max; i++) {
    array.push(String.fromCharCode(i));
  }
  console.log(array.join(" "));
}
charInRange("a", "d");

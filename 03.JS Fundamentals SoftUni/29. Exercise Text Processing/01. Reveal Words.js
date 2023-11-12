// 1. Reveal Words

// Write a function, which receives two parameters.

// The first parameter will be a string with some words separated by ', '.

// The second parameter will be a string that contains templates containing '*'.

// Find the word with the same length as the template and replace it.
function revealWords(str1, str2) {
  let finalStr = str2;
  let words = str1.split(", ");
  //console.log(words);
  for (let each of words) {
    let replacement = "*";
    let stars = replacement.repeat(each.length);
    finalStr = finalStr.replace(stars, each);
  }
  console.log(finalStr);
}
revealWords(
  "great, learning",

  "softuni is ***** place for ******** new programming languages"
);

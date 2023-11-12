// 4. String Substring

// The input will be given as two separated strings (a word as a first parameter and a text as a second).

// Write a function that checks given text for containing a given word. The comparison should be case insensitive. Once you find a match, print the word and stop the program.

// If you don't find the word print: "{word} not found!"
function substring(str1, str2) {
  str2 = str2.toLowerCase().split(" ");
  if (str2.includes(str1.toLowerCase())) {
    console.log(str1);
  } else {
    console.log(`${str1} not found!`);
  }
}
substring(
  "python",

  "JavaScript is the best programming language"
);

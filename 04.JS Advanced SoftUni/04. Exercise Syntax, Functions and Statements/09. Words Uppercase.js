// 9. *Words Uppercase

// Write a program that extracts all words from a passed-in string and converts them to upper case. The extracted words in the upper case must be printed on a single line separated by ", ".

// The input comes as a single string argument - the text to extract and convert words from.

// The output should be a single line containing the converted string.
// Hints · You may need to use a Regular Expression or check for all delimiters that can be found in a sentence (ex. ",", " ", "!", "?" and so on).
function upperCase(string) {
  const wordsArray = string.match(/\b\w+\b/g);
  if (wordsArray) {
    const upperCaseWords = wordsArray.map((word) => word.toUpperCase());
    console.log(upperCaseWords.join(", "));
  } else {
    console.log("No words found.");
  }
}
upperCase("Hi, how are you?");

// 2. Odd Occurrences

// Write a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).

// The input comes as a single string. The words will be separated by a single space.
function oddOccurances(arr) {
  let lowerCase = arr.toLowerCase();
  let array = lowerCase.split(" ");
  //console.log(array);
  let occurrences = {};

  for (let word of array) {
    occurrences[word] = 0;
  }
  //console.log(occurrences);

  for (let word of array) {
    if (word in occurrences) {
      occurrences[word]++;
    }
  }
  //console.log(occurrences);
  let arrOccurances = Object.entries(occurrences);

  let outcome = [];

  for (let [word, repeats] of arrOccurances) {
    if (repeats % 2 == 1) {
      outcome.push(word);
    }
  }

  let arrToPrint = [];
  for (let each of array) {
    for (let entrie of outcome) {
      if (each == entrie && !arrToPrint.includes(each)) {
        arrToPrint.push(each);
      }
    }
  }
  console.log(arrToPrint.join(" "));
}
oddOccurances("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");

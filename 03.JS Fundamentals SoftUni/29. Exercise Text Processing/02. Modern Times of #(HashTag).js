// 2. Modern Times of #(HashTag)

// The input will be a single string.

// Find all special words starting with #. If the found special word does not consist only of letters, then it is invalid and should not be printed.

// Finally, print out all the special words you found without the label (#) on a new line.
function modern(arr) {
  let forPrint = [];
  let wordArr = arr.split(" ");
  for (let each of wordArr) {
    if (each[0] == "#" && each.length > 1) {
      let flag = false;
      for (let letter of each) {
        if (Number(letter)) {
          flag = true;
        }
      }
      if (!flag) {
        forPrint.push(each);
      }
    }
  }
  forPrint.forEach((word) => console.log(word.replace("#", "")));
}
modern(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);

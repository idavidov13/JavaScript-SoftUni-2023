// 6. Pascal-Case Splitter

// You will receive a single string.

// This string is written in PascalCase format. Your task here is to split this string by every word in it.

// Print them joined by comma and space.
function splitMe(str) {
  let finalArr = [];
  let arr = str.split("");
  let word = "";
  let isFirst = true;
  for (let each of arr) {
    if (each.charCodeAt(0) > 64 && each.charCodeAt(0) < 91) {
      if (isFirst) {
        isFirst = false;
      } else {
        finalArr.push(word);
      }
      word = each;
    } else {
      word += each;
    }
  }
  finalArr.push(word);
  console.log(finalArr.join(", "));
}
splitMe("SplitMeIfYouCanHaHaYouCantOrYouCan");

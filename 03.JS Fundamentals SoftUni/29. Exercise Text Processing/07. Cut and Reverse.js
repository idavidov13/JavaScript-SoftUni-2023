// 7. Cut and Reverse

// The input will be a single string.

// Write a function that cuts the given string into half and reverse the two halves.

// Print each half on a separate line.
function cutReverse(str) {
  let firstStr = str.substring(0, str.length / 2);
  console.log(firstStr.split("").reverse().join(""));
  let secondStr = str.substring(str.length / 2, str.length);
  console.log(secondStr.split("").reverse().join(""));
}
cutReverse("tluciffiDsIsihTgnizamAoSsIsihT");

// 5. Replace Repeating Chars

// Write a function that receives a single string and replace any sequence of the same letters with a single corresponding letter.
function replace(str) {
  let arr = str.split("");
  //console.log(arr);
  let finalStr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      finalStr.push(arr[i]);
    } else {
      if (arr[i] !== arr[i - 1]) {
        finalStr.push(arr[i]);
      }
    }
  }
  console.log(finalStr.join(""));
}
replace("qqqwerqwecccwd");

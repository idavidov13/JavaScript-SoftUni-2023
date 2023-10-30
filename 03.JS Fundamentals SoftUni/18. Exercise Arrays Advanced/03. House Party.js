// 3. House Party
// Write a function that keeps track of guests that are going to a house party.
// You will be given an array of strings. Each string will be one of the following:
// - "{name} is going!"
// - "{name} is not going!"
// If you receive the first type of input, you have to add the person if he/she is not in the list (If he/she is in the list print: "{name} is already in the list!").
// If you receive the second type of input, you have to remove the person if he/she is in the list (if not print: "{name} is not in the list!").
// At the end print all the guests each on a separate line.
function houseParty(arr) {
  let partyArr = [];
  for (let each of arr) {
    curPerson = each.split(" ");
    if (curPerson.length == 3) {
      if (!partyArr.includes(curPerson[0])) {
        partyArr.push(curPerson[0]);
      } else {
        console.log(`${curPerson[0]} is already in the list!`);
      }
    } else {
      if (partyArr.includes(curPerson[0])) {
        let index = partyArr.indexOf(curPerson[0]);
        partyArr.splice(index, 1);
      } else {
        console.log(`${curPerson[0]} is not in the list!`);
      }
    }
  }
  console.log(partyArr.join("\r\n"));
}
houseParty([
  "Tom is going!",

  "Annie is going!",

  "Tom is going!",

  "Garry is going!",

  "Jerry is going!",
]);

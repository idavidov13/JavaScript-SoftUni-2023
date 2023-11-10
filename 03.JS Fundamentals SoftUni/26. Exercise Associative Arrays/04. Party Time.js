// 4. Party Time

// There is a party at SoftUni. Many guests are invited and they are two types: VIP and regular. When guests come to the party check if he/she contains in any of the two reservation lists.

// The input will come as an array of strings. You will be given the list with the guests before you receive a command "PARTY".

// All VIP numbers start with a digit.

// When you receive the command "PARTY", the guests start coming.

// Print the count of guests then all guests, who didn't come to the party (VIP must be printed first).

// Hint: Guest names are not unique. Only the first match is removed when receiving a name.
function partyTime(arr) {
  let vipGuests = [];
  let regularGuests = [];
  let curEl = arr.shift();
  //console.log(curEl);
  while (curEl != "PARTY") {
    if (!isNaN(Number(curEl[0]))) {
      vipGuests.push(curEl);
    } else {
      regularGuests.push(curEl);
    }
    curEl = arr.shift();
  }
  // console.log(vipGuests);
  // console.log(regularGuests);

  for (let curGuest of arr) {
    if (vipGuests.includes(curGuest)) {
      vipGuests.splice(vipGuests.indexOf(curGuest), 1);
    } else {
      regularGuests.splice(regularGuests.indexOf(curGuest), 1);
    }
  }

  console.log(vipGuests.concat(regularGuests).length);
  vipGuests.concat(regularGuests).forEach((guest) => {
    console.log(guest);
  });
}
partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);

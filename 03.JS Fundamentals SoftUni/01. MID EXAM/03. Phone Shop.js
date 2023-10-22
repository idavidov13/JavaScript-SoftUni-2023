// Phone Shop  Kevin has a phone shop. He has to order new models, but his storage is so large that he doesn't know which phone models he has. Write a program that will help Kevin not to buy unnecessary phones. You will receive a list of phones separated by  ", " (comma and space). After that, until you receive "End", you will receive different commands, each on a new line. The commands are: • "Add - {phone}": o Add the given phone to the storage.  o If the phone already exists, you should skip this line. • "Remove - {phone}": o Remove the phone from the storage if it exists. o Otherwise, ignore the command. • "Bonus phone - {oldPhone}:{newPhone}": o If the old phone exists, add the new phone after the old one.  o Otherwise, ignore the command. • "Last - {phone}": o If the given phone exists, you should change its position and put it last in your storage. o Otherwise, ignore the command. Input • On the first line - list of phones separated by ", " (comma and space). • On the next lines - commands until you receive "End".frie Output • After receiving the "End" command, print the phones in your storage, separated by ", " (comma and space).
function phoneShop(arr) {
  let str = arr.shift();
  let store = str.split(", ");
  //console.log(store);
  //console.log(arr);
  let command = arr.shift().split(" ");
  //console.log(command);
  while (command[0] != "End") {
    if (command[0] == "Add") {
      if (!store.includes(command[2])) {
        store.push(command[2]);
      }
    } else if (command[0] == "Remove") {
      if (store.includes(command[2])) {
        let idx = store.indexOf(command[2]);
        store.splice(idx, 1);
      }
    } else if (command[0] == "Bonus") {
      let phones = command[3].split(":");
      if (store.includes(phones[0])) {
        let idx = store.indexOf(phones[0]);
        store.splice(idx, 1, phones[0], phones[1]);
      }
    } else if (command[0] == "Last") {
      if (store.includes(command[2])) {
        let idx = store.indexOf(command[2]);
        let removedItem = store.splice(idx, 1);
        store.push(removedItem);
      }
    }
    command = arr.shift().split(" ");
  }
  console.log(store.join(", "));
}
// phoneShop([
//   "SamsungA50, MotorolaG5, IphoneSE",
//   "Add - Iphone10",
//   "Remove - IphoneSE",
//   "End",
// ]);
// phoneShop([
//   "HuaweiP20, XiaomiNote",
//   "Remove - Samsung",
//   "Bonus phone - XiaomiNote:Iphone5",
//   "End",
// ]);
phoneShop([
  "SamsungA50, MotorolaG5, HuaweiP10",
  "Last - SamsungA50",
  "Add - MotorolaG5",
  "End",
]);

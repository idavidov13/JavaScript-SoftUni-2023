function decryptingCommands(arr) {
  let strForDecrypt = arr.shift();
  let command = arr.shift();

  while (command != "Finish") {
    let commandArray = command.split(" ");

    switch (commandArray[0]) {
      case "Replace":
        while (strForDecrypt.includes(commandArray[1])) {
          strForDecrypt = strForDecrypt.replace(
            commandArray[1],
            commandArray[2]
          );
        }
        console.log(strForDecrypt);
        break;
      case "Cut":
        if (
          Number(commandArray[1]) < 0 ||
          Number(commandArray[2]) < 0 ||
          Number(commandArray[1]) > strForDecrypt.length - 1 ||
          Number(commandArray[2]) > strForDecrypt.length - 1 ||
          commandArray[1] > commandArray[2]
        ) {
          console.log("Invalid indices!");
        } else {
          strForDecrypt =
            strForDecrypt.substring(0, Number(commandArray[1])) +
            strForDecrypt.substring(Number(commandArray[2]) + 1);
          console.log(strForDecrypt);
        }
        break;
      case "Make":
        if (commandArray[1] == "Upper") {
          strForDecrypt = strForDecrypt.toUpperCase();
          console.log(strForDecrypt);
        } else {
          strForDecrypt = strForDecrypt.toLowerCase();
          console.log(strForDecrypt);
        }
        break;
      case "Check":
        if (strForDecrypt.includes(commandArray[1])) {
          console.log(`Message contains ${commandArray[1]}`);
        } else {
          console.log(`Message doesn't contain ${commandArray[1]}`);
        }
        break;
      case "Sum":
        if (
          Number(commandArray[1]) < 0 ||
          Number(commandArray[2]) < 0 ||
          Number(commandArray[1]) > strForDecrypt.length - 1 ||
          Number(commandArray[2]) > strForDecrypt.length - 1 ||
          commandArray[1] > commandArray[2]
        ) {
          console.log("Invalid indices!");
        } else {
          let sum = 0;
          for (
            let i = Number(commandArray[1]);
            i <= Number(commandArray[2]);
            i++
          ) {
            sum += strForDecrypt.charCodeAt(i);
          }
          console.log(sum);
        }
        break;
    }

    command = arr.shift();
  }
}
decryptingCommands([
  "ILikeSoftUni",
  "Replace I We",
  "Make Upper",
  "Check SoftUni",
  "Sum 1 4",
  "Cut 1 4",
  "Finish",
]);

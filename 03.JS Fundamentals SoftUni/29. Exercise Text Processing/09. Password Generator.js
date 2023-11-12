// 9. *Password Generator

// For this problem, you have to write a function, which generates a password depending on input information. As such, you will be given an array of three strings. The first two strings will be at least 10 characters long, the third one will be one word.

// Your task here is to concatenate the first two strings and replace all vowels in the concatenated string with symbols from the third string. The first vowel must be replaced with the first character from the third string, the second vowel with the second character from that string, and so on. If the third string is less than the vowels count in the newly formed string you need to start over with the character on the 0 index. When you replace all vowels reverse the new password and print it on the console in a format:

// 'Your generated password is {password}'

// Note: All replaced vowels with the characters from the third string must be upper-case, the rest of the characters are lower-case.
function passGenerator(arr) {
  let firstString = arr[0] + arr[1];
  let codeWord = arr[2];
  let password = [];
  let firstStringAsArr = firstString.split("");
  let str3Length = codeWord.length;
  let counter = 0;
  for (let each of firstStringAsArr) {
    if (
      each == "a" ||
      each == "e" ||
      each == "i" ||
      each == "o" ||
      each == "u"
    ) {
      if (counter < str3Length) {
        password.unshift(codeWord[counter].toUpperCase());
        counter++;
      } else {
        counter = 0;
        password.unshift(codeWord[counter].toUpperCase());
        counter++;
      }
    } else {
      password.unshift(each);
    }
  }
  console.log(`Your generated password is ${password.join("")}`);
}
passGenerator(["ilovepizza", "ihatevegetables", "orange"]);

// 10. Triples of Latin Letters

// Write a program that receives a string of number n and print all triples of the first n small Latin letters, ordered alphabetically:
function triples(string) {
  let num = Number(string);
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      for (let k = 0; k < num; k++) {
        console.log(
          String.fromCharCode(97 + i) +
            String.fromCharCode(97 + j) +
            String.fromCharCode(97 + k)
        );
      }
    }
  }
}
triples("2");

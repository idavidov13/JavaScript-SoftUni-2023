// 9. Loading Bar

// You will receive a single number between 0 and 100, which is divided with 10 without residue (0, 10, 20, 30...).

// Your task is to create a function that visualizes a loading bar depending on the number you have received in the input.
function loadingBar(num) {
  if (num == 100) {
    console.log(`100% Complete`);
  } else {
    console.log(
      `${num}% [${Array(num / 10)
        .fill("%")
        .join("")}${Array(10 - num / 10)
        .fill(".")
        .join("")}]`
    );
    console.log(`Still loading...`);
  }
}
loadingBar(30);

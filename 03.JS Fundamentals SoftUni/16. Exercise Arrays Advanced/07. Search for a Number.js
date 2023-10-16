// 7.Search for a Number
// You will receive two arrays of integers. The second array is containing exactly three numbers.
// The first number represents the number of elements you have to take from the first array (starting from the first one).
// The second number represents the number of elements you have to delete from the numbers you took (starting from the first one).
// The third number is the number we search in our collection after the manipulations.
// As output print how many times that number occurs in our array in the following format:
// "Number {number} occurs {count} times."
function search(arr1, arr2) {
  let howManyNumsTake = arr2.shift();
  let howManyNumsDeleted = arr2.shift();
  let weAreSearchingFor = arr2.shift();
  let newArr = arr1.splice(0, howManyNumsTake);
  let finalArr = newArr.splice(
    howManyNumsDeleted,
    newArr.length - howManyNumsDeleted
  );
  let counter = 0;
  finalArr.forEach((element) => {
    if (element == weAreSearchingFor) {
      counter++;
    }
  });
  console.log(`Number ${weAreSearchingFor} occurs ${counter} times.`);
}
search([5, 2, 3, 4, 1, 6], [5, 2, 3]);

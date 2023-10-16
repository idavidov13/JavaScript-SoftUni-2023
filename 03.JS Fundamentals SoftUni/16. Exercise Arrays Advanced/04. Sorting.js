// 4. Sorting

// Write a function that sorts an array of numbers so that the first element is the biggest one, the second is the smallest one, the third is the second biggest one, and the fourth is the second smallest one, and so on.

// Print the elements on one row, separated by a single space.
function sort(arr) {
  let sortedArr = [];
  let arrForModification = [...arr];

  function findMax(arrForModification) {
    let max = arrForModification[0];
    for (let each of arrForModification) {
      if (max < each) {
        max = each;
      }
    }
    sortedArr.push(max);
    let index = arrForModification.indexOf(max);
    arrForModification.splice(index, 1);
  }

  function findMin(arrForModification) {
    let min = arrForModification[0];
    for (let each of arrForModification) {
      if (min > each) {
        min = each;
      }
    }
    sortedArr.push(min);
    let index = arrForModification.indexOf(min);
    arrForModification.splice(index, 1);
  }

  for (let each of arr) {
    if (sortedArr.length % 2 == 0) {
      findMax(arrForModification);
    } else {
      findMin(arrForModification);
    }
  }
  console.log(sortedArr.join(" "));
}
sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

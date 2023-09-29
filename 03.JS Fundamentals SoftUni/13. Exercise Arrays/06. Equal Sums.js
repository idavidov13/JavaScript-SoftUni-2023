// 6. Equal Sums

// Write a function that determines if there exists an element in the array of numbers such that the sum of the elements on its left is equal to the sum of the elements on its right.

// If there are NO elements to the left/right, their sum is 0.

// Print the index that satisfies the required condition or "no" if there is no such index.
function equal(arr) {
  let flag = true;
  if (arr.length == 1) {
    console.log("0");
  } else {
    for (let i = 0; i < arr.length; i++) {
      let sumLeft = 0;
      let sumRight = 0;
      for (let j = 0; j < arr.length; j++) {
        if (j < i) {
          sumLeft += Number(arr[j]);
        } else if (j > i) {
          sumRight += Number(arr[j]);
        }
      }
      if (sumLeft == sumRight && arr.length > 1) {
        console.log(i);
        flag = false;
        break;
      }
    }
    if (flag) {
      console.log("no");
    }
  }
}
equal([1, 2]);

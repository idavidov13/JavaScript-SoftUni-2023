// 2. Common Elements

// Write a function, which prints common elements in two string arrays. Print all matches on separate lines. Compare the first array with the second array.
function print(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        console.log(arr1[i]);
      }
    }
  }
}
print(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);

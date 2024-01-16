// 8. Sort an Array by 2 Criteria

// Write a function that orders a given array of strings, by a length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.

// The input comes as an array of strings.

// The output is the elements of the ordered array of strings, printed each on a new line.
function sort(arr) {
  arr.sort((a, b) => a.length - b.length);

  arr.sort((a, b) => (a.length == b.length ? a.localeCompare(b) : undefined));

  arr.forEach((element) => {
    console.log(element);
  });
}
sort(["Isacc", "Theodor", "Jack", "Harrison", "George"]);

// 2. Even or Odd

// You need to write unit tests for a function isOddOrEven() that checks whether the length of a passed string is even or odd.

// If the passed parameter is NOT a string return undefined. If the parameter is a string return either "even" or "odd" based on the length of the string.
// Hints

// We can see there are three outcomes for the function:

// · Returning undefined

// · Returning "even"

// · Returning "odd"

// Write one or two tests passing parameters that are NOT of type string to the function and expecting it to return undefined.

// After we have checked the validation it's time to check whether the function works correctly with valid arguments. Write a test for each of the cases:

// - One where we pass a string with even length;

// - And one where we pass a string with an odd length;

// Finally, make an extra test passing multiple different strings in a row to ensure the function works correctly.
import { assert } from "chai";
import { isOddOrEven } from "./02. Even Or Odd.js";

describe("isOddOrEven", () => {
  it("test with non string value", () => {
    assert.equal(
      isOddOrEven({ prop: "Pesho" }),
      undefined,
      "returned type must be undifined"
    );
    assert.equal(isOddOrEven(5), undefined, "returned type must be undifined");
    assert.isNotOk(isOddOrEven([]), "returned type must be undifined");
  });

  it("test with valid string value", () => {
    assert.equal(isOddOrEven("pesho"), "odd", "result is correct");
    assert.equal(isOddOrEven("Goshoo"), "even", "result is correct");
  });
});

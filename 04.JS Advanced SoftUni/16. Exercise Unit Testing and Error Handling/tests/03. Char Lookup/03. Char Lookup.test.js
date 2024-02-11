// 3. Char Lookup

// Write unit tests for a function that retrieves a character at a given index from a passed-in string.

// You are given a function named lookupChar(), which has the following functionality:

// · lookupChar(string, index) - accepts a string and an integer (the index of the char we want to lookup) :

// o If the first parameter is NOT a string or the second parameter is NOT a number - return undefined.

// o If both parameters are of the correct type but the value of the index is incorrect (bigger than or equal to the string length or a negative number) - return "Incorrect index".

// o If both parameters have correct types and values - return the character at the specified index in the string.
// Hints

// А good first step in testing a method is usually to determine all exit conditions. Reading through the specification or taking a look at the implementation we can easily determine 3 main exit conditions:

// · Returning undefined

// · Returning an "Incorrect index"

// · Returning the char at the specified index

// Now that we have our exit conditions we should start checking in what situations we can reach them. If any of the parameters are of incorrect type, undefined should be returned.

// If we take a closer look at the implementation, we see that the check uses Number.isInteger() instead of typeof(index === number) to check the index. While typeof would protect us from getting past an index that is a non-number, it won’t protect us from being passed a floating-point number. The specification says that the index needs to be an integer, since floating-point numbers won’t work as indexes.

// Moving on to the next exit condition - returning an "Incorrect index" if we get past an index that is a negative number or an index that is outside of the bounds of the string.

// For the last exit condition - returning a correct result. A simple check for the returned value will be enough. With these last two tests, we have covered the lookupChar() function.
import { assert } from "chai";
import { lookupChar } from "./03. Char Lookup.js";

describe("Unit Tests for lookupChar function", () => {
  it("checks inputs", () => {
    assert.equal(lookupChar("koko", "loko"), undefined, "returned undefined");
    assert.equal(lookupChar(5, 5), undefined, "returned undefined");
    assert.equal(lookupChar(5, "loko"), undefined, "returned undefined");
    assert.equal(lookupChar("koko", 2.5), undefined, "returned undefined");
  });

  it("checks output", () => {
    assert.equal(lookupChar("koko", 0), "k", "returned correct output");
    assert.equal(lookupChar("koko", 3), "o", "returned correct output");
    assert.equal(lookupChar("k!@#$%^&*()", 4), "$", "returned correct output");
  });

  it("checks the correctness of the index", () => {
    assert.equal(
      lookupChar("koko", -1),
      "Incorrect index",
      "returned correct output"
    );
    assert.equal(
      lookupChar("koko", 100),
      "Incorrect index",
      "returned correct output"
    );
    assert.equal(
      lookupChar("", 0),
      "Incorrect index",
      "returned correct output for empty string"
    );
  });
});

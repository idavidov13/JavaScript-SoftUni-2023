// 4. Math Enforcer

// Your task is to test an object named mathEnforcer, which should have the following functionality:

// · addFive(num) - A function that accepts a single parameter:

// o If the parameter is NOT a number, the function should return undefined.

// o If the parameter is a number, add 5 to it, and return the result.

// · subtractTen(num) - A function that accepts a single parameter:

// o If the parameter is NOT a number, the function should return undefined.

// o If the parameter is a number, subtract 10 from it, and return the result.

// · sum(num1, num2) - A function that accepts two parameters:

// o If any of the 2 parameters is NOT a number, the function should return undefined.

// o If both parameters are numbers, the function should return their sum.
import { assert } from "chai";
import { mathEnforcer } from "./04. Math Enforcer.js";

describe("test addFive functionality", () => {
  it("test with invalid value", () => {
    assert.isUndefined(
      mathEnforcer.addFive("pesho"),
      "returned value must be undefined"
    );
    assert.isUndefined(
      mathEnforcer.addFive([]),
      "returned value must be undefined"
    );
    describe("test addFive functionality", () => {
      it("test with invalid value", () => {
        assert.isUndefined(
          mathEnforcer.addFive("pesho"),
          "returned value must be undefined"
        );
        assert.isUndefined(
          mathEnforcer.addFive([]),
          "returned value must be undefined"
        );
        assert.isUndefined(
          mathEnforcer.addFive({}),
          "returned value must be undefined"
        );
        assert.isUndefined(
          mathEnforcer.addFive("5"),
          "returned value must be undefined"
        );
      });

      it("test with valid value", () => {
        assert.equal(mathEnforcer.addFive(5), 10, "returned value is correct");
        assert.equal(mathEnforcer.addFive(0), 5, "returned value is correct");
        assert.equal(mathEnforcer.addFive(-5), 0, "returned value is correct");
      });
    });

    describe("test subtractTen functionality", () => {
      it("test with invalid value", () => {
        assert.isUndefined(
          mathEnforcer.subtractTen("pesho"),
          "returned value must be undefined"
        );
        assert.isUndefined(
          mathEnforcer.subtractTen([]),
          "returned value must be undefined"
        );
        assert.isUndefined(
          mathEnforcer.subtractTen({}),
          "returned value must be undefined"
        );
        assert.isUndefined(
          mathEnforcer.subtractTen("10"),
          "returned value must be undefined"
        );
      });

      it("test with valid value", () => {
        assert.equal(
          mathEnforcer.subtractTen(20),
          10,
          "returned value is correct"
        );
        assert.equal(
          mathEnforcer.subtractTen(10),
          0,
          "returned value is correct"
        );
        assert.equal(
          mathEnforcer.subtractTen(0),
          -10,
          "returned value is correct"
        );
        assert.equal(
          mathEnforcer.subtractTen(-5),
          -15,
          "returned value is correct"
        );
      });

      describe("test sum functionality", () => {
        it("test with invalid value", () => {
          assert.isUndefined(
            mathEnforcer.sum("pesho", "gosho"),
            "returned value must be undefined"
          );
          assert.isUndefined(
            mathEnforcer.sum(5, "gosho"),
            "returned value must be undefined"
          );
          assert.isUndefined(
            mathEnforcer.sum("pesho", 5),
            "returned value must be undefined"
          );
          assert.isUndefined(
            mathEnforcer.sum([], []),
            "returned value must be undefined"
          );
          assert.isUndefined(
            mathEnforcer.sum({}, {}),
            "returned value must be undefined"
          );
        });

        it("test with valid value", () => {
          assert.equal(mathEnforcer.sum(0, 0), 0, "returned value is correct");
          assert.equal(mathEnforcer.sum(-5, 5), 0, "returned value is correct");
          assert.equal(
            mathEnforcer.sum(-5, 3),
            -2,
            "returned value is correct"
          );
          assert.equal(
            mathEnforcer.sum(-5, 10),
            5,
            "returned value is correct"
          );
          assert.equal(
            mathEnforcer.sum(-5, -10),
            -15,
            "returned value is correct"
          );
          assert.equal(
            mathEnforcer.sum(5, 10),
            15,
            "returned value is correct"
          );
        });
      });
    });
  });

  it("test with valid value", () => {
    assert.equal(mathEnforcer.addFive(5), 10, "returned value is correct");
    assert.equal(mathEnforcer.addFive(0), 5, "returned value is correct");
    assert.equal(mathEnforcer.addFive(-5), 0, "returned value is correct");
    assert.equal(mathEnforcer.addFive(5.5), 10.5, "returned value is correct");
  });
});

describe("test subtractTen functionality", () => {
  it("test with invalid value", () => {
    assert.isUndefined(
      mathEnforcer.subtractTen("pesho"),
      "returned value must be undefined"
    );
    assert.isUndefined(
      mathEnforcer.subtractTen([]),
      "returned value must be undefined"
    );
    assert.isUndefined(
      mathEnforcer.subtractTen({}),
      "returned value must be undefined"
    );
  });

  it("test with valid value", () => {
    assert.equal(mathEnforcer.subtractTen(20), 10, "returned value is correct");
    assert.equal(mathEnforcer.subtractTen(10), 0, "returned value is correct");
    assert.equal(mathEnforcer.subtractTen(0), -10, "returned value is correct");
    assert.equal(
      mathEnforcer.subtractTen(-5),
      -15,
      "returned value is correct"
    );
    assert.equal(
      mathEnforcer.subtractTen(-5.5),
      -15.5,
      "returned value is correct"
    );
  });

  describe("test sum functionality", () => {
    it("test with invalid value", () => {
      assert.isUndefined(
        mathEnforcer.sum("pesho", "gosho"),
        "returned value must be undefined"
      );
      assert.isUndefined(
        mathEnforcer.sum(5, "gosho"),
        "returned value must be undefined"
      );
      assert.isUndefined(
        mathEnforcer.sum("pesho", 5),
        "returned value must be undefined"
      );
      assert.isUndefined(
        mathEnforcer.sum([], []),
        "returned value must be undefined"
      );
      assert.isUndefined(
        mathEnforcer.sum({}, {}),
        "returned value must be undefined"
      );
      assert.isUndefined(
        mathEnforcer.sum("5", "10"),
        "returned value must be undefined"
      );
    });

    it("test with valid value", () => {
      assert.equal(mathEnforcer.sum(0, 0), 0, "returned value is correct");
      assert.equal(mathEnforcer.sum(-5, 5), 0, "returned value is correct");
      assert.equal(mathEnforcer.sum(-5, 3), -2, "returned value is correct");
      assert.equal(mathEnforcer.sum(-5, 10), 5, "returned value is correct");
      assert.equal(mathEnforcer.sum(-5, -10), -15, "returned value is correct");
      assert.equal(mathEnforcer.sum(5, 10), 15, "returned value is correct");
      assert.equal(
        mathEnforcer.sum(5.5, 10.5),
        16,
        "returned value is correct"
      );
      assert.equal(
        mathEnforcer.sum(5, 10.5),
        15.5,
        "returned value is correct"
      );
      assert.equal(
        mathEnforcer.sum(5.5, 10),
        15.5,
        "returned value is correct"
      );
      assert.equal(
        mathEnforcer.sum(-5.5, 10),
        4.5,
        "returned value is correct"
      );
      assert.equal(
        mathEnforcer.sum(-5.5, 5),
        -0.5,
        "returned value is correct"
      );
    });
  });
});

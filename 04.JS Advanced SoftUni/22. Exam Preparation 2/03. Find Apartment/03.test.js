import { assert } from "chai";
import { findNewApartment } from "./findApartment.js";
////////////////////////////////
/////////MAIN DESCRIBE//////////
////////////////////////////////
describe("wtf", function () {
  ////////////////////////////////
  //////SECONDARY DESCRIBE////////
  ////////////////////////////////
  describe("isGoodLocation", function () {
    ////////////IT/////////////////
    /*__________________________*/
    it("test with invalid parameters", () => {
      assert.throw(() => findNewApartment.isGoodLocation(6, "pesho"));
      assert.throw(() => findNewApartment.isGoodLocation("pesho", "pesho"));
      assert.throw(() => findNewApartment.isGoodLocation(6, true));
    });
    ///////////////////////////
    it("test with invalid city", () => {
      assert.equal(
        findNewApartment.isGoodLocation("shumen", true),
        "This location is not suitable for you."
      );
      assert.equal(
        findNewApartment.isGoodLocation("shumen", false),
        "This location is not suitable for you."
      );
    });
    ///////////////////////////
    it("test with invalid value", () => {
      assert.equal(
        findNewApartment.isGoodLocation("Sofia", false),
        "There is no public transport in area."
      );
    });
    ///////////////////////////
    it("test with valid data", () => {
      assert.equal(
        findNewApartment.isGoodLocation("Sofia", true),
        "You can go on home tour!"
      );
      assert.equal(
        findNewApartment.isGoodLocation("Plovdiv", true),
        "You can go on home tour!"
      );
      assert.equal(
        findNewApartment.isGoodLocation("Varna", true),
        "You can go on home tour!"
      );
    });
    ///////////////////////////
  });
  /////////////////////////////
  /////////////////////////////
  describe("isLargeEnough", function () {
    ///////////////////////////
    it("test with invalid parameters", () => {
      assert.throw(() => findNewApartment.isLargeEnough("pesho", "pesho"));
      assert.throw(() => findNewApartment.isLargeEnough([], "pesho"));
      assert.throw(() =>
        findNewApartment.isLargeEnough(["pesho", "gosho"], "pesho")
      );
      assert.throw(() => findNewApartment.isLargeEnough([], 6));
      assert.throw(() => findNewApartment.isLargeEnough("koko", 6));
      assert.throw(() => findNewApartment.isLargeEnough([30, 40, 60], "koko"));
      assert.throw(() => findNewApartment.isLargeEnough([30, 40, 60], "60"));
    });
    ///////////////////////////
    it("test with valid values", () => {
      let res = [10, 20, 30];
      assert.equal(
        findNewApartment.isLargeEnough([1, 2, 10, 20, 30], 9),
        res.join(", ")
      );
      assert.equal(
        findNewApartment.isLargeEnough([1, 2, 10, 20, 30], 10),
        res.join(", ")
      );
      assert.equal(findNewApartment.isLargeEnough([1, 2, 10, 20, 30], 50), "");
    });
    /////////////////////////////
  });
  /////////////////////////////
  /////////////////////////////
  describe("isItAffordable", function () {
    ///////////////////////////
    it("test with invalid parameters", () => {
      assert.throw(() => findNewApartment.isItAffordable("pesho", "pesho"));
      assert.throw(() => findNewApartment.isItAffordable(0, 0));
      assert.throw(() => findNewApartment.isItAffordable(-10, -10));
      assert.throw(() => findNewApartment.isItAffordable(10, "pesho"));
      assert.throw(() => findNewApartment.isItAffordable(10, 0));
      assert.throw(() => findNewApartment.isItAffordable(10, -10));
      assert.throw(() => findNewApartment.isItAffordable("pesho", 10));
      assert.throw(() => findNewApartment.isItAffordable(0, 10));
      assert.throw(() => findNewApartment.isItAffordable(-10, 10));
    });
    ///////////////////////////
    it("return value is 0", () => {
      assert.equal(
        findNewApartment.isItAffordable(10, 9),
        "You don't have enough money for this house!"
      );
      assert.equal(
        findNewApartment.isItAffordable(10, 1),
        "You don't have enough money for this house!"
      );
    });
    ///////////////////////////
    it("return value is positive", () => {
      assert.equal(
        findNewApartment.isItAffordable(10, 20),
        "You can afford this home!"
      );
      assert.equal(
        findNewApartment.isItAffordable(1, 1),
        "You can afford this home!"
      );
    });
    ///////////////////////////
  });
});

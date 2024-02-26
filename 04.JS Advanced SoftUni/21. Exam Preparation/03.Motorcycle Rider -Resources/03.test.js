import { expect } from "chai";
import { motorcycleRider } from "./Motorcycle Rider.js";

describe("Test suite", function () {
  //
  describe("licenseRestriction functionality", function () {
    it("returns correct output", () => {
      expect(motorcycleRider.licenseRestriction("AM")).to.equal(
        "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16."
      );
    });

    it("returns correct output", () => {
      expect(motorcycleRider.licenseRestriction("A1")).to.equal(
        "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16."
      );
    });

    it("returns correct output", () => {
      expect(motorcycleRider.licenseRestriction("A2")).to.equal(
        "Motorcycles with maximum power of 35KW. and the minimum age is 18."
      );
    });

    it("returns correct output", () => {
      expect(motorcycleRider.licenseRestriction("A")).to.equal(
        "No motorcycle restrictions, and the minimum age is 24."
      );
    });

    it("returns error invalid string", () => {
      expect(() => motorcycleRider.licenseRestriction("Z")).to.throw();
    });

    it("returns error number", () => {
      expect(() => motorcycleRider.licenseRestriction("13")).to.throw();
    });
  });
  //
  describe("motorcycleShowroom functionality", function () {
    it("returns 1 element from array", () => {
      expect(motorcycleRider.motorcycleShowroom(["50"], 50)).to.equal(
        `There are 1 available motorcycles matching your criteria!`
      );
    });

    it("returns all element from array", () => {
      expect(motorcycleRider.motorcycleShowroom(["50", "51"], 100)).to.equal(
        `There are 2 available motorcycles matching your criteria!`
      );
    });

    it("returns only matching element from array", () => {
      expect(motorcycleRider.motorcycleShowroom(["50", "51"], 50)).to.equal(
        `There are 1 available motorcycles matching your criteria!`
      );
    });

    it("throws for non-array", () => {
      expect(() => motorcycleRider.motorcycleShowroom("50", 50)).to.throw();
    });

    it("throws for non-array", () => {
      expect(() => motorcycleRider.motorcycleShowroom(["50"], "50")).to.throw();
    });
  });

  describe("otherSpendings functionality", function () {
    it("returns returns correct sum without discount", () => {
      expect(
        motorcycleRider.otherSpendings(
          ["helmet", "jacked"],
          ["engine oil", "oil filter"],
          false
        )
      ).to.equal(`You spend $600.00 for equipment and consumables!`);
    });

    it("returns returns correct sum with discount", () => {
      expect(
        motorcycleRider.otherSpendings(
          ["helmet", "jacked"],
          ["engine oil", "oil filter"],
          true
        )
      ).to.equal(
        `You spend $540.00 for equipment and consumables with 10% discount!`
      );
    });

    it("throws for non-array equipment", () => {
      expect(() =>
        motorcycleRider.otherSpendings(
          "helmet",
          ["engine oil", "oil filter"],
          false
        )
      ).to.throw();
    });

    it("throws for non-array consumables", () => {
      expect(() =>
        motorcycleRider.otherSpendings(["helmet"], "engine oil", false)
      ).to.throw();
    });

    it("throws for non-boolean discount", () => {
      expect(() =>
        motorcycleRider.otherSpendings(
          ["helmet", "jacked"],
          ["engine oil", "oil filter"],
          "yes"
        )
      ).to.throw();
    });
  });
  //
});

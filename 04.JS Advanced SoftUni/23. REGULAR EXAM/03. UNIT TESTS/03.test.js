import { expect } from "chai";
import { planYourTrip } from "./planYourTrip.js";
////////////////////////////////
/////////MAIN DESCRIBE//////////
////////////////////////////////
describe("Unit Testing", function () {
  ////////////////////////////////
  //////SECONDARY DESCRIBE////////
  ////////////////////////////////
  describe("•	choosingDestination", function () {
    ////////////IT/////////////////
    /*__________________________*/
    it("Invalid Year", () => {
      expect(() =>
        planYourTrip.choosingDestination("string", "string", "string")
      ).to.throw();
      expect(() =>
        planYourTrip.choosingDestination("string", "string", [])
      ).to.throw();
      expect(() =>
        planYourTrip.choosingDestination("string", "string", {})
      ).to.throw();
      expect(() =>
        planYourTrip.choosingDestination("string", "string", 0)
      ).to.throw();
      expect(() =>
        planYourTrip.choosingDestination("string", "string", 2023)
      ).to.throw();
      expect(() =>
        planYourTrip.choosingDestination("string", "string", 2024)
      ).to.throw();
    });
    ////////////IT/////////////////
    /*__________________________*/
    it("Invalid destination", () => {
      expect(() =>
        planYourTrip.choosingDestination("string", "string", 2024)
      ).to.throw();
      expect(() =>
        planYourTrip.choosingDestination("string", 2, 2024)
      ).to.throw();
      expect(() =>
        planYourTrip.choosingDestination("string", [], 2024)
      ).to.throw();
      expect(() =>
        planYourTrip.choosingDestination("string", {}, 2024)
      ).to.throw();
    });
    ////////////IT/////////////////
    /*__________________________*/
    it("Invalid season", () => {
      expect(
        planYourTrip.choosingDestination("Ski Resort", "string", 2024)
      ).to.equal(
        `Consider visiting during the Winter for the best experience at the Ski Resort.`
      );
    });
    it("Valid season", () => {
      expect(
        planYourTrip.choosingDestination("Ski Resort", "Winter", 2024)
      ).to.equal(
        `Great choice! The Winter is the perfect time to visit the Ski Resort.`
      );
    });
  });
  ////////////////////////////////
  //////SECONDARY DESCRIBE////////
  ////////////////////////////////
  describe("•	exploreOptions", function () {
    ////////////IT/////////////////
    /*__________________________*/
    it("Invalid Inputs", () => {
      expect(() => planYourTrip.exploreOptions("string", "string")).to.throw();
      expect(() => planYourTrip.exploreOptions({}, "string")).to.throw();
      expect(() => planYourTrip.exploreOptions([], 0)).to.throw();
      expect(() =>
        planYourTrip.exploreOptions(
          ["Skiing ", "Snowboarding ", "Winter Hiking"],
          -1
        )
      ).to.throw();
      expect(() =>
        planYourTrip.exploreOptions(
          ["Skiing ", "Snowboarding ", "Winter Hiking"],
          4
        )
      ).to.throw();
      expect(() =>
        planYourTrip.exploreOptions(
          ["Skiing ", "Snowboarding ", "Winter Hiking"],
          []
        )
      ).to.throw();
    });
    ////////////IT/////////////////
    /*__________________________*/
    it("Valid data", () => {
      expect(
        planYourTrip.exploreOptions(
          ["Skiing", "Snowboarding", "Winter Hiking"],
          0
        )
      ).to.equal("Snowboarding, Winter Hiking");
      expect(
        planYourTrip.exploreOptions(
          ["Skiing", "Snowboarding", "Winter Hiking"],
          1
        )
      ).to.equal("Skiing, Winter Hiking");
      expect(
        planYourTrip.exploreOptions(
          ["Skiing", "Snowboarding", "Winter Hiking"],
          2
        )
      ).to.equal("Skiing, Snowboarding");
    });
  });
  ////////////////////////////////
  //////TERTIARY DESCRIBE////////
  ////////////////////////////////
  describe("•	estimateExpenses", function () {
    ////////////IT/////////////////
    /*__________________________*/
    it("Invalid Data", () => {
      expect(() =>
        planYourTrip.estimateExpenses("string", "string")
      ).to.throw();
      expect(() => planYourTrip.estimateExpenses(1, "string")).to.throw();
      expect(() => planYourTrip.estimateExpenses("string", 1)).to.throw();
      expect(() => planYourTrip.estimateExpenses(0, 1)).to.throw();
      expect(() => planYourTrip.estimateExpenses(-10, 1)).to.throw();
      expect(() => planYourTrip.estimateExpenses(10, -1)).to.throw();
      expect(() => planYourTrip.estimateExpenses(10, 0)).to.throw();
      expect(() => planYourTrip.estimateExpenses([], {})).to.throw();
      expect(() => planYourTrip.estimateExpenses(null, 2)).to.throw();
      expect(() => planYourTrip.estimateExpenses(undefined, 2)).to.throw();
      expect(() => planYourTrip.estimateExpenses(10, null)).to.throw();
      expect(() => planYourTrip.estimateExpenses(10, undefined)).to.throw();
    });
    ////////////IT/////////////////
    /*__________________________*/
    it("Check Calculation", () => {
      expect(planYourTrip.estimateExpenses(10, 2)).to.equal(
        "The trip is budget-friendly, estimated cost is $20.00."
      );
      expect(planYourTrip.estimateExpenses(250, 2)).to.equal(
        "The trip is budget-friendly, estimated cost is $500.00."
      );
      expect(planYourTrip.estimateExpenses(251, 2)).to.equal(
        "The estimated cost for the trip is $502.00, plan accordingly."
      );
      expect(planYourTrip.estimateExpenses(251.2, 2)).to.equal(
        "The estimated cost for the trip is $502.40, plan accordingly."
      );
      expect(planYourTrip.estimateExpenses(100, 2.5)).to.equal(
        "The trip is budget-friendly, estimated cost is $250.00."
      );
    });
  });
  ////////////////////////////////
  ////////////THE END///////////
  ////////////////////////////////
});

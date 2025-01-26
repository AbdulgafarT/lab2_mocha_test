import { add, sub, mul, div } from "../calculator.js"; // Import functions from calculator.js
import { expect } from "chai";

describe("Calculator Tests", () => {
  // Test cases for addition
  describe("Addition Tests", () => {
    it("should return 7 for add(5, 2)", () => {
      expect(add(5, 2)).to.equal(7); // PASS
    });

    it("should return 8 for add(5, 2)", () => {
      expect(add(5, 2)).to.equal(8); // FAIL
    });
  });

  // Test cases for subtraction
  describe("Subtraction Tests", () => {
    it("should return 3 for sub(5, 2)", () => {
      expect(sub(5, 2)).to.equal(3); // PASS
    });

    it("should return 5 for sub(5, 2)", () => {
      expect(sub(5, 2)).to.equal(5); // FAIL
    });
  });

  // Test cases for multiplication
  describe("Multiplication Tests", () => {
    it("should return 10 for mul(5, 2)", () => {
      expect(mul(5, 2)).to.equal(10); // PASS
    });

    it("should return 12 for mul(5, 2)", () => {
      expect(mul(5, 2)).to.equal(12); // FAIL
    });
  });

  // Test cases for division
  describe("Division Tests", () => {
    it("should return 5 for div(10, 2)", () => {
      expect(div(10, 2)).to.equal(5); // PASS
    });

    it("should return 2 for div(10, 2)", () => {
      expect(div(10, 2)).to.equal(2); // FAIL
    });
  });
});

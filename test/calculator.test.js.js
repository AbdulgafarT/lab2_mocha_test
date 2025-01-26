import { expect } from "chai";

// Example Calculator Functions
export function add(a, b) {
    return a + b;
}

describe("Calculator Tests", () => {
    it("should return 7 for add(5, 2)", () => {
        expect(add(5, 2)).to.equal(7); // PASS
    });

    it("should return 8 for add(5, 2)", () => {
        expect(add(5, 2)).to.equal(8); // FAIL
    });
});

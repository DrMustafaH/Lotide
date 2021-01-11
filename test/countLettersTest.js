const assert = require('chai').assert;
const countLetters = require("../countLetters");

describe("#countLetters", () => {
  it("returns 1 for test1.H", () => {
    assert.strictEqual(test1.H, 1);
  });
  it("returns 2 for test1['L']", () => {
    assert.strictEqual(test1["L"], 2);
  });
  it("returns 4 for test2['o']", () => {
    assert.strictEqual(test2["o"], 4);
  });
  it("returns 2 for test2.a", () => {
    assert.strictEqual(test2.a, 2);
  });
  it("returns undefined for test2[' ']", () => {
    assert.strictEqual(test2[" "], undefined);
  });
});
// Test Code
const test1 = countLetters("LHL");
const test2 = countLetters("This is our third day of bootcamp");

const assert = require('chai').assert;
const without = require("../without");

describe("#takeUntil", () => {
  it("returns ['hello', 'world', 'lighthouse'] for words", () => {
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
  it("returns [2, 3] for without([1, 2, 3], [1])", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("returns ['1', '2'] for without(['1', '2', '3'], [1, 2, '3'])", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it("returns ['2', '1'] for without(['3', '2', '1'], [1, 2, '3'])", () => {
    assert.deepEqual(without(["3", "2", "1"], [1, 2, "3"]), ["2", "1"]);
  });
});

// Code to test if original array is mutated
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
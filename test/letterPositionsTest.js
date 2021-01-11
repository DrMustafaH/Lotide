const assert = require('chai').assert;
const letterPositions = require("../letterPositions");


describe("#letterPositions", () => {
  it("returns [0] for test1.h", () => {
    assert.deepEqual(test1.h, [0]);
  });
  it("returns [1] for test1.e", () => {
    assert.deepEqual(test1.e, [1]);
  });
  it("returns [2, 3] for test1['l']", () => {
    assert.deepEqual(test1["l"], [2, 3]);
  });
  it("returns [4] for test1['o']", () => {
    assert.deepEqual(test1["o"], [4]);
  });
  it("returns [0] for test2.h", () => {
    assert.deepEqual(test2.h, [0]);
  });
  it("returns [2] for test2.e", () => {
    assert.deepEqual(test2.e, [2]);
  });
  it("returns [4, 6] for test2['l']", () => {
    assert.deepEqual(test2["l"], [4, 6]);
  });
  it("returns [8] for test2['o']", () => {
    assert.deepEqual(test2["o"], [8]);
  });
  it("returns undefined for test2[' ']", () => {
    assert.strictEqual(test2[" "], undefined);
  });
});

// Test Code
const test1 = letterPositions("hello")
const test2 = letterPositions("h e l l o")
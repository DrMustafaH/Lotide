const assert = require('chai').assert;
const map = require("../map");

describe("#map", () => {
  it("returns ['g', 'c', 't', 'm', 't'] for results1", () => {
    assert.deepEqual(results1, ['g', 'c', 't', 'm', 't']);
  });

});

// Test Code
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const assert = require('chai').assert;
const tail = require('../tail');

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// console.log(tail(words));
// console.log(tail(["hello"]));
// console.log(tail([]));

describe("#tail", () => {
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
  it("returns [] for ['hello']", () => {
    assert.deepEqual(tail(['hello']), []);
  });
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
});
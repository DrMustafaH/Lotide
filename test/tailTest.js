const assert = require('chai').assert;
const tail = require('../tail');

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
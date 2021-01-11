const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  it("returns 'noma' for result)", () => {
    assert.strictEqual(result, "noma");
  });
  it("returns undefined for result1)", () => {
    assert.strictEqual(result1, undefined);
  });
});
// Test code
let result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2);

let result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 10);
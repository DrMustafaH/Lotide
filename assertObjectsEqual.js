const eqObjects = require("./eqObjects");
// function that takes is 2 objects and compare then using eqObjects function and output an assertion sentence
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  eqObjects(actual, expected) ? console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;
const eqArrays = require("./eqArrays");
// function that takes is 2 arrays and compare then using eqArrays function and output an assertion sentence
const assertArraysEqual = function (actual, expected) {
  eqArrays(actual, expected) ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
}

module.exports = assertArraysEqual;
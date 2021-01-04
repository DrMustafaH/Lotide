// Function that takes an actual input and compare it to an expected output and returns
const assertEqual = function (actual, expected) {
  // a ternary operator to check assertion and return strings if passed or failed situations
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// function that takes an argument/input (array) and outputs the 1st element of the array
const head = function (inputArr) {
  // return statment that return the 1st element of the array
  return inputArr[0];
}

// Test Code
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
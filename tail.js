// function that takes an actual input and compare it to an expected output and returns
const assertEqual = function (actual, expected) {
  // a ternary operator to check assertion and return strings if passed or failed situations
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// function that takes in an input array and returns the array except the first element without mutating the original array
const tail = function (inputArr) {
  // return statement using slice as it does not mutate the array and just returns the array without 1st element
  return inputArr.slice(1);
};


// Test code
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log(tail(words));
console.log(tail(["hello"]));
console.log(tail([]));
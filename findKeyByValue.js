// Function that takes an actual input and compare it to an expected output and returns
const assertEqual = function (actual, expected) {
  // a ternary operator to check assertion and return strings if passed or failed situations
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// A function that takes in an object and a value and its scans the object and return the first key which contains the given value. If no key with that given value is found, it returns undefined.
const findKeyByValue = function (inputObj, valueToCheck) {
  // for in loop over the inputObj to access the key and values
  for (const key in inputObj) {
    const value = inputObj[key];
    // condition statement to check if the value is equal to given valueToCheck then it returns the key as soon found and leave the loop, if not found it will automatically return undefiend
    if (value === valueToCheck) return key;
  }
}

// Test code
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
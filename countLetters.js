// Function that takes an actual input and compare it to an expected output and returns
const assertEqual = function (actual, expected) {
  // a ternary operator to check assertion and return strings if passed or failed situations
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// a function that takes in a sentence (string) and then return a count of each of the letters in that sentence as an object
const countLetters = function (inputStr) {
  // remove white space from string
  let noSpaceStr = inputStr.split(' ').join('');
  // create object variable to repopulate
  let outputObj = {};
  // for of loop over the string to access each letter
  for (const letter of noSpaceStr) {
    // condition statement to check if the outputObj has the key already or not, if does it will just add 1 to the value if not it will create it and put a value of 1 to it.
    outputObj[letter] ? outputObj[letter]++ : outputObj[letter] = 1;
  }
  // return the outputObj
  return outputObj;
}


// Test Code
const test1 = countLetters("LHL")
const test2 = countLetters("This is our third day of bootcamp")

assertEqual(test1.H, 1)
assertEqual(test1["L"], 2)
assertEqual(test2["o"], 4)
assertEqual(test2.a, 2)
assertEqual(test2[" "], undefined)

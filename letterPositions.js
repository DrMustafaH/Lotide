// function that takes in 2 arrays and compares them to return a boolean results if they are equal/unequal
const eqArrays = function (arr1, arr2) {
  // a variable created to help in the compare process
  let isItEqual = true;
  // variable of longerArr created to find the longer array from the 2 provided to be the main one to compare to
  let longerArr = arr1
  // condition statement to compare array lengths and decide which one will be in the longerArr variable
  arr1.length > arr2.length === true ? longerArr = arr1 : longerArr = arr2;
  // loop over the 2 arrays to get their elements
  for (let i = 0; i < longerArr.length; i++) {
    const e1 = arr1[i];
    const e2 = arr2[i];
    // changing the isItEqual variable according to the comparison output (true/false)
    isItEqual = e1 === e2;
  }
  // return the isItEqual variable
  return isItEqual;
};

// function that takes is 2 arrays and compare then using eqArrays function and output an assertion sentence
const assertArraysEqual = function (actual, expected) {
  eqArrays(actual, expected) ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
}


// A function that takes in a string and return all the indices (zero-based positions) in the string where each character is found as a object.
const letterPositions = function (inputStr) {
  // create object variable to repopulate
  const outputObj = {};
  // for loop over the string to access each letter and have it's index number
  for (let i = 0; i < inputStr.length; i++) {
    const letter = inputStr[i];
    // condition statement if the outputObj does NOT have the key of letter it will add it will an empty array value
    if (!outputObj[letter]) outputObj[letter] = [];
    // a condition statement if the outputObj has the key of letter it will push the index to the array value
    if (outputObj[letter]) outputObj[letter].push(i);
  }
  // a condition statement if a key of white space is there then it gets deleted
  if (outputObj[" "]) delete outputObj[" "];
  // return the outputObj
  return outputObj;
};

// Test Code
const test1 = letterPositions("hello")
assertArraysEqual(test1.h, [0]);
assertArraysEqual(test1.e, [1]);
assertArraysEqual(test1["l"], [2, 3]);
assertArraysEqual(test1["o"], [4]);

const test2 = letterPositions("h e l l o")
assertArraysEqual(test2.h, [0]);
assertArraysEqual(test2.e, [2]);
assertArraysEqual(test2["l"], [4, 6]);
assertArraysEqual(test2["o"], [8]);
console.log(test2[" "]); // should print undefined

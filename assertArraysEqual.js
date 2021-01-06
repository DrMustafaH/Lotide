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


// Test Code
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // FAIL
assertArraysEqual([1, 2, 3], [1, 2, 3]); // PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]); // FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // PASS
assertArraysEqual([1, 2, 3], [1, 2, 3]); // PASS
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // FAIL
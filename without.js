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

// function that takes in a source array and a itemsToRemove array and returns a new array with only those elements from source that are not present in the itemsToRemove
const without = function (source, itemsToRemove) {
  // new array variable to repopulate the not present elements
  let result = [...source]
  // a loop over the itemsToRemove array to access the elements
  for (let i = 0; i < itemsToRemove.length; i++) {
    const e2 = itemsToRemove[i];
    // get the index of the e2 in the result array if found it will give the index if not found it will give -1
    const indexFound = result.indexOf(e2);
    // condition statement that if the element is found in result is found (not -1 index) it will remove it from the result array
    if (indexFound >= 0) {
      result.splice(indexFound, 1);
    }
  }
  // return the new array created
  return result;
}



// Code to test if original array is mutated
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// Test Code
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // PASS
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // PASS
assertArraysEqual(without(["3", "2", "1"], [1, 2, "3"]), ["2", "1"]); // PASS
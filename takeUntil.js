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

// A function that take in an array and callback will return a "slice of the array with elements taken from the beginning." It should keep going until the callback returns a truthy value.
const takeUntil = function (array, callback) {
  // an empty array to repopulate wanted elements
  let outputArr = [];
  // start the iteration from index 0
  let i = 0;
  // while loop which will implement as long as the callback return false and as soon as callback is truthy it will break out of loop
  while (!callback(array[i])) {
    // pushing the elements which passed the false callback test to the outputArr
    outputArr.push(array[i]);
    i++;
  }
  // return the outputArr
  return outputArr;
}

// Test Code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);
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

// a function that takes in an array and return the middle-most element(s) of the given array.
const middle = function (inputArr) {
  // a middleElement array to be repopulated by the function
  let middleElement = [];
  // putting the input array length in a variable to decrease system loops everytime over the array
  let inputArrLength = inputArr.length;
  // putting middle index as variable for easier access
  let middleIndex = inputArrLength / 2;
  // condition statement if array length is 2 or less just return an empty array
  if (inputArrLength <= 2) {
    return middleElement;
  } else {
    // condition statement to check is array length is odd number
    if (inputArrLength % 2 !== 0) {
      // if odd it will push the middle element to the middleElement variable using the middleIndex variable and math floor to round it to the element wanted
      middleElement.push(inputArr[Math.floor(middleIndex)]);
    } else {
      // if even it will push 2 elements in the middle
      middleElement.push(inputArr[middleIndex - 1], inputArr[middleIndex]);
    }
  }
  // return statment to return the created middleElement array
  return middleElement;
}


// Test Code
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

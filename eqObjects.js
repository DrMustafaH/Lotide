// Function that takes an actual input and compare it to an expected output and returns
const assertEqual = function (actual, expected) {
  // a ternary operator to check assertion and return strings if passed or failed situations
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};
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

// a function that will take in two objects and returns true or false, based on a perfect match.
const eqObjects = function (object1, object2) {
  // a variable created to help in outputing the compare result
  let isItEqual = true;
  // a conditional statement to know if the object keys are not of the same count it will return false and not continue further
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  // a for in loop over the 2 objects to obtain the values to compare them
  for (const key in object1) {
    const value1 = object1[key];
    const value2 = object2[key];
    // if both values are found to be arrays they will undergo the eqArrays testing and return the result
    if (Array.isArray(value1) && Array.isArray(value2)) {
      return eqArrays(value1, value2);
      // if the values are found to be not arrays they will go through the next else statment
    } else {
      // condition statment to compare if values are equal and change to isItEqual variable accordingly
      value1 === value2 ? isItEqual = true : isItEqual = false;
    }
  }
  // return the final isITEqual variable
  return isItEqual;
};


// Test Code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
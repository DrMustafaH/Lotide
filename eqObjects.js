const eqArrays = require('./eqArrays');
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

module.exports = eqObjects;
// A function that takes in an object and a value and its scans the object and return the first key which contains the given value. If no key with that given value is found, it returns undefined.
const findKeyByValue = function (inputObj, valueToCheck) {
  // for in loop over the inputObj to access the key and values
  for (const key in inputObj) {
    const value = inputObj[key];
    // condition statement to check if the value is equal to given valueToCheck then it returns the key as soon found and leave the loop, if not found it will automatically return undefiend
    if (value === valueToCheck) return key;
  }
}

module.exports = findKeyByValue;
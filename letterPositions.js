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

module.exports = letterPositions;
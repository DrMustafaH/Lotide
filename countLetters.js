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

module.exports = countLetters;
// a funtion that takes an array (allItems) and an object (itemsToCount) and will return an object containing counts of everything that the input object listed.
const countOnly = function (allItems, itemsToCount) {
  // create a variable of empty object to repopulate
  const outputObj = {};
  // for of loop over the allItems array
  for (const item of allItems) {
    // condition statement to check if the item is mentioned in the itemsToCount obj
    if (itemsToCount[item]) {
      // condition statement to check if the outputObj has the key already or not, if does it will just add 1 if not it will create it and put a value of 1 to it.
      outputObj[item] ? outputObj[item]++ : outputObj[item] = 1;
    }
  }
  // return the outputObj variable
  return outputObj;
}

module.exports = countOnly;
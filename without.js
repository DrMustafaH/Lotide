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

module.exports = without;
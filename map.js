// creating a map function which takes an array and callback function to create a new array with elements decided by the callback provided
const map = function (array, callback) {
  // an empty array to repopulate
  const results = [];
  // a for of loop over the array to access each item
  for (let item of array) {
    // the callback function is called on the item to manupulate it and push it to the resutls array
    results.push(callback(item));
  }
  // return the results array
  return results;
}

module.exports = map;
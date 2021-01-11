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

module.exports = takeUntil;
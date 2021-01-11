// function that takes in an input array and returns the array except the first element without mutating the original array
const tail = function (inputArr) {
  // return statement using slice as it does not mutate the array and just returns the array without 1st element
  return inputArr.slice(1);
};

module.exports = tail;
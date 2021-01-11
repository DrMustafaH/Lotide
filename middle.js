// a function that takes in an array and return the middle-most element(s) of the given array.
const middle = function (inputArr) {
  // a middleElement array to be repopulated by the function
  let middleElement = [];
  // putting the input array length in a variable to decrease system loops everytime over the array
  let inputArrLength = inputArr.length;
  // putting middle index as variable for easier access
  let middleIndex = inputArrLength / 2;
  // condition statement if array length is 2 or less just return an empty array
  if (inputArrLength <= 2) {
    return middleElement;
  } else {
    // condition statement to check is array length is odd number
    if (inputArrLength % 2 !== 0) {
      // if odd it will push the middle element to the middleElement variable using the middleIndex variable and math floor to round it to the element wanted
      middleElement.push(inputArr[Math.floor(middleIndex)]);
    } else {
      // if even it will push 2 elements in the middle
      middleElement.push(inputArr[middleIndex - 1], inputArr[middleIndex]);
    }
  }
  // return statment to return the created middleElement array
  return middleElement;
}

module.exports = middle;
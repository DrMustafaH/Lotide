// A function that takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
const flatten = function (nestedArr) {
  let outputArr = [];
  // forEach loop over the main array to access the elements and the nested array
  nestedArr.forEach(e => {
    // if the the element is a nested array if will loop over it again and push the elements
    if (Array.isArray(e)) {
      e.forEach(subE => {
        outputArr.push(subE);
      });
      // else statement if the element is not an array it will just push it
    } else {
      outputArr.push(e);
    }
  });
  // return statement to return the outputArr
  return outputArr;
}

module.exports = flatten;
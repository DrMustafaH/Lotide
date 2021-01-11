// a function that takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
const findKey = function (planetsObj, callback) {
  // a for in loop to access the star count object
  for (const planet in planetsObj) {
    const starCountObj = planetsObj[planet];
    // condition statment to use the callback function and check if truthy if it passes it will return the key (planet)
    if (callback(starCountObj)) {
      return planet;
    }
  }
};

module.exports = findKey;
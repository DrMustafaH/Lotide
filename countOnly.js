// Function that takes an actual input and compare it to an expected output and returns
const assertEqual = function (actual, expected) {
  // a ternary operator to check assertion and return strings if passed or failed situations
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

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

// Test Code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
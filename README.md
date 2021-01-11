# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @drmustafa/lotide`

**Require it:**

`const _ = require('@drmustafa/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `asserEqual(actual, expected)`: A function that takes an actual input and compare it to an expected output and returns.
* `head(inputArr)`: A function that takes an argument/input (array) and outputs the 1st element of the array.
* `tail(inputArr)`: A function that takes in an input array and returns the array except the first element without mutating the original array.
* `eqArrays(arr1, arr2)`: A function that takes in 2 arrays and compares them to return a boolean results if they are equal/unequal.
* `assertArraysEqual(actual, expected)`: A function that takes is 2 arrays and compare then using eqArrays function and output an assertion sentence.
* `without(source, itemsToRemove)`: A function that takes in a source array and a itemsToRemove array and returns a new array with only those elements from source that are not present in the itemsToRemove.
* `middle(inputArr)`: A function that takes in an array and return the middle-most element(s) of the given array.
* `countOnly(allItems, itemsToCount)`: A function that takes an array (allItems) and an object (itemsToCount) and will return an object containing counts of everything that the input object listed.
* `countLetters(inputStr)`: A function that takes in an array and return the middle-most element(s) of the given array.
* `letterPositions(inputStr)`: A function that takes in a string and return all the indices (zero-based positions) in the string where each character is found as a object.
* `findKeyByValue(inputObj, valueToCheck)`: A function that takes in an object and a value and it scans the object and return the first key which contains the given value. If no key with that given value is found, it returns undefined.
* `eqObjects(object1, object2)`: A function that will take in two objects and returns true or false, based on a perfect match.
* `assertObjectsEqual(actual, expected)`: A function that takes is 2 objects and compare then using eqObjects function and output an assertion sentence.
* `map(array, callback)`: A function which takes an array and callback function to create a new array with elements decided by the callback provided.
* `takeUntil(array, callback)`: A function that take in an array and callback will return a "slice of the array with elements taken from the beginning." It should keep going until the callback returns a truthy value.
* `findKey(planetsObj, callback)`: A function that takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

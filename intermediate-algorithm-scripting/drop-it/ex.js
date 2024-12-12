/**
 * Drop it
 * Given the array arr, iterate through and remove each
 * element starting from the first element (the 0 index)
 * until the function func returns true when the iterated
 * element is passed through it.
 *
 * Then return the rest of the array once the condition is
 * satisfied, otherwise, arr should be returned as an empty
 * array.
 */

// freecodecamp version
/*
function dropElements(arr, func) {
  let sliceIndex = arr.findIndex(func);
  return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}
*/

export const INVALID_ARG = 'The function receives an array and a function as arguments'

// my version
export function dropElements(arr, func) {
  if (arguments.length !== 2) throw new Error(INVALID_ARG)
  if (typeof arr !== 'string' && typeof func !== 'function') throw new Error(INVALID_ARG)

  // let a = arr.findIndex(el => func(el)) → Use ES6 findIndex()
  let sliceIndex = arr.findIndex(func);
  return sliceIndex < 0 ? [] : arr.slice(sliceIndex);
}

// test here
dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
})
// → [3, 4]

dropElements([0, 1, 0, 1], function (n) {
  return n === 1;
})
// → [1, 0, 1]

dropElements([1, 2, 3], function (n) {
  return n > 0;
})
// → [1, 2, 3]

dropElements([1, 2, 3, 4], function (n) {
  return n > 5;
})
// → []

dropElements([1, 2, 3, 7, 4], function (n) {
  return n > 3;
})
// → [7, 4]

dropElements([1, 2, 3, 9, 2], function (n) {
  return n > 2;
})
// → [3, 9, 2]
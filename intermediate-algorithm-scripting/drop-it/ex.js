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

// my version
function dropElements(arr, func) {
  // let a = arr.findIndex(el => func(el)) → Use ES6 findIndex()
  let sliceIndex = arr.findIndex(func);
  return sliceIndex < 0 ? [] : arr.slice(sliceIndex);
}

// test here
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  })
);
// → [3, 4]

console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  })
);
// → [1, 0, 1]

console.log(
  dropElements([1, 2, 3], function (n) {
    return n > 0;
  })
);
// → [1, 2, 3]

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  })
);
// → []

console.log(
  dropElements([1, 2, 3, 7, 4], function (n) {
    return n > 3;
  })
);
// → [7, 4]

console.log(
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
  })
);
// → [3, 9, 2]
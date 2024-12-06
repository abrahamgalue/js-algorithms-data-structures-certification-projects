/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

export const INVALID_ARG = 'The function only takes an array and a number as arguments'

export function getIndexToIns(arr, num) {
  if (arguments.length !== 2) throw new Error(INVALID_ARG)

  if (arr.constructor !== Array && num.constructor !== Number) throw new Error(INVALID_ARG)

  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

console.log(getIndexToIns([1, 3, 4], 2));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
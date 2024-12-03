/*
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/

export const INVALID_ARG = 'The function only take two arrays and a number as parameters'

export function frankenSplice(arr1, arr2, n) {
  if (arguments.length !== 3) throw new Error(INVALID_ARG)
  if ((arr1.constructor && arr2.constructor) !== Array) throw new Error(INVALID_ARG)

  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
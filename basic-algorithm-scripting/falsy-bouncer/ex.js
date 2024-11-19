/*
Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/

export const INVALID_UNDEFINED_ARG = 'The function need a array of argument'
export const INVALID_TYPES_ARG = 'The function only receive an array of argument'

export function bouncer(arr) {
  if (arr === undefined) throw new Error(INVALID_UNDEFINED_ARG)
  if (arr.constructor !== Array) throw new Error(INVALID_TYPES_ARG)

  return arr.filter(value => Boolean(value));
}

console.log(bouncer([7, "ate", "", false, 9])); // [7, "ate", 9]
console.log(bouncer([false, null, 0, NaN, undefined, ""])); // []

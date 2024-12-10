/*
Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/

export const INVALID_UNDEFINED_ARG = 'The function receives two arrays as arguments'

export function diffArray(arr1, arr2) {
  if (arguments.length !== 2) throw new Error(INVALID_UNDEFINED_ARG);
  if (arr1.constructor !== Array && arr2.constructor !== Array) throw new Error(INVALID_UNDEFINED_ARG);

  return arr1
    .concat(arr2)
    .filter(x => !arr1.includes(x) || !arr2.includes(x))

  /* OTHER WAY
  return arr1.filter(x => !arr2.includes(x))
                 .concat(arr2.filter(x => !arr1.includes(x)))
  */
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]))
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]))
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]))
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]))
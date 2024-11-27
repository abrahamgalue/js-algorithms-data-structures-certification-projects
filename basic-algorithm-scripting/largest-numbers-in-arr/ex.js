/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

export const INVALID_UNDEFINED_ARG = 'The function needs an array of arrays with numbers'
export const INVALID_TYPES_ARGS = 'The function receives an array as a parameter'

export function largestOfFour(arr) {
  if (arguments.length !== 1) throw new Error(INVALID_UNDEFINED_ARG)
  if (arr.constructor !== Array) throw new Error(INVALID_TYPES_ARGS)

  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    newArr.push(Math.max(...arr[i]))
  }
  return newArr
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
/*
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
*/

export const INVALID_UNDEFINED_ARG = 'The function takes an array and a function that evaluates whether an element is true'
export const INVALID_TYPES_ARGS = 'The function only accepts an array and a function as arguments'

export function findElement(arr, func) {
  if (arguments.length !== 2) throw new Error(INVALID_UNDEFINED_ARG)
  if (arr.constructor !== Array && func.constructor !== Function) throw new Error(INVALID_TYPES_ARGS)

  return arr.find(func);
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
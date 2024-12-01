/*
Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh".
*/

export const INVALID_ARG = 'The function only takes a string as a parameter'

export function reverseString(str) {
  if (arguments.length !== 1) throw new Error(INVALID_ARG)
  if (typeof str !== 'string') throw new Error(INVALID_ARG)

  return str.split('').reverse().join('');
}

reverseString("hello");
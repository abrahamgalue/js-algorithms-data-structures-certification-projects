/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/

export const INVALID_ARG = 'The function only takes a string and a number as parameters'
export const EMPTY_STRING = 'The string cannot be empty or contain only spaces'
export const INVALID_NUMBER = 'The number cannot be 0 or negative'

export function truncateString(str, num) {
  if (arguments.length !== 2) throw new Error(INVALID_ARG)
  if (typeof str !== 'string' && typeof num !== 'number') throw new Error(INVALID_ARG)

  if (str.replace(/\s/g, '').length === 0) throw new Error(EMPTY_STRING)
  if (num <= 0) throw new Error(INVALID_NUMBER)

  return str.length > num ? str.slice(0, num) + "..." : str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))
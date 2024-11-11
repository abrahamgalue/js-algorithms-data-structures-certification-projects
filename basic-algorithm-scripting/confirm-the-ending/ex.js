/*
function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}

confirmEnding("Bastian", "n");
*/

export const INVALID_ARGS_MESSAGE = 'The function need two arguments'
export const INVALID_ARGS_TYPES = 'The function needs two arguments, a string and a letter'

export function confirmEnding(str, target) {
  if (arguments.length !== 2) throw new Error(INVALID_ARGS_MESSAGE)
  if (typeof str !== 'string' && typeof target !== 'string') throw new Error(INVALID_ARGS_TYPES)

  return str.slice(-target.length) === target
}

confirmEnding("Bastian", "n");

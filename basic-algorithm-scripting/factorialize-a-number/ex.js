/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
*/

export const INVALID_ARGS_MESSAGE = 'The function need one number of argument'
export const INVALID_ARG_TYPE = 'The func need to one argument a positive number'
export const NEGATIVE_NUMBER_ARG = 'The func only accept a positive number'

export function factorialize(num) {
  if (arguments.length !== 1) throw new Error(INVALID_ARGS_MESSAGE)
  if (typeof num !== 'number') throw new Error(INVALID_ARG_TYPE)
  if (num < 0) throw new Error(NEGATIVE_NUMBER_ARG)

  if (num === 0) {
    return 1
  }
  return num * factorialize(num - 1)
}

console.log(factorialize(5))
/**
 * Smallest Common Multiple
 * 
 * Find the smallest common multiple of the provided
 * parameters that can be evenly divided by both, as well
 * as by all sequential numbers in the range between these
 * parameters.
 * 
 * The range will be an array of two numbers that will not
 * necessarily be in numerical order.
 * 
 * For example, if given 1 and 3, find the smallest common
 * multiple of both 1 and 3 that is also evenly divisible
 * by all numbers between 1 and 3. The answer here would be
 * 6.
*/

function gcd(a, b) {
  return (b === 0) ? a : gcd(b, a % b)
}

function lcm(a, b) {
  return a * b / gcd(a, b);
}

export const INVALID_ARG_ERROR = 'The function receives an array with two numbers'

export function smallestCommons(arr = []) {
  if (arr.length !== 2) {
    throw new Error(INVALID_ARG_ERROR)
  }

  let [a, b] = arr

  if (typeof a !== 'number' || typeof b !== 'number') throw new Error(INVALID_ARG_ERROR)

  a = Math.min(...arr)
  b = Math.max(...arr)

  let result = a
  for (let i = a + 1; i <= b; i++) {
    result = lcm(result, i)
  }

  return result;
}


// test here
smallestCommons([1, 5])
smallestCommons([5, 1])
smallestCommons([2, 10])
smallestCommons([1, 13])
smallestCommons([23, 18])
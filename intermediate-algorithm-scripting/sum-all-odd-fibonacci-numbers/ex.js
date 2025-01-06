/**
 * Sum All Odd Fibonacci Numbers
 * 
 * Given a positive integer num, return the sum of all odd
 * Fibonacci numbers that are less than or equal to num.
 * 
 * The first two numbers in the Fibonacci sequence are 0
 * and 1. Every additional number in the sequence is the 
 *  of the two previous numbers. The first seven numbers of
 * the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.
 * 
 * For example, sumFibs(10) should return 10 because all
 * odd Fibonacci numbers less than or equal to 10 are 1, 1,
 * 3, and 5.
 */

export const INVALID_ARG_ERROR = 'The function receives a number as argument'

export function sumFibs(num) {
  if (arguments.length !== 1) throw new Error(INVALID_ARG_ERROR)
  if (typeof num !== 'number') throw new Error(INVALID_ARG_ERROR)
  if (num === 0) return num

  const fib = [0, 1]

  // create a list of fibonacci numbers
  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 2] + fib[i - 1]
  }

  // filter num odd's less than or equal to num, and sum all
  return fib
    .filter(x => x <= num && x % 2 != 0)
    .reduce((acc, elem) => acc + elem)
}

// test here
sumFibs(1)
sumFibs(1000)
sumFibs(4000000)
sumFibs(4)
sumFibs(75024)
sumFibs(75025)
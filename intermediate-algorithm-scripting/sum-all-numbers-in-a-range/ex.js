/*
Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

export const INVALID_UNDEFINED_ARG = 'The function receives an array with two numbers as argument'
export const INVALID_ARR_ARG = 'The array passed as an argument must contain only two numbers'

export function sumAll(arr) {

  if (arguments.length !== 1) throw new Error(INVALID_UNDEFINED_ARG)
  if (arr.length !== 2) throw new Error(INVALID_ARR_ARG)

  const [first, second] = arr

  if (typeof first !== 'number' || typeof second !== 'number') throw new Error(INVALID_ARR_ARG)

  const min = Math.min(...arr)
  const max = Math.max(...arr)

  let sum = 0

  for (let i = min; i <= max; i++) {
    sum += i
  }
  return sum
}

sumAll([1, 4])
// → 10
sumAll([4, 1])
// → 10
sumAll([5, 10])
// → 45
sumAll([10, 5])
// → 45
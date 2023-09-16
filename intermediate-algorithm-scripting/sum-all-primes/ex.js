/**
 * Sum All Primes
 * 
 * A prime number is a whole number greater than 1
 * with exactly two divisors: 1 and itself. 
 * For example, 2 is a prime number because it is 
 * only divisible by 1 and 2. In contrast, 4 is not 
 * prime since it is divisible by 1, 2 and 4.
 * 
 * Rewrite sumPrimes so it returns the sum of all prime
 * numbers that are less than or equal to num.
*/

function sumPrimes(num) {
  let primes = []

  for (let i = 2; i <= num; i++) {
    if (primes.every(x => i % x !== 0)) primes.push(i)
  }

  return primes.reduce((acc, elem) => acc + elem)
}

console.log(sumPrimes(10))
// → 17

console.log(sumPrimes(977))
// → 73156
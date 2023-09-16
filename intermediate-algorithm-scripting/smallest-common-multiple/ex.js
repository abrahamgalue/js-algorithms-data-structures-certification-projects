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

function smallestCommons([a, b]) {
    a = Math.min(...arguments[0])
    b = Math.max(...arguments[0])

    let result = a

    for (let i = a + 1; i <= b; i++) {
        result = lcm(result, i)
    }

    return result
}

// test here
console.log(smallestCommons([1, 5]))
console.log(smallestCommons([5, 1]))
console.log(smallestCommons([2, 10]))
console.log(smallestCommons([1, 13]))
console.log(smallestCommons([23, 18]))
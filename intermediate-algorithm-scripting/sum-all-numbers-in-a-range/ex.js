/*
Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  let sum = 0

  for (let i = min; i <= max; i++ ) {
    
    sum += i
  }
  return sum
}

console.log(sumAll([1, 4]))
// → 10
console.log(sumAll([4, 1]))
// → 10
console.log(sumAll([5, 10]))
// → 45
console.log(sumAll([10, 5]))
// → 45
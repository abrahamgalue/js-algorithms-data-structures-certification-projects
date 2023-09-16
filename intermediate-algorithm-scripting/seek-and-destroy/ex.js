/*
Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/

function destroyer(arr, ...args) {
  return arr.filter(x => !args.includes(x))
}

/* OTHER WAY

function destroyer(arr) {

  // creates an arr with the args after the main arr
  const valsToRemove = Array.from(arguments).slice(1)
  
  // removes the elements contained in the args
  return arr.filter(x => !valsToRemove.includes(x))
}

*/

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
// → [ 1, 1 ]

console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3))
// → [ 1, 5, 1 ]

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5))
// → [ 1 ]

console.log(destroyer(["tree", "hamburger", 53], "tree", 53))
// → [ 'hamburger' ]

console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"))
// → [ 12, 92, 65 ]
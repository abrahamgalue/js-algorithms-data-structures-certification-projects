export const INVALID_ARG_ERROR = 'The function only receives an array as a parameter'

export function steamrollArray(arr) {
  if (arguments.length !== 1) throw new Error(INVALID_ARG_ERROR)

  if (!(arr instanceof Array)) throw new Error(INVALID_ARG_ERROR)


  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
  /* other way
  let newArr = []

  // loop over array content
  for (let elem of arr) {
    // if elem is arr 
    if (Array.isArray(elem)) {
      // flatten entries that are arr
      // and concat in the newArr
      newArr = newArr.concat(steamrollArray(elem))
    } else {
      // push entries that are not arr
      newArr.push(elem)
    }
  }

  return newArr
*/
  /* other way
  return arr.reduce((acc, el) => {
    if (Array.isArray(el)) {
      acc.push(...steamrollArray(el))
    } else {
      acc.push(el)
    }
    return acc
  }, [])
*/
}

// test here
steamrollArray([[["a"]], [["b"]]])
// → [ 'a', 'b' ]

steamrollArray([1, [2], [3, [[4]]]])
// → [ 1, 2, 3, 4 ]

steamrollArray([1, [], [3, [[4]]]])
// → [ 1, 3, 4 ]

steamrollArray([1, {}, [3, [[4]]]])
// → [ 1, {}, 3, 4 ]

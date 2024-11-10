/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

export const INVALID_ARGS_MESSAGE = 'The function need two arguments'
export const INVALID_ARGS_TYPES = 'The function need two arguments'

export function chunkArrayInGroups(arr, size) {
  if (arguments.length !== 2) throw new Error(INVALID_ARGS_MESSAGE)
  if (typeof arr !== 'array' && typeof size !== 'number') throw new Error(INVALID_ARGS_TYPES)

  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2)
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)
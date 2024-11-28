/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

export const INVALID_ARG = 'The function only takes a string as a parameter'

export function findLongestWordLength(str) {
  if (arguments.length !== 1) throw new Error(INVALID_ARG)
  if (str.constructor !== String) throw new Error(INVALID_ARG)

  let words = str.split(' ');
  let result = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > result) {
      result = words[i].length;
    }
  }

  return result;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
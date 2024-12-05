/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

export const INVALID_ARG = 'The function only takes a string as a parameter'
export const EMPTY_STRING = 'The string cannot be empty or contain only spaces'

export function titleCase(str) {
  if (arguments.length !== 1) throw new Error(INVALID_ARG)
  if (typeof str !== 'string') throw new Error(INVALID_ARG)
  if (str.replace(/\s/g, '').length === 0) throw new Error(EMPTY_STRING)

  const words = str.split(" ");
  const newStr = [];
  for (let i = 0; i < words.length; i++) {
    newStr[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return newStr.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
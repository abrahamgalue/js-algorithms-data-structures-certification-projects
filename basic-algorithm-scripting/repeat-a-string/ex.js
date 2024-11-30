/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
*/

export const INVALID_ARG = 'The function only takes a string and a number as parameters.'

export function repeatStringNumTimes(str, num) {
  if (arguments.length !== 2) throw new Error(INVALID_ARG)
  if (typeof str !== 'string' && typeof num !== 'number') throw new Error(INVALID_ARG)

  let newStr = "";

  for (let i = 0; i < num; i++) {
    newStr += str;
  }

  return newStr;
}

repeatStringNumTimes("abc", 3);
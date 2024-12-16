/**
 * Missing letters
 * 
 * Find the missing letter in the passed letter range and 
 * return it.
 * 
 * If all letters are present in the range,
 * return undefined.
*/

/**
 * charCodeAt() method
 * return a unicode from char at the index
 * in UTF-16 an integer between 0 and 65535
 * https://www.asciitable.com/ 
*/
'\'a\' Unicode is:', 'hola'.charCodeAt(3)
// 97

/**
 * String.fromCharCode static method
 * returns a string created by using
 * the specified sequence of Unicode values
*/
String.fromCharCode(65, 98, 114, 97, 104, 97, 109), '\n'
// "ABC"

export const INVALID_ARG = 'The function receives a string as an argument'
export const NO_MISSING_LETTER_MESSAGE = 'No letter missing'

export function fearNotLetter(str) {
  if (arguments.length !== 1) throw new Error(INVALID_ARG)
  if (typeof str !== 'string') throw new Error(INVALID_ARG)

  for (let i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) != 1) {
      return String.fromCharCode(str.charCodeAt(i) + 1)
    }
  }

  return NO_MISSING_LETTER_MESSAGE
}

// test here
fearNotLetter("abce") // d
fearNotLetter("abcdefghjklmno") // i
fearNotLetter("stvwx") // u
fearNotLetter("bcdf") // e
fearNotLetter("abcdefghijklmnopqrstuvwxyz") // undefined
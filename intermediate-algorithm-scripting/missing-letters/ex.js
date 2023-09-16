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
console.log('\'a\' Unicode is:', 'hola'.charCodeAt(3))
// 97

/**
 * String.fromCharCode static method
 * returns a string created by using
 * the specified sequence of Unicode values
*/
console.log(String.fromCharCode(65, 98, 114, 97, 104, 97, 109), '\n')
// "ABC"



function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) != 1) {
      return String.fromCharCode(str.charCodeAt(i) + 1)
    }
  }
}

// test here
console.log(fearNotLetter("abce")) // d
console.log(fearNotLetter("abcdefghjklmno")) // i
console.log(fearNotLetter("stvwx")) // u
console.log(fearNotLetter("bcdf")) // e
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")) // undefined
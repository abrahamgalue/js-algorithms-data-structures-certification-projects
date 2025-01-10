/**
 * Caesars Cipher
 * One of the simplest and most widely known ciphers
 * is a Caesar cipher, also known as a shift cipher.
 * In a shift cipher the meanings of the letters are
 * shifted by some set amount.
 *
 * A common modern use is the ROT13 cipher, where
 * the values of the letters are shifted by 13 places.
 * Thus A ↔ N, B ↔ O and so on.
 *
 * Write a function which takes a ROT13 encoded string
 * as input and returns a decoded string.
 *
 * All letters will be uppercase. Do not transform any
 * non-alphabetic character (i.e. spaces, punctuation),
 * but do pass them on
 */

export const ERR_INVALID_ARG = 'The function only receives a string as an argument'

export function rot13(str) {
  if (arguments.length !== 1) throw new Error(ERR_INVALID_ARG)

  if (typeof str !== "string") throw new Error(ERR_INVALID_ARG)

  const MAX_RANGE = 90

  let arrUnicode = str.split("").map((x) => {
    const elemUnicode = x.charCodeAt()
    return /[A-Z]/.test(x) ? elemUnicode : x
  });

  let arrStr = arrUnicode.map((elem) => {
    if (typeof elem === "number") {
      for (let i = 0; i < 13; i++) {
        elem++
        if (elem > MAX_RANGE) elem = 65
      }
      return String.fromCharCode(elem)
    }
    return elem
  });

  return arrStr.join("")
}

// test here
rot13("SERR PBQR PNZC") // FREE CODE CAMP
rot13("SERR CVMMN!") // FREE PIZZA!
rot13("SERR YBIR?") // FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
// THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

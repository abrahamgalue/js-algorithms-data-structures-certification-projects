/**
 * Search and Replace
 * Perform a search and replace on the sentence using the
 * arguments provided and return the new sentence.
 * 
 * First argument is the sentence to perform the search and
 * replace on.
 * 
 * Second argument is the word that you will be replacing
 * (before).
 * 
 * Third argument is what you will be replacing the second
 * argument with (after).
 * 
 * Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
 */

export const INVALID_ARG_ERROR = 'The function receives a string and two separate words as arguments'
export const INVALID_STRING_ERROR = 'The string must contain only one word'

export function myReplace(str, before, after) {
  if (arguments.length !== 3) throw new Error(INVALID_ARG_ERROR)
  if (typeof str !== 'string' && typeof before !== 'string' && typeof after !== 'string') throw new Error(INVALID_ARG_ERROR)

  const stringWithoutSpaces = str.replace(/\s/g, '')
  const beforeWithoutSpaces = before.replace(/\s/g, '')
  const afterWithoutSpaces = after.replace(/\s/g, '')

  if (stringWithoutSpaces.length === 0 || beforeWithoutSpaces.length === 0 || afterWithoutSpaces.length === 0) throw new Error(INVALID_STRING_ERROR)

  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1)
  } else {
    after = after[0].toLowerCase() + after.substring(1)
  }

  return str.replace(before, after)
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
myReplace("Let us get back to more Coding", "Coding", "algorithms")
myReplace("I think we should look up there", "up", "Down")
myReplace("Let us go to the store", "store", "mall")
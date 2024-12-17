/**
 * Pig Latin
 * 
 * Pig Latin is a way of altering English Words. The rules
 * are as follows:
 * 
 * - If a word begins with a consonant, take the first
 * consonant or consonant cluster, move it to the end of
 * the word, and add ay to it.
 * 
 * - If a word begins with a vowel, just add way at the end.
 * 
 * Translate the provided string to Pig Latin.
 * Input strings are guaranteed to be English words 
 * in all lowercase.
 */

export const INVALID_ARG_ERROR = 'The function receives a string as an argument'
export const INVALID_STRING_ERROR = 'The string must contain only one word'

export function translatePigLatin(str) {
  if (arguments.length !== 1) throw new Error(INVALID_ARG_ERROR)
  if (typeof str !== 'string') throw new Error(INVALID_ARG_ERROR)

  const stringWithoutSpaces = str.replace(/\s/g, '')

  if (stringWithoutSpaces.length === 0) throw new Error(INVALID_STRING_ERROR);

  if (stringWithoutSpaces.match(/^[aeiou]/)) return stringWithoutSpaces + 'way'

  const consonantGroup = stringWithoutSpaces.match(/^[^aeiou]+/)[0]
  return stringWithoutSpaces.substring(consonantGroup.length) + consonantGroup + 'ay'
}

// test here
translatePigLatin("california")
translatePigLatin("paragraphs")
translatePigLatin("glove")
translatePigLatin("algorithm")
translatePigLatin("eight")
translatePigLatin("schwartz")
translatePigLatin("rhythm")
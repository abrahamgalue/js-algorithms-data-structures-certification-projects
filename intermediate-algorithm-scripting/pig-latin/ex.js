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

function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + 'way'

  const consonantGroup = str.match(/^[^aeiou]+/)[0]
  return str.substring(consonantGroup.length) + consonantGroup + 'ay'
}

// test here
console.log(translatePigLatin("california"))
console.log(translatePigLatin("paragraphs"))
console.log(translatePigLatin("glove"))
console.log(translatePigLatin("algorithm"))
console.log(translatePigLatin("eight"))
console.log(translatePigLatin("schwartz"))
console.log(translatePigLatin("rhythm"))
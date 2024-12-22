/**
 * Spinal Tap Case
 * 
 * Convert a string to spinal case. Spinal case is
 * all-lowercase-words-joined-by-dashes.
 */

export const INVALID_ARG_ERROR = 'The function receives a string as an argument'

export function spinalCase(str) {
  if (arguments.length !== 1) throw new Error(INVALID_ARG_ERROR)

  if (typeof str !== 'string') throw new Error(INVALID_ARG_ERROR)

  return str
    .split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLowerCase()
}

// test here
spinalCase('This Is Spinal Tap')
spinalCase("thisIsSpinalTap")
spinalCase("The_Andy_Griffith_Show")
spinalCase("Teletubbies say Eh-oh")
spinalCase("AllThe-small Things")
/**
 * Spinal Tap Case
 * 
 * Convert a string to spinal case. Spinal case is
 * all-lowercase-words-joined-by-dashes.
 */

function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLowerCase()
}

// test here
console.log(spinalCase('This Is Spinal Tap'))
console.log(spinalCase("thisIsSpinalTap"))
console.log(spinalCase("The_Andy_Griffith_Show"))
console.log(spinalCase("Teletubbies say Eh-oh"))
console.log(spinalCase("AllThe-small Things"))
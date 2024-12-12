/**
 * DNA Pairing
 * 
 * Pairs of DNA strands consist of nucleobase pairs. Base
 * pairs are represented by the characters AT and CG, which
 * form building blocks of the DNA double helix.
 * 
 * The DNA strand is missing the pairing element. Write a
 * function to match the missing base pairs for the
 * provided DNA strand. For each character in the provided
 * string, find the base pair character. Return the results
 * as a 2d array.
 * 
 * For example, for the input GCG, return [["G", "C"], ["C"
 * "G"], ["G", "C"]
 * 
 * The character and its pair are paired up in an array,
 * and all the arrays are grouped into one encapsulating
 * array.
*/

// obj for pair lookup
const pairing = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C'
}

export const INVALID_ARG = 'The function only receives a string as an argument'

export function pairElement(str) {
  if (arguments.length !== 1) throw new Error(INVALID_ARG)
  if (typeof str !== 'string') throw new Error(INVALID_ARG);

  // map character to array of character and matching pair
  return str
    .split('')
    .map(x => [x, pairing[x]])
}

// test here
pairElement("GCG")
// → [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]

pairElement("TTGAG")
/* → 
[ [ 'T', 'A' ],
  [ 'T', 'A' ],
  [ 'G', 'C' ],
  [ 'A', 'T' ],
  [ 'G', 'C' ] ]
*/

pairElement("CTCTA")
/* →
[ [ 'C', 'G' ],
  [ 'T', 'A' ],
  [ 'C', 'G' ],
  [ 'T', 'A' ],
  [ 'A', 'T' ] ]
*/
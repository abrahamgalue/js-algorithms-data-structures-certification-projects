/**
 * Binary Agents
 *
 * Return an English translated sentence of the
 * passed binary string.
 *
 * The binary string will be space separated.
 */

// binary to text

export const INVALID_BINARY_ARG = 'The function only receives a string with a binary message as an argument'

const binaryRegex = /^(?:[01]{8}(?:\s[01]{8})*)?$/

export function binaryAgent(str) {
  if (arguments.length !== 1) throw new Error(INVALID_BINARY_ARG)
  if (typeof str !== 'string') throw new Error(INVALID_BINARY_ARG)

  if (!binaryRegex.test(str)) throw new Error(INVALID_BINARY_ARG)

  return String.fromCharCode(...str.split(" ").map((x) => parseInt(x, 2)));
}

// text to binary

export const INVALID_TEXT_ARG = 'The function only receives a string as an argument'

export function textAgent(str) {
  if (arguments.length !== 1) throw new Error(INVALID_TEXT_ARG)
  if (typeof str !== 'string') throw new Error(INVALID_TEXT_ARG)

  return str
    .split("")
    .map((x) => x.charCodeAt().toString(2))
    .join(" ");
}

// test here
console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);
// Aren't bonfires fun!?

console.log(
  binaryAgent(
    "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"
  )
);
// I love FreeCodeCamp!

console.log(
  binaryAgent(
    "01010000 01110010 01101111 01100111 01110010 01100001 01101101 01101101 01101001 01101110 01100111 00100000 01101001 01110011 00100000 01101101 01100001 01100111 01101001 01100011 00100001 00100000 01001001 00100000 01100001 01101101 00100000 01001000 01101111 01110101 01100100 01101001 01101110 01101001 00100001"
  )
);
// Programming is magic! I am Houdini!

console.log(textAgent("TEST"));
// 1010100 1000101 1010011 1010100

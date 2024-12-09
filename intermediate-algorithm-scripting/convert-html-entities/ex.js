/**
 * Convert HTML Entities
 * 
 * Convert the characters &, <, >, " (double quote), and '
 * (apostrophe), in a string to their corresponding HTML
 * entities.
 */

// Use Object Lookup to declare as many HTML entities as needed.
const htmlEntities = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;'
}

export const INVALID_TYPE_ARG = 'The function only accepts a string as an argument'

export function convertHTML(str) {
  if (arguments.length !== 1) throw new Error(INVALID_TYPE_ARG)

  if (typeof str !== 'string') throw new Error(INVALID_TYPE_ARG)



  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split('')
    .map(entry => htmlEntities[entry] ?? entry)
    .join('')

  /*
  const char = [
  ['&', '&amp;'], 
  ['<', '&lt;'], 
  ['>', '&gt;'], 
  ['"', '&quot;'], 
  ['\'', '&apos;']
  ]

  return str
  .replaceAll(char[0][0], char[0][1])
  .replaceAll(char[1][0], char[1][1])
  .replaceAll(char[2][0], char[2][1])
  .replaceAll(char[3][0], char[3][1])
  .replaceAll(char[4][0], char[4][1])
  */
}

// test here
console.log(convertHTML("Dolce & Gabbana"))
console.log(convertHTML("Hamburgers < Pizza < Tacos"))
console.log(convertHTML("Sixty > twelve"))
console.log(convertHTML('Stuff in "quotation marks"'))
console.log(convertHTML("Schindler's List"))
console.log(convertHTML("<>"))
console.log(convertHTML("abc"))
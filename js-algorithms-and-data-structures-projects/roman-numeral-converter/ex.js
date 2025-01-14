/**
 * Roman Numeral Converter
 * Convert the given number into a roman numeral.
 *
 * Roman numerals	Arabic numerals
 * M	1000
 * CM	900
 * D	500
 * CD	400
 * C	100
 * XC	90
 * L	50
 * XL	40
 * X	10
 * IX	9
 * V	5
 * IV	4
 * I	1
 *
 * All roman numerals answers should be provided
 * in upper-case.
 */

export const ERR_INVALID_ARG_TYPE = "The argument must be a positive integer"
export const ERR_OUT_OF_RANGE = "The argument must be between 1 and 3999"

export function convertToRoman(num) {
  if (typeof num !== "number" || !Number.isInteger(num)) throw new Error(ERR_INVALID_ARG_TYPE)

  if (num < 1 || num > 3999) throw new Error(ERR_OUT_OF_RANGE)

  let result = ""

  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }

  for (let key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      result += key
      num -= romanNumerals[key]
    }
  }

  return result
}

// test here
convertToRoman(777) // DCCLXXVII
convertToRoman(333) // CCCXXXIII
convertToRoman(7) // VII
convertToRoman(3) // III

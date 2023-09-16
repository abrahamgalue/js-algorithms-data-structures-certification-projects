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

function convertToRoman(num) {
  let result = "";

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
  };

  for (let key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      result += key;
      num -= romanNumerals[key];
    }
  }

  return result;
}

// test here
console.log(convertToRoman(777)); // DCCLXXVII
console.log(convertToRoman(333)); // CCCXXXIII
console.log(convertToRoman(7)); // VII
console.log(convertToRoman(3)); // III

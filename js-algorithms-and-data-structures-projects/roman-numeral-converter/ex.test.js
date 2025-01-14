import { describe, test, expect } from 'vitest'
import { convertToRoman, ERR_INVALID_ARG_TYPE, ERR_OUT_OF_RANGE } from './ex'

describe("roman numeral converter - Argument Validation", () => {
  test("should throw an error if no arguments are provided", () => {
    expect(() => convertToRoman()).toThrow(ERR_INVALID_ARG_TYPE)
  })

  test("should throw an error if the argument is not a number", () => {
    expect(() => convertToRoman("100")).toThrow(ERR_INVALID_ARG_TYPE)
    expect(() => convertToRoman(null)).toThrow(ERR_INVALID_ARG_TYPE)
    expect(() => convertToRoman(undefined)).toThrow(ERR_INVALID_ARG_TYPE)
    expect(() => convertToRoman({})).toThrow(ERR_INVALID_ARG_TYPE)
    expect(() => convertToRoman([])).toThrow(ERR_INVALID_ARG_TYPE)
    expect(() => convertToRoman(true)).toThrow(ERR_INVALID_ARG_TYPE)
  })

  test("should throw an error if the number is not an integer", () => {
    expect(() => convertToRoman(3.14)).toThrow(ERR_INVALID_ARG_TYPE)
  })

  test("should throw an error if the number is out of range", () => {
    expect(() => convertToRoman(0)).toThrow(ERR_OUT_OF_RANGE)
    expect(() => convertToRoman(-5)).toThrow(ERR_OUT_OF_RANGE)
    expect(() => convertToRoman(4000)).toThrow(ERR_OUT_OF_RANGE)
  })

  test("should handle valid numbers correctly", () => {
    expect(convertToRoman(3999)).toBe("MMMCMXCIX")
    expect(convertToRoman(1)).toBe("I")
  })
})

describe("roman numeral converter - Results", () => {
  test("should correctly convert numbers to Roman numerals", () => {
    expect(convertToRoman(1)).toBe("I")
    expect(convertToRoman(4)).toBe("IV")
    expect(convertToRoman(9)).toBe("IX")
    expect(convertToRoman(40)).toBe("XL")
    expect(convertToRoman(90)).toBe("XC")
    expect(convertToRoman(400)).toBe("CD")
    expect(convertToRoman(900)).toBe("CM")
    expect(convertToRoman(1000)).toBe("M")
    expect(convertToRoman(3999)).toBe("MMMCMXCIX")
  })

  test("should handle intermediate values", () => {
    expect(convertToRoman(777)).toBe("DCCLXXVII")
    expect(convertToRoman(333)).toBe("CCCXXXIII")
    expect(convertToRoman(7)).toBe("VII")
    expect(convertToRoman(3)).toBe("III")
    expect(convertToRoman(2024)).toBe("MMXXIV")
  })
})

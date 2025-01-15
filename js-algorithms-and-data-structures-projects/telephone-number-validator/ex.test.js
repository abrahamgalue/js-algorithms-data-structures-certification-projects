import { describe, test, expect } from "vitest"
import { telephoneCheck, ERR_INVALID_ARG_TYPE } from "./ex"

describe("telephone number validator - Argument Validation", () => {
  test("should throw an error if no arguments are provided", () => {
    expect(() => telephoneCheck()).toThrow(ERR_INVALID_ARG_TYPE)
  })

  test("should throw an error if the argument is not a string", () => {
    expect(() => telephoneCheck(1234567890)).toThrow(ERR_INVALID_ARG_TYPE)
    expect(() => telephoneCheck(null)).toThrow(ERR_INVALID_ARG_TYPE)
    expect(() => telephoneCheck(undefined)).toThrow(ERR_INVALID_ARG_TYPE)
    expect(() => telephoneCheck({})).toThrow(ERR_INVALID_ARG_TYPE)
    expect(() => telephoneCheck([])).toThrow(ERR_INVALID_ARG_TYPE)
    expect(() => telephoneCheck(true)).toThrow(ERR_INVALID_ARG_TYPE)
  })

  test("should handle valid strings correctly", () => {
    expect(telephoneCheck("555-555-5555")).toBe(true)
  })
})


describe("telephone number validator - Results", () => {
  test("should return true for valid US phone numbers", () => {
    expect(telephoneCheck("555-555-5555")).toBe(true)
    expect(telephoneCheck("1 555-555-5555")).toBe(true)
    expect(telephoneCheck("1 (555) 555-5555")).toBe(true)
    expect(telephoneCheck("5555555555")).toBe(true)
    expect(telephoneCheck("(555)555-5555")).toBe(true)
    expect(telephoneCheck("1(555)555-5555")).toBe(true)
    expect(telephoneCheck("1 555 555 5555")).toBe(true)
    expect(telephoneCheck("1 456 789 4444")).toBe(true)
  })

  test("should return false for invalid US phone numbers", () => {
    expect(telephoneCheck("555-5555")).toBe(false)
    expect(telephoneCheck("5555555")).toBe(false)
    expect(telephoneCheck("1 555)555-5555")).toBe(false)
    expect(telephoneCheck("123**&!!asdf#")).toBe(false)
    expect(telephoneCheck("55555555")).toBe(false)
    expect(telephoneCheck("(6054756961)")).toBe(false)
    expect(telephoneCheck("2 (757) 622-7382")).toBe(false)
    expect(telephoneCheck("0 (757) 622-7382")).toBe(false)
    expect(telephoneCheck("-1 (757) 622-7382")).toBe(false)
    expect(telephoneCheck("2 757 622-7382")).toBe(false)
    expect(telephoneCheck("10 (757) 622-7382")).toBe(false)
    expect(telephoneCheck("27576227382")).toBe(false)
    expect(telephoneCheck("(275)76227382")).toBe(false)
    expect(telephoneCheck("2(757)6227382")).toBe(false)
    expect(telephoneCheck("2(757)622-7382")).toBe(false)
    expect(telephoneCheck("555)-555-5555")).toBe(false)
    expect(telephoneCheck("(555-555-5555")).toBe(false)
    expect(telephoneCheck("(555)5(55?)-5555")).toBe(false)
    expect(telephoneCheck("55 55-55-555-5")).toBe(false)
    expect(telephoneCheck("11 555-555-5555")).toBe(false)
  })
})

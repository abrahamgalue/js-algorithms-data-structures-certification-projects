import { describe, test, expect } from "vitest"
import { isPalindrome, ERR_INVALID_ARG_TYPE } from "./ex"

describe("is palindrome - Argument Validation", () => {
  test("should throw an error if no arguments are provided", () => {
    expect(() => isPalindrome()).toThrow(ERR_INVALID_ARG_TYPE)
  })

  test("should throw an error if the argument is not a string", () => {
    expect(() => isPalindrome(123)).toThrow(ERR_INVALID_ARG_TYPE)
    expect(() => isPalindrome({})).toThrow(ERR_INVALID_ARG_TYPE)
    expect(() => isPalindrome([])).toThrow(ERR_INVALID_ARG_TYPE)
    expect(() => isPalindrome(null)).toThrow(ERR_INVALID_ARG_TYPE)
    expect(() => isPalindrome(undefined)).toThrow(ERR_INVALID_ARG_TYPE)
    expect(() => isPalindrome(true)).toThrow(ERR_INVALID_ARG_TYPE)
  })
})

describe("is palindrome - Results", () => {
  test("should return true for a valid palindrome ignoring spaces and case", () => {
    expect(isPalindrome("Do geese see God")).toBe(true)
    expect(isPalindrome("Was it a car or a cat I saw")).toBe(true)
    expect(isPalindrome("Rats live on no evil star")).toBe(true)
    expect(isPalindrome("Step on no pets")).toBe(true)
  })

  test("should return false for non-palindromic strings", () => {
    expect(isPalindrome("Hello, world!")).toBe(false)
    expect(isPalindrome("Not a palindrome")).toBe(false)
    expect(isPalindrome("JavaScript")).toBe(false)
  })

  test("should handle edge cases with empty strings", () => {
    expect(isPalindrome("")).toBe(true)
  })

  test("should handle single-character strings", () => {
    expect(isPalindrome("a")).toBe(true)
    expect(isPalindrome("Z")).toBe(true)
  })

  test("should handle strings with special characters and numbers", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(false)
    expect(isPalindrome("12321")).toBe(true)
    expect(isPalindrome("123456")).toBe(false)
  })
})

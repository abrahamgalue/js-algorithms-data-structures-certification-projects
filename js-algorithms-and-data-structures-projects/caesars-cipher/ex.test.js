import { describe, test, expect } from "vitest"
import { rot13, ERR_INVALID_ARG } from "./ex"

describe("caesars cipher - Argument Validation", () => {
  test("should throw an error if no arguments are provided", () => {
    expect(() => rot13()).toThrow(ERR_INVALID_ARG)
  })

  test("should throw an error if argument is not a string", () => {
    expect(() => rot13(123)).toThrow(ERR_INVALID_ARG)
    expect(() => rot13({})).toThrow(ERR_INVALID_ARG)
    expect(() => rot13([])).toThrow(ERR_INVALID_ARG)
    expect(() => rot13(null)).toThrow(ERR_INVALID_ARG)
    expect(() => rot13(undefined)).toThrow(ERR_INVALID_ARG)
  })

  test("should throw an error for unexpected arguments", () => {
    expect(() => rot13("SERR PBQR PNZC", "extra")).toThrow(ERR_INVALID_ARG)
  })
})

describe("caesars cipher - Results", () => {
  test("should decode 'SERR PBQR PNZC' to 'FREE CODE CAMP'", () => {
    expect(rot13("SERR PBQR PNZC")).toBe("FREE CODE CAMP")
  })

  test("should decode 'SERR CVMMN!' to 'FREE PIZZA!'", () => {
    expect(rot13("SERR CVMMN!")).toBe("FREE PIZZA!")
  })

  test("should decode 'SERR YBIR?' to 'FREE LOVE?'", () => {
    expect(rot13("SERR YBIR?")).toBe("FREE LOVE?")
  })

  test("should decode a long sentence with punctuation", () => {
    const input = "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."
    const output = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
    expect(rot13(input)).toBe(output)
  })

  test("should return the same string for non-alphabetic characters", () => {
    const input = "12345 !@#$% ^&*()"
    expect(rot13(input)).toBe("12345 !@#$% ^&*()")
  })

  test("should return an empty string when input is empty", () => {
    expect(rot13("")).toBe("")
  })
})

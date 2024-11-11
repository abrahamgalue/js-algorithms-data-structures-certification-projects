import { describe, test, expect } from "vitest";
import { confirmEnding, INVALID_ARGS_MESSAGE, INVALID_ARGS_TYPES } from "./ex";

describe('confirm the end of a string (arguments)', () => {
  test('undefined', () => {
    expect(() => confirmEnding()).toThrow(INVALID_ARGS_MESSAGE)
  })

  test('invalid types', () => {
    expect(() => confirmEnding({ vite: 'vitest' }, true)).toThrow(INVALID_ARGS_TYPES)
  })
})

describe('confirm the end of a string (results)', () => {
  test('Bastian ends with "n"', () => {
    expect(confirmEnding("Bastian", "n")).toBe(true)
  })

  test('JavaScript does not end with "a"', () => {
    expect(confirmEnding("JavaScript", "a")).toBe(false)
  })
})
import { describe, test, expect } from "vitest";
import { chunkArrayInGroups, INVALID_ARGS_MESSAGE, INVALID_ARGS_TYPES } from "./ex";

describe('chunk array in groups (arguments)', () => {
  test('undefined', () => {
    expect(() => chunkArrayInGroups()).toThrow()
  })

  test('array passed, but size not', () => {
    expect(() => chunkArrayInGroups(['a', 'b'])).toThrow(INVALID_ARGS_MESSAGE)
  })

  test('invalid types', () => {
    expect(() => chunkArrayInGroups({ vite: 'vitest' }, true)).toThrow(INVALID_ARGS_TYPES)
  })
})

describe('chunk array in groups (results)', () => {
  test('even array', () => {
    expect(chunkArrayInGroups(["a", "b", "c", "d"], 2)).toStrictEqual([["a", "b"], ["c", "d"]])
  })

  test('odd array', () => {
    expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)).toStrictEqual([[0, 1, 2], [3, 4, 5], [6]])
  })
})
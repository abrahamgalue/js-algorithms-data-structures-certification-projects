import { describe, test, expect } from 'vitest'
import { INVALID_ARG_ERROR, smallestCommons } from './ex'

describe('smallest common multiple (arguments)', () => {
  test('undefined', () => {
    expect(() => smallestCommons()).toThrow(INVALID_ARG_ERROR)
  })

  test('invalid types', () => {
    expect(() => smallestCommons([5, '7'])).toThrow(INVALID_ARG_ERROR)

    expect(() => smallestCommons([true, 7])).toThrow(INVALID_ARG_ERROR)

    expect(() => smallestCommons([{ vite: 'vitest' }, '7'])).toThrow(INVALID_ARG_ERROR)
  })
})

describe('smallest common multiple (results)', () => {
  test('should find the smallest common multiple of 1 and 5', () => {
    expect(smallestCommons([1, 5])).toBe(60)
  })

  test('should find the smallest common multiple of 5 and 1', () => {
    expect(smallestCommons([5, 1])).toBe(60)
  })

  test('should find the smallest common multiple of 23 and 18', () => {
    expect(smallestCommons([23, 18])).toBe(6056820)
  })
})
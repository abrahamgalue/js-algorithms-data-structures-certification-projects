import { describe, test, expect } from 'vitest'
import { INVALID_TYPES_ARGS, INVALID_UNDEFINED_ARG, largestOfFour } from './ex'

describe('largest numbers in array (arguments)', () => {
  test('undefined', () => {
    expect(() => largestOfFour()).toThrow(INVALID_UNDEFINED_ARG)
  })

  test('invalid types', () => {
    expect(() => largestOfFour({ vite: 'vitest' })).toThrow(INVALID_TYPES_ARGS)
  })
})

describe('largest numbers in arrays (results)', () => {
  test('[[5, 1], [13, 18], [32, 35], [857, 1]] = [5, 18, 35, 857]', () => {
    expect(largestOfFour([[5, 1], [13, 18], [32, 35], [857, 1]])).toStrictEqual([5, 18, 35, 857])
  })
})
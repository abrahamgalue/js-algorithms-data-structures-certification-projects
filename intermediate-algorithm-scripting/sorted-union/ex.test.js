import { describe, test, expect } from 'vitest'
import { INVALID_ARG, uniteUnique } from './ex'

describe('sorted union (arguments)', () => {
  test('undefined', () => {
    expect(() => uniteUnique()).toThrow(INVALID_ARG)
  })

  test('invalid types', () => {
    expect(() => uniteUnique(true, [5, 8])).toThrow(INVALID_ARG)

    expect(() => uniteUnique([5, 8], { vite: 'vitest' })).toThrow(INVALID_ARG)

    expect(() => uniteUnique(true, 'hola')).toThrow(INVALID_ARG)
  })
})

describe('sorted union (results)', () => {
  test('should join the arrays in the original order: example 1', () => {
    expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toStrictEqual([1, 3, 2, 5, 4])
  })

  test('should join the arrays in the original order: example 2', () => {
    expect(uniteUnique([1, 2, 3], [5, 2, 1])).toStrictEqual([1, 2, 3, 5])
  })
})
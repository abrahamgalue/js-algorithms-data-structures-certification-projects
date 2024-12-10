import { describe, test, expect } from 'vitest'
import { diffArray, INVALID_UNDEFINED_ARG } from './ex'

describe('diff two arrays (arguments)', () => {
  test('undefined', () => {
    expect(() => diffArray()).toThrow(INVALID_UNDEFINED_ARG)
  })

  test('invalid types', () => {
    expect(() => diffArray(true, { vite: 'vitest' })).toThrow(INVALID_UNDEFINED_ARG)
  })
})

describe('diff two arrays (results)', () => {
  test('Should return the different elements in the arrays: example 1', () => {
    expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).toStrictEqual([4])
  })

  test('Should return the different elements in the arrays: example 2', () => {
    expect(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])).toStrictEqual([])
  })
})
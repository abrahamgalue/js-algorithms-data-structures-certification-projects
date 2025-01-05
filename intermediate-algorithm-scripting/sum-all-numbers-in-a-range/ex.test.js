import { describe, test, expect } from 'vitest'
import { INVALID_ARR_ARG, INVALID_UNDEFINED_ARG, sumAll } from './ex'

const examples = [
  // [a, b, result]
  [1, 4, 10],
  [4, 1, 10],
  [5, 10, 45],
  [10, 5, 45]
]


describe('sum all numbers in a range (arguments)', () => {
  test('undefined', () => {
    expect(() => sumAll()).toThrow(INVALID_UNDEFINED_ARG)
  })

  test('invalid array length', () => {
    expect(() => sumAll([5, 7, 6])).toThrow(INVALID_ARR_ARG)
  })

  test('invalid types inside the array', () => {
    expect(() => sumAll(['vite', true])).toThrow(INVALID_ARR_ARG)
  })
})

describe('sum all numbers in a range (results)', () => {
  examples.forEach(([a, b, result]) => {
    test(`should sum all numbers between ${a} and ${b}`, () => {
      expect(sumAll([a, b])).toBe(result)
    })
  })

})
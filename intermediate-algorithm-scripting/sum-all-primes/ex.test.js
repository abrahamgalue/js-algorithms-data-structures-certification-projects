import { describe, test, expect } from 'vitest'
import { sumPrimes, UNDEFINED_ARG_ERROR } from './ex'

describe('sum all primes numbers (arguments)', () => {
  test('undefined', () => {
    expect(() => sumPrimes()).toThrow(UNDEFINED_ARG_ERROR)
  })

  test('invalid type', () => {
    expect(() => sumPrimes(true)).toThrow(UNDEFINED_ARG_ERROR)
  })
})

describe('sum all primes numbers (results)', () => {
  const EXAMPLES = [
    {
      argument: 10,
      result: 17
    },
    {
      argument: 977,
      result: 73156
    },
  ]

  EXAMPLES.forEach(({ argument, result }) => {
    test(`${argument} should be ${result}`, () => {
      expect(sumPrimes(argument)).toBe(result)
    })
  })
})
import { describe, test, expect } from 'vitest'
import { INVALID_ARG_ERROR, sumFibs } from './ex'

describe('sum all odd fibonacci numbers (arguments)', () => {
  test('undefined', () => {
    expect(() => sumFibs()).toThrow(INVALID_ARG_ERROR)
  })

  test('invalid type', () => {
    expect(() => sumFibs(true)).toThrow(INVALID_ARG_ERROR)
  })

  test('number 0', () => {
    expect(sumFibs(0)).toBe(0)
  })
})

describe('sum all odd fibonacci numbers (results)', () => {
  const EXAMPLES = [
    {
      argument: 1,
      result: 1
    },
    {
      argument: 1000,
      result: 1785
    },
    {
      argument: 4,
      result: 5
    },
  ]

  EXAMPLES.forEach(({ argument, result }) => {
    test(`${argument} should be ${result}`, () => {
      expect(sumFibs(argument)).toBe(result)
    })
  })
})
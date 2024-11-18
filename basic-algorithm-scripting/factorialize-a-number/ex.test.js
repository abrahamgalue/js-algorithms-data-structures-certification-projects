import { describe, test, expect } from 'vitest'
import { factorialize, INVALID_ARGS_MESSAGE, INVALID_ARG_TYPE, NEGATIVE_NUMBER_ARG } from './ex'

describe('factorialize a number (arguments)', () => {
  test('undefined', () => {
    expect(() => factorialize()).toThrow(INVALID_ARGS_MESSAGE)
  })

  test('invalid types', () => {
    expect(() => factorialize('vitest')).toThrow(INVALID_ARG_TYPE)
  })

  test('negative number', () => {
    expect(() => factorialize(-5)).toThrow(NEGATIVE_NUMBER_ARG)
  })
})

describe('factorialize a number (results)', () => {
  test('0! = 1', () => {
    expect(factorialize(0)).toBe(1)
  })

  test('5! = 120', () => {
    expect(factorialize(5)).toBe(120)
  })

  test('10! = 3628800', () => {
    expect(factorialize(10)).toBe(3628800)
  })
})
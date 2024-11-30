import { describe, test, expect } from 'vitest'
import { repeatStringNumTimes, INVALID_ARG } from './ex'

describe('repeat a string (arguments)', () => {
  test('undefined', () => {
    expect(() => repeatStringNumTimes()).toThrow(INVALID_ARG)
  })

  test('invalid types', () => {
    expect(() => repeatStringNumTimes({ vite: 'vitest' })).toThrow(INVALID_ARG)
  })
})

describe('repeat a string (results)', () => {
  test('abc repeated 3 times is \'abcabcabc\'', () => {
    expect(repeatStringNumTimes('abc', 3)).toBe('abcabcabc')
  })
})
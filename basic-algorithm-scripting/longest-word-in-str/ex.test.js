import { describe, test, expect } from 'vitest'
import { findLongestWordLength, INVALID_ARG } from './ex'

describe('longest word in string (arguments)', () => {
  test('undefined', () => {
    expect(() => findLongestWordLength()).toThrow(INVALID_ARG)
  })

  test('invalid types', () => {
    expect(() => findLongestWordLength({ vite: 'vitest' })).toThrow(INVALID_ARG)
  })
})

describe('longest word in string (results)', () => {
  test('\'The quick brown fox jumped over the lazy dog\' = 6', () => {
    expect(findLongestWordLength('The quick brown fox jumped over the lazy dog')).toBe(6)
  })
})
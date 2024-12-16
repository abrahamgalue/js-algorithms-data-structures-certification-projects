import { describe, test, expect } from 'vitest'
import { fearNotLetter, INVALID_ARG, NO_MISSING_LETTER_MESSAGE } from './ex'

describe('missing letters (arguments)', () => {
  test('undefined', () => {
    expect(() => fearNotLetter()).toThrow(INVALID_ARG)
  })

  test('invalid types', () => {
    expect(() => fearNotLetter(true)).toThrow(INVALID_ARG)
  })
})

describe('missing letters (results)', () => {
  test('should find the lost letter: \'abcdefghjklmno\' is \'i\'', () => {
    expect(fearNotLetter("abcdefghjklmno")).toBe('i')
  })

  test('should find the lost letter: \'stvwx\' is \'u\'', () => {
    expect(fearNotLetter("stvwx")).toBe('u')
  })

  test('should find the lost letter: \'abcdefghijklmnopqrstuvwxyz\' is no missing letter', () => {
    expect(fearNotLetter("abcdefghijklmnopqrstuvwxyz")).toBe(NO_MISSING_LETTER_MESSAGE)
  })
})
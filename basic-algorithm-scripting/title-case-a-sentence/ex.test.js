import { test, describe, expect } from 'vitest'
import { titleCase, INVALID_ARG, EMPTY_STRING } from './ex'

describe('title case a sentence (arguments)', () => {
  test('undefined', () => {
    expect(() => titleCase()).toThrow(INVALID_ARG)
  })

  test('invalid types', () => {
    expect(() => titleCase({ vite: 'vitest' })).toThrow(INVALID_ARG)
  })

  test('empty string', () => {
    expect(() => titleCase('')).toThrow(EMPTY_STRING)
  })

  test('string of spaces', () => {
    expect(() => titleCase('    ')).toThrow(EMPTY_STRING)
  })
})

describe('title case a sentence (results)', () => {
  test('I\'m a little tea pot = I\'m A Little Tea Pot', () => {
    expect(titleCase("I'm a little tea pot")).toBe('I\'m A Little Tea Pot')
  })
})
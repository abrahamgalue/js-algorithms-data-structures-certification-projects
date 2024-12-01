import { describe, test, expect } from 'vitest'
import { reverseString, INVALID_ARG } from './ex'

describe('reverse a string (arguments)', () => {
  test('undefined', () => {
    expect(() => reverseString()).toThrow(INVALID_ARG)
  })

  test('invalid types', () => {
    expect(() => reverseString({ vite: 'vitest' })).toThrow(INVALID_ARG)
  })
})

describe('reverse a string (results)', () => {
  test('"Hello" will become "Olleh"', () => {
    expect(reverseString('hello')).toBe('olleh')
  })
})
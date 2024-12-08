import { describe, test, expect } from 'vitest'
import { textAgent, INVALID_TEXT_ARG } from './ex'

describe('text agent (arguments)', () => {
  test('undefined', () => {
    expect(() => textAgent()).toThrow(INVALID_TEXT_ARG)
  })

  test('invalid types', () => {
    expect(() => textAgent(true)).toThrow(INVALID_TEXT_ARG)
  })
})

describe('text agent (results)', () => {
  test('should translate text to binary', () => {
    expect(textAgent("TEST")).toBe('1010100 1000101 1010011 1010100')
  })
})
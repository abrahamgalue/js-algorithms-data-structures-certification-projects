import { test, describe, expect } from 'vitest'
import { truncateString, INVALID_ARG, EMPTY_STRING, INVALID_NUMBER } from './ex'

describe('truncate a string (arguments)', () => {
  test('undefined', () => {
    expect(() => truncateString()).toThrow(INVALID_ARG)
  })

  test('invalid types', () => {
    expect(() => truncateString({ vite: 'vitest' }, [5, 2])).toThrow(INVALID_ARG)
  })

  test('empty string', () => {
    expect(() => truncateString('', 5)).toThrow(EMPTY_STRING)
  })

  test('string of spaces', () => {
    expect(() => truncateString('  ', 2)).toThrow(EMPTY_STRING)
  })

  test('number 0', () => {
    expect(() => truncateString('Vite', 0)).toThrow(INVALID_NUMBER)
  })

  test('negative number', () => {
    expect(() => truncateString('Vitest', -7)).toThrow(INVALID_NUMBER)
  })
})

describe('truncate a string (results)', () => {
  test('\'A-tisket\' and 3 = A-t...', () => {
    expect(truncateString("A-tisket", 3)).toBe('A-t...')
  })

  test('Vitest and 8 = Vitest', () => {
    expect(truncateString("Vitest", 8)).toBe('Vitest')
  })
})
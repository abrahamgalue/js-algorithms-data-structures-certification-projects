import { describe, test, expect } from 'vitest'
import { findElement, INVALID_TYPES_ARGS, INVALID_UNDEFINED_ARG } from './ex'

describe('finders keepers (arguments)', () => {
  test('undefined', () => {
    expect(() => findElement()).toThrow(INVALID_UNDEFINED_ARG)
  })

  test('invalid types', () => {
    expect(() => findElement(true, { vite: 'vitest' })).toThrow(INVALID_TYPES_ARGS)
  })
})

describe('finders keepers (results)', () => {
  test('first even number of [1, 2, 3, 4] is \'2\'', () => {
    expect(findElement([1, 2, 3, 4], num => num % 2 === 0)).toBe(2)
  })
})
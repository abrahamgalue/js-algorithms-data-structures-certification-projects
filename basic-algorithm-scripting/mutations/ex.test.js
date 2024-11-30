import { describe, test, expect } from 'vitest'
import { mutation, INVALID_ARG } from './ex'

describe('mutations (arguments)', () => {
  test('undefined', () => {
    expect(() => mutation()).toThrow(INVALID_ARG)
  })

  test('invalid types', () => {
    expect(() => mutation({ vite: 'vitest' })).toThrow(INVALID_ARG)
  })
})

describe('mutations (results)', () => {
  test('All letters contained in "hey" are not in "hello"', () => {
    expect(mutation(["hello", "hey"])).toBe(false)
  })

  test('All letters contained in "line" are in "Alien"', () => {
    expect(mutation(["Alien", "line"])).toBe(true)
  })
})
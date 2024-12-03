import { describe, test, expect } from 'vitest'
import { frankenSplice, INVALID_ARG } from './ex'

describe('slice and splice (arguments)', () => {
  test('undefined', () => {
    expect(() => frankenSplice()).toThrow(INVALID_ARG)
  })

  test('invalid types', () => {
    expect(() => frankenSplice({ vite: 'vitest' })).toThrow(INVALID_ARG)
  })
})

describe('slice and splice (results)', () => {
  test('copying arr [1, 2, 3] in [4, 5] at index 1 is [4, 1, 2, 3, 5]', () => {
    expect(frankenSplice([1, 2, 3], [4, 5], 1)).toStrictEqual([4, 1, 2, 3, 5])
  })
})
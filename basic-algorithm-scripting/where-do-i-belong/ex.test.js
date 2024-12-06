import { describe, test, expect } from 'vitest'
import { getIndexToIns, INVALID_ARG } from './ex'

describe('Where do i belong (arguments)', () => {
  test('undefined', () => {
    expect(() => getIndexToIns()).toThrow(INVALID_ARG)
  })

  test('invalid types', () => {
    expect(() => getIndexToIns({ vite: 'vitest' }, true)).toThrow(INVALID_ARG)
  })
})

describe('Where do i belong (results)', () => {
  test('[1, 3, 4] and num 2 = index 1', () => {
    expect(getIndexToIns([1, 3, 4], 2)).toBe(1)
  })

  test('[10, 20, 30, 40, 50] and num 35 = index 3', () => {
    expect(getIndexToIns([10, 20, 30, 40, 50], 35)).toBe(3)
  })
})
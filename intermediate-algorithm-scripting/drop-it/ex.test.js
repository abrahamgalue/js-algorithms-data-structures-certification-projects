import { describe, test, expect } from 'vitest'
import { dropElements, INVALID_ARG } from './ex'

describe('drop it (arguments)', () => {
  test('undefined', () => {
    expect(() => dropElements()).toThrow(INVALID_ARG)
  })

  test('invalid types', () => {
    expect(() => dropElements(true, [7, 7])).toThrow(INVALID_ARG)
  })
})

describe('drop it (results)', () => {
  test('should drop array elements: example 1', () => {
    expect(dropElements([1, 2, 3, 4], function (n) {
      return n >= 3;
    })).toStrictEqual([3, 4])
  })

  test('should drop array elements: example 2', () => {
    expect(dropElements([1, 2, 3, 4], function (n) {
      return n > 5;
    })).toStrictEqual([])
  })
})
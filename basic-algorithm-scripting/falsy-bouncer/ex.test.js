import { describe, test, expect } from 'vitest'
import { bouncer, INVALID_TYPES_ARG, INVALID_UNDEFINED_ARG } from './ex'

describe('falsy bouncer (arguments)', () => {
  test('undefined', () => {
    expect(() => bouncer()).toThrow(INVALID_UNDEFINED_ARG)
  })

  test('invalid types', () => {
    expect(() => bouncer('string', 5)).toThrow(INVALID_TYPES_ARG)
  })
})

describe('falsy bouncer (results)', () => {
  test('[7, "ate", "", false, 9] --> [7, "ate", 9]', () => {
    expect(bouncer([7, "ate", "", false, 9])).toStrictEqual([7, "ate", 9])
  })

  test('[false, null, 0, NaN, undefined, ""] --> []', () => {
    expect(bouncer([false, null, 0, NaN, undefined, ""])).toStrictEqual([])
  })
})
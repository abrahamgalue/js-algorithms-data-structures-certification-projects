import { describe, test, expect } from 'vitest'
import { destroyer, INVALID_ARG_ERROR } from './ex'

describe('seek and destroy (arguments)', () => {
  test('undefined', () => {
    expect(() => destroyer()).toThrow(INVALID_ARG_ERROR)
  })

  test('invalid types', () => {
    expect(() => destroyer(true, 5, 3)).toThrow(INVALID_ARG_ERROR)
  })
})

describe('seek and destroy (results)', () => {
  test('should search and destroy elements of an array: example 1', () => {
    expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toStrictEqual([1, 1])
  })

  test('should search and destroy elements of an array: example 2', () => {
    expect(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")).toStrictEqual([12, 92, 65])
  })
})
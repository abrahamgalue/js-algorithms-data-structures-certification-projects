import { describe, test, expect } from 'vitest'
import { INVALID_ARG_ERROR, steamrollArray } from './ex'

describe('steamroller (arguments)', () => {
  test('undefined', () => {
    expect(() => steamrollArray()).toThrow(INVALID_ARG_ERROR)
  })

  test('invalid types', () => {
    expect(() => steamrollArray(true)).toThrow(INVALID_ARG_ERROR)
  })
})

describe('steamroller (results)', () => {
  test('should flatten an array: example 1', () => {
    expect(steamrollArray([[["a"]], [["b"]]])).toStrictEqual(['a', 'b'])
  })

  test('should flatten an array: example 2', () => {
    expect(steamrollArray([1, [2], [3, [[4]]]])).toStrictEqual([1, 2, 3, 4])
  })

  test('should flatten an array: example 3', () => {
    expect(steamrollArray([1, [], [3, [[4]]]])).toStrictEqual([1, 3, 4])
  })

  test('should flatten an array: example 4', () => {
    expect(steamrollArray([1, {}, [3, [[4]]]]))
  })
})
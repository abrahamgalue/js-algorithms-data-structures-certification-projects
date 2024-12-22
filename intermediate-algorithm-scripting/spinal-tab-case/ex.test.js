import { describe, expect, test } from 'vitest'
import { INVALID_ARG_ERROR, spinalCase } from './ex'

describe('spinal tab case (arguments)', () => {
  test('undefined', () => {
    expect(() => spinalCase()).toThrow(INVALID_ARG_ERROR)
  })

  test('invalid types', () => {
    expect(() => spinalCase(true)).toThrow(INVALID_ARG_ERROR)
  })
})

describe('spinal tab case (results)', () => {
  test('should convert a string to spinal case: example 1', () => {
    expect(spinalCase('This Is Spinal Tap')).toBe('this-is-spinal-tap')
  })

  test('should convert a string to spinal case: example 2', () => {
    expect(spinalCase("thisIsSpinalTap")).toBe('this-is-spinal-tap')
  })

  test('should convert a string to spinal case: example 3', () => {
    expect(spinalCase("The_Andy_Griffith_Show")).toBe('the-andy-griffith-show')
  })
})
import { describe, test, expect } from 'vitest'
import { INVALID_ARG_ERROR, INVALID_STRING_ERROR, translatePigLatin } from './ex'

describe('pig latin (arguments)', () => {
  test('undefined', () => {
    expect(() => translatePigLatin()).toThrow(INVALID_ARG_ERROR)
  })

  test('invalid types', () => {
    expect(() => translatePigLatin(true)).toThrow(INVALID_ARG_ERROR)
  })

  test('empty string', () => {
    expect(() => translatePigLatin('')).toThrow(INVALID_STRING_ERROR)
  })
})

describe('pig latin (results)', () => {
  test('california = aliforniacay', () => {
    expect(translatePigLatin('california')).toBe('aliforniacay')
  })

  test('schwartz = artzschway', () => {
    expect(translatePigLatin('schwartz')).toBe('artzschway')
  })

  test('rhythm = rhythmay', () => {
    expect(translatePigLatin('rhythm')).toBe('rhythmay')
  })
})
import { describe, test, expect } from 'vitest'
import { convertHTML, INVALID_TYPE_ARG } from './ex'

describe('convert html entities (arguments)', () => {
  test('undefined', () => {
    expect(() => convertHTML()).toThrow(INVALID_TYPE_ARG)
  })

  test('invalid types', () => {
    expect(() => convertHTML([7, 'Hello', true])).toThrow(INVALID_TYPE_ARG)
  })
})

describe('convert html entities (results)', () => {
  test('\'Dolce & Gabbana\' should be \'Dolce &amp; Gabbana\'', () => {
    expect(convertHTML("Dolce & Gabbana")).toBe('Dolce &amp; Gabbana')
  })

  test('\'<>\' should be \'&lt;&gt;\'', () => {
    expect(convertHTML('<>')).toBe('&lt;&gt;')
  })
})
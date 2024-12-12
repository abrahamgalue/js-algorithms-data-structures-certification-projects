import { describe, test, expect } from 'vitest'
import { INVALID_ARG, pairElement } from './ex'

describe('dna pairing (arguments)', () => {
  test('undefined', () => {
    expect(() => pairElement()).toThrow(INVALID_ARG)
  })

  test('invalid type', () => {
    expect(() => pairElement(false)).toThrow(INVALID_ARG)
  })
})

describe('dna pairing (results)', () => {
  test('nucleobases of DNA should be paired: example 1', () => {
    expect(pairElement("GCG")).toStrictEqual([['G', 'C'], ['C', 'G'], ['G', 'C']])
  })

  test('nucleobases of DNA should be paired: example 2', () => {
    expect(pairElement("TTGAG")).toStrictEqual([
      ['T', 'A'],
      ['T', 'A'],
      ['G', 'C'],
      ['A', 'T'],
      ['G', 'C']
    ])
  })
})
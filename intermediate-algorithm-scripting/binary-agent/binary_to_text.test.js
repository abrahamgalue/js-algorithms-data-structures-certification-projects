import { describe, test, expect } from 'vitest'
import { binaryAgent, INVALID_BINARY_ARG } from './ex'

describe('binary agent (arguments)', () => {
  test('undefined', () => {
    expect(() => binaryAgent()).toThrow(INVALID_BINARY_ARG)
  })

  test('invalid types', () => {
    expect(() => binaryAgent(true)).toThrow(INVALID_BINARY_ARG)
  })

  test('invalid binary string', () => {
    expect(() => binaryAgent('01010000 01110010 invalid 01100111')).toThrow(INVALID_BINARY_ARG)
  })
})

describe('binary agent (results)', () => {
  test('should translate binary to text: example 1', () => {
    expect(binaryAgent(
      "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
    )).toBe('Aren\'t bonfires fun!?')
  })

  test('should translate binary to text: example 2', () => {
    expect(binaryAgent(
      "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"
    )).toBe('I love FreeCodeCamp!')
  })

  test('should translate binary to text: example 3', () => {
    expect(binaryAgent(
      "01010000 01110010 01101111 01100111 01110010 01100001 01101101 01101101 01101001 01101110 01100111 00100000 01101001 01110011 00100000 01101101 01100001 01100111 01101001 01100011 00100001 00100000 01001001 00100000 01100001 01101101 00100000 01001000 01101111 01110101 01100100 01101001 01101110 01101001 00100001"
    )).toBe('Programming is magic! I am Houdini!')
  })
})
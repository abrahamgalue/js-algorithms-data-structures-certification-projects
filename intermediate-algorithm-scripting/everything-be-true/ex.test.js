import { describe, test, expect } from 'vitest'
import { INVALID_ARGS, truthCheck } from './ex'

describe('everything be true (arguments)', () => {
  test('undefined', () => {
    expect(() => truthCheck()).toThrow(INVALID_ARGS)
  })

  test('invalid types', () => {
    expect(() => truthCheck(true, 777)).toThrow(INVALID_ARGS)
  })
})

describe('everything be true (results)', () => {
  test('should check the properties: example 1', () => {
    expect(truthCheck(
      [
        { name: "Quincy", role: "Founder", isBot: false },
        { name: "Naomi", role: "", isBot: false },
        { name: "Camperbot", role: "Bot", isBot: true },
      ],
      "name"
    )).toBe(true)
  })

  test('should check the properties: example 2', () => {
    expect(truthCheck(
      [
        {
          id: 1,
          data: { url: "https://freecodecamp.org", name: "freeCodeCamp" },
        },
        {
          id: 2,
          data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" },
        },
        { id: null, data: {} },
      ],
      "id"
    )).toBe(false)
  })
})
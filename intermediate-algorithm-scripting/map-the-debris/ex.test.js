import { describe, test, expect } from 'vitest'
import { INVALID_ARG, orbitalPeriod } from './ex'

describe('map the debris (arguments)', () => {
  test('undefined', () => {
    expect(() => orbitalPeriod()).toThrow(INVALID_ARG)
  })

  test('invalid types', () => {
    expect(() => orbitalPeriod(true)).toThrow(INVALID_ARG)
  })
})

describe('map the debris (results)', () => {
  test('should calculate the orbital period of sputnik', () => {
    expect(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }])).toStrictEqual([{ name: 'sputnik', orbitalPeriod: 86400 }])
  })

  test('should calculate the orbital period of iss, hubble and moon', () => {
    expect(orbitalPeriod([
      { name: "iss", avgAlt: 413.6 },
      { name: "hubble", avgAlt: 556.7 },
      { name: "moon", avgAlt: 378632.553 },
    ])).toStrictEqual([
      { name: 'iss', orbitalPeriod: 5557 },
      { name: 'hubble', orbitalPeriod: 5734 },
      { name: 'moon', orbitalPeriod: 2377399 }
    ])
  })
})
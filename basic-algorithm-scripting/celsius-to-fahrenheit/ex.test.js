import { describe, test, expect } from "vitest";
import { convertCtoF, INVALID_ARG_MESSAGE } from "./ex";

describe('celsius to fahrenheit', () => {
  test('30°C = 86°F', () => {
    expect(convertCtoF(30)).toBe(86)
  })

  test('0°C = 32°F', () => {
    expect(convertCtoF(0)).toBe(32)
  })

  test('-30°C = -22°F', () => {
    expect(convertCtoF(-30)).toBe(-22)
  })
})

describe('invalid arguments', () => {
  test('undefined', () => {
    expect(convertCtoF()).toBe(INVALID_ARG_MESSAGE)
  })

  test('string', () => {
    expect(convertCtoF('vitest')).toBe(INVALID_ARG_MESSAGE)
  })

  test('array', () => {
    expect(convertCtoF(['vitest'])).toBe(INVALID_ARG_MESSAGE)
  })

  test('object', () => {
    expect(convertCtoF({ vite: 'vitest' })).toBe(INVALID_ARG_MESSAGE)
  })
})
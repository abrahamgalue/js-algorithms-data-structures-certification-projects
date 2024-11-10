import { expect, test, describe } from "vitest"
import { booWho } from "./ex"

describe('booWho: values are primitive booleans?', () => {
  test('null', () => {
    expect(booWho(null)).toBe(false)
  })

  test('undefined', () => {
    expect(booWho()).toBe(false)
  })

  test('number', () => {
    expect(booWho(777)).toBe(false)
  })

  test('string', () => {
    expect(booWho('vitest')).toBe(false)
  })

  test('object', () => {
    expect(booWho({ vite: 'vitest' })).toBe(false)
  })

  test('array', () => {
    expect(booWho(['vitest'])).toBe(false)
  })

  test('array', () => {
    expect(booWho(['vitest'])).toBe(false)
  })

  test('true', () => {
    expect(booWho(true)).toBe(true)
  })

  test('false', () => {
    expect(booWho(false)).toBe(true)
  })
})
import { describe, test, expect } from 'vitest'
import { INVALID_ARG_ERROR, INVALID_STRING_ERROR, myReplace } from './ex'

describe('search and replace (arguments)', () => {
  test('undefined', () => {
    expect(() => myReplace()).toThrow(INVALID_ARG_ERROR)
  })

  test('invalid types', () => {
    expect(() => myReplace(true, { vite: 'vitest' }, [5, 8])).toThrow(INVALID_ARG_ERROR)
  })

  test('empty strings', () => {
    expect(() => myReplace("", "jumped", "leaped")).toThrow(INVALID_STRING_ERROR)
    expect(() => myReplace("A quick brown fox jumped over the lazy dog", "", "leaped")).toThrow(INVALID_STRING_ERROR)
    expect(() => myReplace("A quick brown fox jumped over the lazy dog", "jumped", "")).toThrow(INVALID_STRING_ERROR)
  })
})

describe('search and replace (results)', () => {
  test('should replace in the string \'Coding\' by \'algorithms\'', () => {
    expect(myReplace("Let us get back to more Coding", "Coding", "algorithms")).toBe('Let us get back to more Algorithms')
  })

  test('should replace in the string \'up\' by \'Down\'', () => {
    expect(myReplace("I think we should look up there", "up", "Down")).toBe('I think we should look down there')
  })

  test('should replace in the string \'store\' by \'mall\'', () => {
    expect(myReplace("Let us go to the store", "store", "mall")).toBe('Let us go to the mall')
  })
})
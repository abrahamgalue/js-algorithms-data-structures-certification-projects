import { describe, test, expect, expectTypeOf } from 'vitest'
import { addTogether } from './ex'

describe('arguments optional (arguments)', () => {
  test('undefined', () => {
    expect(addTogether()).toBe(undefined)
  })

  test('invalid types', () => {
    expect(addTogether('hal', true)).toBe(undefined)
  })
})

describe('arguments optional (results)', () => {
  test('2 and 3 return 5', () => {
    expect(addTogether(2, 3)).toBe(5)
  })

  let sumTwoAnd = addTogether(2);

  test('2 and undefind return function', () => {
    expectTypeOf(sumTwoAnd).toBeFunction()
  })

  test('previous 2 and 3 return 5', () => {
    expect(sumTwoAnd(3)).toBe(5)
  })
})
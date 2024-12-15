import { describe, test, expect } from 'vitest'
import { INVALID_ARG, Person } from './ex'

describe('make a person (arguments)', () => {
  test('undefined', () => {
    expect(() => Person()).toThrow(INVALID_ARG)
  })

  test('invalid types', () => {
    const invalidArgs = [
      { vite: 'vitest' },
      true,
      5,
      [5, true, 'hola'],
      undefined,
      null
    ]

    invalidArgs.forEach(arg => {
      expect(() => Person(arg)).toThrow(INVALID_ARG)
    })
  })
})

describe('make a person (results)', () => {
  const bob = new Person("Bob Ross")

  test('should create a person', () => {
    expect(Object.keys(bob).length).toBe(6)
  })

  test('should return first name, last name and full name', () => {
    expect(bob.getFirstName()).toBe('Bob')
    expect(bob.getLastName()).toBe('Ross')
    expect(bob.getFullName()).toBe('Bob Ross')
  })

  test('should change first name, last name and full name', () => {
    bob.setFirstName("Haskell");

    expect(bob.getFullName()).toBe('Haskell Ross')

    bob.setLastName("Curry")
    expect(bob.getFullName()).toBe('Haskell Curry')

    bob.setFullName("Chris Kyle")
    expect(bob.getFullName()).toBe('Chris Kyle')
    expect(bob.getFirstName()).toBe('Chris')
    expect(bob.getLastName()).toBe('Kyle')
  })
})
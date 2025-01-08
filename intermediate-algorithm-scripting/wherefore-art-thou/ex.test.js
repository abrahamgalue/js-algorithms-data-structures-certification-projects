import { describe, test, expect } from "vitest"
import { ERR_FIRST_ARG_NOT_ARRAY, ERR_INVALID_NUM_ARGS, ERR_SECOND_ARG_NOT_OBJECT, whatIsInAName } from "./ex"

describe("wherefore art thou - Argument Validation", () => {
  test("should throw an error if no arguments are provided", () => {
    expect(() => whatIsInAName()).toThrow(ERR_INVALID_NUM_ARGS)
  })

  test("should throw an error if only one argument is provided", () => {
    expect(() => whatIsInAName([{ a: 1 }])).toThrow(ERR_INVALID_NUM_ARGS)
  })

  test("should handle cases where more than two arguments are passed", () => {
    expect(() =>
      whatIsInAName([{ a: 1 }], { a: 1 }, "extra argument")
    ).toThrow(ERR_INVALID_NUM_ARGS)
  })

  test("should throw an error if the first argument is not an array", () => {
    expect(() => whatIsInAName("not an array", { a: 1 })).toThrow(ERR_FIRST_ARG_NOT_ARRAY)

    expect(() => whatIsInAName({ a: 1 }, { a: 1 })).toThrow(ERR_FIRST_ARG_NOT_ARRAY)
  })

  test("should throw an error if the second argument is not an object", () => {
    expect(() => whatIsInAName([{ a: 1 }], "not an object")).toThrow(ERR_SECOND_ARG_NOT_OBJECT)

    expect(() => whatIsInAName([{ a: 1 }], null)).toThrow(ERR_SECOND_ARG_NOT_OBJECT)

    expect(() => whatIsInAName([{ a: 1 }], 42)).toThrow(ERR_SECOND_ARG_NOT_OBJECT)

    expect(() => whatIsInAName([{ a: 1 }], [1, 2, 3])).toThrow(ERR_SECOND_ARG_NOT_OBJECT)
  })

  test("should work correctly when valid arguments are provided", () => {
    const collection = [
      { a: 1, b: 2 },
      { a: 1, b: 3 },
      { a: 2, b: 4 },
    ]
    const source = { a: 1 }

    const result = whatIsInAName(collection, source)
    expect(result).toStrictEqual([
      { a: 1, b: 2 },
      { a: 1, b: 3 },
    ])
  })
})


describe("wherefore art thou - Results", () => {
  test("should return an object with last: 'Capulet'", () => {
    const collection = [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ]
    const source = { last: "Capulet" }
    const result = whatIsInAName(collection, source)
    expect(result).toStrictEqual([{ first: "Tybalt", last: "Capulet" }])
  })

  test("should return all objects that contain apple: 1", () => {
    const collection = [
      { apple: 1 },
      { apple: 1 },
      { apple: 1, bat: 2 },
    ]
    const source = { apple: 1 }
    const result = whatIsInAName(collection, source)
    expect(result).toStrictEqual([
      { apple: 1 },
      { apple: 1 },
      { apple: 1, bat: 2 },
    ])
  })

  test("should return objects that contain apple: 1 and bat: 2", () => {
    const collection = [
      { apple: 1, bat: 2 },
      { bat: 2 },
      { apple: 1, bat: 2, cookie: 2 },
    ]
    const source = { apple: 1, bat: 2 }
    const result = whatIsInAName(collection, source)
    expect(result).toStrictEqual([
      { apple: 1, bat: 2 },
      { apple: 1, bat: 2, cookie: 2 },
    ])
  })

  test("should return the object with apple: 1 and cookie: 2", () => {
    const collection = [
      { apple: 1, bat: 2 },
      { apple: 1 },
      { apple: 1, bat: 2, cookie: 2 },
    ]
    const source = { apple: 1, cookie: 2 }
    const result = whatIsInAName(collection, source)
    expect(result).toStrictEqual([{ apple: 1, bat: 2, cookie: 2 }])
  })

  test("should return objects that have apple: 1 and bat: 2", () => {
    const collection = [
      { apple: 1, bat: 2 },
      { apple: 1 },
      { apple: 1, bat: 2, cookie: 2 },
      { bat: 2 },
    ]
    const source = { apple: 1, bat: 2 }
    const result = whatIsInAName(collection, source)
    expect(result).toStrictEqual([
      { apple: 1, bat: 2 },
      { apple: 1, bat: 2, cookie: 2 },
    ])
  })

  test("should return an empty array when there are no matches", () => {
    const collection = [{ a: 1, b: 2, c: 3 }]
    const source = { a: 1, b: 9999, c: 3 }
    const result = whatIsInAName(collection, source)
    expect(result).toStrictEqual([])
  })

  test("should return an empty array when a key does not match", () => {
    const collection = [{ a: 1, b: 2, c: 3, d: 9999 }]
    const source = { a: 1, b: 9999, c: 3 }
    const result = whatIsInAName(collection, source)
    expect(result).toStrictEqual([])
  })
})

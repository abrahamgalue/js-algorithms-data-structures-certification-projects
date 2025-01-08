/*
Wherefore art thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
*/

export const ERR_INVALID_NUM_ARGS = 'The function receives only an array and an object as arguments'
export const ERR_FIRST_ARG_NOT_ARRAY = "First argument must be an array"
export const ERR_SECOND_ARG_NOT_OBJECT = "Second argument must be a non-null object"

export function whatIsInAName(collection, source) {
  if (arguments.length !== 2) throw new Error(ERR_INVALID_NUM_ARGS)

  if (!(collection instanceof Array)) {
    throw new Error(ERR_FIRST_ARG_NOT_ARRAY)
  }

  if (!(source instanceof Object) || source instanceof Array) {
    throw new Error(ERR_SECOND_ARG_NOT_OBJECT)
  }

  const objKeys = Object.keys(source)

  return collection.filter((obj) =>
    objKeys.every(
      (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
    )
  )
}

// test here
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
// → [ { first: 'Tybalt', last: 'Capulet' } ]

whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })
// → [ { apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 } ]

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })
// → [ { apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 } ]

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })
// → [ { apple: 1, bat: 2, cookie: 2 } ]

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 })
// → [ { apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 } ]

whatIsInAName([{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 })
// → []

whatIsInAName([{ "a": 1, "b": 2, "c": 3, "d": 9999 }], { "a": 1, "b": 9999, "c": 3 })
// → []
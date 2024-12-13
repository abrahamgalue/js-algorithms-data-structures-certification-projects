/**
 * Everything Be True
 *
 * Check if the predicate (second argument) is truthy on
 * all elements of a collection (first argument).
 *
 * In other words, you are given an array collection of
 * objects. The predicate pre will be an object property
 * and you need to return true if its value is truthy.
 * Otherwise, return false.
 *
 * In JavaScript, truthy values are values that translate
 * to true when evaluated in a Boolean context.
 *
 * Remember, you can access object properties through
 * either dot notation or [] notation.
 */

export const INVALID_ARGS = 'The function receives an array of objects (first argument) and a property of those objects (second argument)'

export function truthCheck(collection, pre) {
  if (arguments.length !== 2) throw new Error(INVALID_ARGS)
  if (!(collection instanceof Array) && typeof pre !== 'string') throw new Error(INVALID_ARGS)

  return collection.every((x) => x[pre]);
}

// test here

truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true },
  ],
  "isBot"
)
// → false


truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true },
  ],
  "name"
)
// → true


truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true },
  ],
  "role"
)
// → false


truthCheck(
  [
    { name: "Pikachu", number: 25, caught: 3 },
    { name: "Togepi", number: 175, caught: 1 },
  ],
  "number"
)
// → true


truthCheck(
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
  "data"
)
// → true


truthCheck(
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
)
// → false

/*
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

export function booWho(bool) {
  return (typeof bool === "boolean");
}

console.log(booWho(null));
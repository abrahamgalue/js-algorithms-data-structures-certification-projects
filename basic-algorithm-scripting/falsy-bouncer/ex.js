/*
Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/

function bouncer(arr) {
    return arr.filter(value => Boolean(value));
}

console.log(bouncer([7, "ate", "", false, 9])); // [7, "ate", 9]
console.log(bouncer([false, null, 0, NaN, undefined, ""])); // []
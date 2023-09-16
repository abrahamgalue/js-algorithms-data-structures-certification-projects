/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/

function mutation(arr) {
    const letters = arr[1].toLowerCase();
    const str = arr[0].toLowerCase();
    // return [...letters].every(letter => str.includes(letter));
    for (let i = 0; i < letters.length; i++) {
        if (str.indexOf(letters[i]) < 0) return false;
    }
    return true;
}

mutation(["hello", "hey"]);
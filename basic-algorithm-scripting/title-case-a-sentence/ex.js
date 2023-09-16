/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

function titleCase(str) {
    const words = str.split(" ");
    const newStr = [];
    for (let i = 0; i < words.length; i++) {
        newStr[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return newStr.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
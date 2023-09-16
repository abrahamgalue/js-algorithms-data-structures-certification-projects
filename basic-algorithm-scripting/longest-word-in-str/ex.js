/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
    let words = str.split(' ');
    let result = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > result) {
            result = words[i].length;
        }
    }

    return result;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
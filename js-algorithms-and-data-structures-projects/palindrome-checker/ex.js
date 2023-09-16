const isPalindrome = (str) => {
    str = str.replace(/\s/g, '')
    const lowered = str.toLowerCase()
    const splitted = lowered.split('')
    const reversed = splitted.reverse()
    const joined = reversed.join('')
    return lowered == joined
}

const a = isPalindrome('Do geese see God')
console.log(a);
const b = isPalindrome('Was it a car or a cat I saw')
console.log(b);
const c = isPalindrome('Rats live on no evil star')
console.log(c);
const d = isPalindrome('Step on no pets')
console.log(d);
export const ERR_INVALID_ARG_TYPE = "The argument must be a string"

export const isPalindrome = (str) => {
  if (typeof str !== "string") throw new Error(ERR_INVALID_ARG_TYPE)

  str = str.replace(/\s/g, '')
  const lowered = str.toLowerCase()
  const splitted = lowered.split('')
  const reversed = splitted.reverse()
  const joined = reversed.join('')
  return lowered == joined
}

isPalindrome('Do geese see God')
isPalindrome('Was it a car or a cat I saw')
isPalindrome('Rats live on no evil star')
isPalindrome('Step on no pets')
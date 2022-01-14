var upperCaseCodes = arrayLowHigh (65, 90);
var lowerCaseCodes = arrayLowHigh (97, 122);
var numberCodes = arrayLowHigh(48, 57);
var specialCodes = arrayLowHigh(33, 47).concat(
  arrayLowHigh(58, 64)
  ).concat(
    arrayLowHigh(91, 96)
    ).concat(
      arrayLowHigh(123, 126)
    )

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = lowerCaseCodes
  if (includeUppercase) charCodes = charCodes.concat(upperCaseCodes)
  if (includeSymbols) charCodes = charCodes.concat(lowerCaseCodes)
  if (includeNumbers) charCodes = charCodes.concat(numberCodes)
  
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}
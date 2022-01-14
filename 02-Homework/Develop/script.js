// Assignment Code
var generateBtn = document.querySelector("#generate");
var genPW = document.getElementById("password");

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



function arrayLowHigh (low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






function generatePassword () {
  for (var i = 0, i = pwLength; i++;) {
    var charset = "1234567890qazwsxedcrfvtgbyhnujmiklop!@#$%^&*()QAZWSXEDCRFVTGBYHNUJMIKLOP";
    var pwLength = 12;
    var genPW = "";
    var randomPW = Math.floor(Math.random() * charset.length);
    genPW += charset.substring(randomPW, randomPW +1);
  }
  document.getElementById("password").value = password;
}
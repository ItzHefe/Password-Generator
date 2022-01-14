// Assignment Code
var generateBtn = document.querySelector("#generate");
var genPW = document.getElementById("password");
var upperSet = ("QAZWSXEDCRFVTGBYHNUJMIKLOP");
var lowerSet = ("qazwsxedcrfvtgbyhnujmiklop");
var numberSet = ("123456789");
var specialSet = ("!@#$%^&*()");

function generatePassword () {
  
    var charset = ("qazwsxedcrfvtgbyhnujmiklop123456789QAZXSWEDCVFRTGBNHYUJMKIOLP!@#$%^&*()");
    var pwLength = 12;
    var genPW = "";

    for (var i = 0, n = charset.length; i <= pwLength; ++i) {
      genPW += charset.charAt(Math.floor(Math.random() * n));
  }
  return genPW
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

document.querySelector('#generate').addEventListener('click', promptMe);

function promptMe() {
  var selectUpper = window.prompt ("Include uppercase? Type Y or Yes");
  var selectLower = window.prompt ("Include lowercase? Type Y or Yes");
  var selectNumber = window.prompt ("Include numbers? Type Y or Yes");
  var selectSpecial = window.prompt ("Include Characters? Type Y or Yes");
}

selectUpper = selectUpper.toUpperCase();
selectLower = selectLower.toUpperCase();
selectNumber = selectNumber.toUpperCase();
selectSpecial = selectSpecial.toUpperCase();




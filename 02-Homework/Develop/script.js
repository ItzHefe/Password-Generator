// Assignment Code
var generateBtn = document.querySelector("#generate");
var genPW = document.getElementById("password");

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






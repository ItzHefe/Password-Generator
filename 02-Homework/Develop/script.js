// Assignment Code
var generateBtn = document.querySelector("#generate");
var genPW = document.getElementById("password");
var upperSet = ("QAZWSXEDCRFVTGBYHNUJMIKLOP");
var lowerSet = ("qazwsxedcrfvtgbyhnujmiklop");
var numberSet = ("123456789");
var specialSet = ("!@#$%^&*()");

document.querySelector('#generate').addEventListener('click', promptMe);

function promptMe() { 
};

// function to start PW Generation
function generatePassword () {

  //first user input of pw length
    lengthChar = parseInt(prompt ("How many characters? 8-128"));
    if (!lengthChar) {
        alert("Please enter a value"); 
    } else if (lengthChar < 8 || lengthChar > 128) {

      //confirming use chose a valid value
      lengthChar = parseInt(prompt("Choose between 8 and 128"));
    } else {

      //confirming other criteria for pw
      lowerSet = confirm("Include lowercase characters?");
      upperSet = confirm("Include uppercase characters?");
      numberSet = confirm("Include numbers?");
      specialSet = confirm("Include special characters?");
    };

    // if the user doesn't select anything
    if (!lowerSet && !upperSet && !numberSet && !specialSet) {
      userInput = alert("Please choose a criteria.");
    }

    //choosing all inputs
    else if (lowerSet && upperSet && numberSet && specialSet) {
      userInput = lowerSet.concat(upperSet, numberSet, specialSet);
    }

    //choosing 3 inputs
    else if (lowerSet && upperSet && numberSet) {
      userInput = lowerSet.concat(upperSet, numberSet);
    }

    else if (upperSet && numberSet && specialSet) {
      userInput = upperSet.concat(numberSet, specialSet);
    }

    else if (lowerSet && numberSet && specialSet) {
      userInput = lowerSet.concat(numberSet, specialSet);
    }
  
    //choosing 2 inputs


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
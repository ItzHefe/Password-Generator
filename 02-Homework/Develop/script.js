// Assignment Code
var generateBtn = document.querySelector("#generate");
var genPW = document.getElementById("password");
var upperSet = ("QAZWSXEDCRFVTGBYHNUJMIKLOP");
var lowerSet = ("qazwsxedcrfvtgbyhnujmiklop");
var numberSet = ("123456789");
var specialSet = ("!@#$%^&*()");



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
    else if (lowerSet && upperSet) {
      userInput = lowerSet.concat(upperSet);
    }
    
    else if (lowerSet && numberSet) {
      userInput = lowerSet.concat(numberSet);
    }

    else if (lowerSet && specialSet) {
      userInput = lowerSet.concat(specialSet);
    }

    else if (upperSet && numberSet) {
      userInput = upperSet.concat(numberSet);
    }

    else if (upperSet && specialSet) {
      userInput = upperSet.concat(specialSet);
    }

    else if (numberSet && specialSet) {
      userInput = numberSet.concat(specialSet);
    }

    //choosing 1 input

    else if (lowerSet) {
      userInput = lowerSet;
    }

    else if (upperSet) {
      userInput = upperSet;
    }

    else if (numberSet) {
      userInput = numberSet;
    }

    else if (specialSet) {
      userInput = specialSet;
    }

    var genPW = [];


    for (var i = 0; i <= lengthChar; i++) {
      var pickInput = userInput[Math.floor(Math.random() * userInput.length)];
      password.push(pickInput);
  }
  var ps = genPW.join("");
  userInput (ps);
  return ps;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
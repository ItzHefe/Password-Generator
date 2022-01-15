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
    userInput = parseInt(prompt ("How many characters? 8-128"));
    if (!userInput) {
        alert("Please enter a value"); 
    } else if (userInput < 8 || userInput > 128) {

      //confirming use chose a valid value
      userInput = parseInt(prompt("Choose between 8 and 128"));
    } else {

      //confirming other criteria for pw
      var userLowerSet = confirm("Include lowercase characters?");
      var userUpperSet = confirm("Include uppercase characters?");
      var userNumberSet = confirm("Include numbers?");
      var userSpecialSet = confirm("Include special characters?");
    };

    var charSet

    // if the user doesn't select anything
    if (!userLowerSet && !userUpperSet && !userNumberSet && !userSpecialSet) {
      alert("Please choose a criteria.");
    }

    //choosing all inputs
    else if (userLowerSet && userUpperSet && userNumberSet && userSpecialSet) {
      charSet = lowerSet.concat(upperSet, numberSet, specialSet);
    }

    //choosing 3 inputs
    else if (userLowerSet && userUpperSet && userNumberSet) {
      charSet = lowerSet.concat(upperSet, numberSet);
    }

    else if (userUpperSet && userNumberSet && userSpecialSet) {
      charSet = upperSet.concat(numberSet, specialSet);
    }

    else if (userLowerSet && userNumberSet && userSpecialSet) {
      charSet = lowerSet.concat(numberSet, specialSet);
    }
  
    //choosing 2 inputs
    else if (userLowerSet && userUpperSet) {
      charSet = lowerSet.concat(upperSet);
    }
    
    else if (userLowerSet && userNumberSet) {
      charSet = lowerSet.concat(numberSet);
    }

    else if (userLowerSet && userSpecialSet) {
      charSet = lowerSet.concat(specialSet);
    }

    else if (userUpperSet && userNumberSet) {
      charSet = upperSet.concat(numberSet);
    }

    else if (userUpperSet && userSpecialSet) {
      charSet = upperSet.concat(specialSet);
    }

    else if (userNumberSet && userSpecialSet) {
      charSet = numberSet.concat(specialSet);
    }

    //choosing 1 input

    else if (userLowerSet) {
      charSet = lowerSet;
    }

    else if (userUpperSet) {
      charSet = upperSet;
    }

    else if (userNumberSet) {
      charSet = numberSet;
    }

    else if (userSpecialSet) {
      charSet = specialSet;
    }

    var genPW = "";

    //for loop to consider user selected criteria and generate a response
    for (var i = 0; i < userInput; i++) {
      var pickInput = charSet[Math.floor(Math.random() * charSet.length)];
      genPW = genPW.concat(pickInput);
  }
  
  return genPW;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
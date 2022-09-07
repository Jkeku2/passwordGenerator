// Assignment code here
// based off of ebbsizzlin project
// https://github.com/ebsizzlin/PasswordGenerator
// edits:
// code styling 
// error handling
// * no longer gives alert upon cancelling out of prompts

function generatePassword() {
  // characters in variables arrays
  numberArray = "0123456789";

  specialArray = "`~!@#$%^&*()_-+={[}]|\"':;<,>.?/";

  upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  lowerArray = "abcdefghijklmnopqrstuvwxyz";

  var characterCount = prompt("How many characters in the password?");
  if (!characterCount) {
    return;
  } if (typeof parseInt(characterCount) != 'number') {
    alert("Enter a number!");
  } else if (characterCount < 8 || characterCount > 128) {
    characterCount = alert("Pick a number between 8 and 128.");
  } else {
    confirmNumber = confirm("Do you want to use numbers?");
    confirmSpecial = confirm("Do you want to use special characters?");
    confirmUpper = confirm("Do you want to use uppercase letters?");
    confirmLower = confirm("Do you want to use lowercase letters?");
  }

  var characterArray = "";

  if (confirmNumber) {
    characterArray += numberArray;
  }
  if (confirmSpecial) {
    characterArray += specialArray;
  }
  if (confirmUpper) {
    characterArray += upperArray;
  }
  if (confirmLower) {
    characterArray += lowerArray;
  } else if (
    !confirmNumber &&
    !confirmSpecial &&
    !confirmUpper &&
    !confirmLower
  ) {
    alert("Pick at least one of the four options.");
  }

  var randomPassword = "";

  for (var i = 0; i < characterCount; i++) {
    var index = Math.floor(Math.random() * characterArray.length);
    randomPassword += characterArray[index];
  }
  return randomPassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  if (password != null){
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

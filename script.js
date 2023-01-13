var generateBtn = document.querySelector("#generate");
var numberChars = "0123456789";
var specialChars = "!@#$%^&*()";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


function generatePassword() {
  console.log("hello from generate password")
  console.log("password length", passwordLength)
  var uppercaseCharacters = confirm("Want uppercase? Press OK for Yes")
  console.log(uppercaseCharacters)
  var lowercaseCharacters = confirm("Want lowercase? Press OK for Yes")
  var numbers = confirm("Want numbers? Press OK for Yes")
  var specialCharacters = confirm("Want special characters? Press OK for Yes")
  var passwordLength = prompt("How many characters in password, between 8 and 128?")
var allYesResponses = "";

if (uppercaseCharacters === true) {
allYesResponses = allYesResponses.concat(upperChars)
  

if (lowercaseCharacters === true){
  allYesResponses = allYesResponses.concat(lowerChars)
  
}
console.log(allYesResponses)
}

// Assignment Code


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

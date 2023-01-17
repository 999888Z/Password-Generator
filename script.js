var generateBtn = document.querySelector("#generate");
var numberChars = "0123456789";
var specialChars = "!@#$%^&*()";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


function generatePassword() {
  
  var passwordLength = prompt("How many characters in password, between 8 and 128?")
  console.log("password length", passwordLength)
  
 // Validate password length
    if (passwordLength >= 8 && passwordLength <= 128){

    }
    else {
    alert("You must enter a number between 8 and 128. Start again.") 
    return
  }
 
  // Confirm which characters to use
  var uppercaseCharacters = confirm("Want uppercase? Press OK for Yes")
  var lowercaseCharacters = confirm("Want lowercase? Press OK for Yes")
  var numbers = confirm("Want numbers? Press OK for Yes")
  var specialCharacters = confirm("Want special characters? Press OK for Yes")
  
var allYesResponses = "";


// Confirm what to include in password
if (uppercaseCharacters === true) {
allYesResponses = allYesResponses + upperChars
}

if (lowercaseCharacters === true){
  allYesResponses = allYesResponses + lowerChars
  
}

if(numbers === true){
  allYesResponses = allYesResponses + numberChars
}

if(specialCharacters === true){
  allYesResponses = allYesResponses + specialChars
}
console.log(allYesResponses)
var password = "";
for (let index = 0; index < passwordLength; index++) {
  // Pick Random Character
  var randomCharacter = allYesResponses[Math.floor(Math.random() * allYesResponses.length)]
  console.log(randomCharacter)
  password = password + randomCharacter
  
}
return password
}
// Assignment Code


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  console.log(password)
if (password == undefined) {
 passwordText.value = "Try Again."
 }
 else {
  passwordText.value = password
 }
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

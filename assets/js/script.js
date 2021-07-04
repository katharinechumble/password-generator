// Assignment code here
alert("Select from the following options to create a randomly generated secure password.");
var passwordLength = prompt("How long do you want your password to be? Passwords may be no shorter than 8 characters and no longer than 128 characters");
if (passwordLength <= 7 || passwordLength >= 129) {
  alert("Sorry! Passwords may not be longer than 128 characters or shorter than 8 characters.  Please try again!");
} else {
  var alphaChar = confirm("Would you like to include letters?");
  var numChar = confirm("Would you like to include numbers?");
  var specChar = confirm("Would you like to include special characters?");
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate", "#btn");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var letters = 'abcdefghijklmnopqrstuvwxyzABCDEGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '0123456789';
  var specialCharacters = '!@$%#&*+=?';
  var minLength = 8;
  var maxlength = 128;
  var newPassword = "";
  var alphaNumber = letters.concat(numbers);
  var alphaNumberSpec = letters.concat(numbers,specialCharacters);
  var alphaSpec = letters.concat(specialCharacters);
  var numberSpec = numbers.concat(specialCharacters);
  if (alphaChar === true && numChar === false && specChar === false) {
    for (var i = 0; i <= maxlength; i >= minLength, ++i)
    newPassword = newPassword + letters.charAt(Math.floor(Math.random() * i));
  } 
  
  else (alphaChar === true && numChar === true && specChar === false)  
    for (var i = 0; i <= maxlength; i >= minLength, ++i)
    newPassword = newPassword + alphaNumber.charAt(Math.floor(Math.random() * i));
  


  if (alphaChar === true && numChar === true && specChar === true) {
    for (var i = 0; i <= maxLength; i >= minLength, ++i)
    newPassword = newPassword + alphaNumberSpec.charAt(Math.floor(Math.random() * i));
  } else (alphaChar === true && numChar === false && specChar === true) 
    for (var i = 0; i <= maxLength; i >= minLength, ++i)
  newPassword = newPassword + alphaSpec.charAt(Math.floor(Math.random() * i));

  if (alphaChar === false && numChar === true && specChar === true) {
    for (var i = 0; i <= maxLength; i >= minLength, ++i)
    newPassword = newPassword + numberSpec.charAt(Math.floor(Math.random() * i));
  }

  generatePassword.onclick();
  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener ("click", function() {
  ps = writePassword();
  document.getElementById("password").placeholder =ps;
}, btn);
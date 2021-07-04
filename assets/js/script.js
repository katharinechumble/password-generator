// Assignment code here
alert("Select from the following options to create a randomly generated secure password.");
var passwrdLength = prompt("How long do you want your password to be? Passwords may be no shorter than 8 characters and no longer than 128 characters");
if (passwrdLength <= 7 || passwrdLength >= 129) {
  alert("Sorry! Passwords may not be longer than 128 characters or shorter than 8 characters.  Please try again!");
} else {
  var alphaChar = confirm("Would you like to include letters?");
  var numChar = confirm("Would you like to include numbers?");
  var specChar = confirm("Would you like to include special characters?");
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(len, charset) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  const alphaChar = 'abcdefghijklmnopqrstuvwxyzABCDEGHIJKLMNOPQRSTUVWXYZ';
  const numChar = '0123456789';
  const specChar = '!@$%#&*+=?';
  


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

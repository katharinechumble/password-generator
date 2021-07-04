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
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(i);
  var passwordText = document.querySelector("#password");
  var letters = 'abcdefghijklmnopqrstuvwxyzABCDEGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '0123456789';
  var specialCharacters = '!@$%#&*+=?';
  var minLength = 8;
  var maxlength = 128;
  var newPassword = "";
  var alphaNumber = letters.concat(numbers);
  var alphaNumberSpec = letters.concat(numbers,specialCharacters);
  console.log(writePassword);
  if (passwordLength >= 8 && passwordLength <= 128 && alphaChar === true) {
    for (var i = 0; i <= maxlength; i >= minLength, ++i)
    newPassword = newPassword + letters.charAt(Math.floor(Math.random() * i));
  }


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

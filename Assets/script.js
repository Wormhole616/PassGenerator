// Assignment Code
// access the button in index file
var generateBtn = document.querySelector("#generate");


function generatePassword() {
var input = parseInt(prompt ('How many character do you need? Please hit ENTER to submit'));
var passwordLenght = input;
var password = '';
console.log(input);
if (input < 8 || input > 128) {
  alert ('Please pick a number between 8 & 128');
  return;
  
}
console.log (isNaN(input));
if (isNaN(input)) {
  alert ('Please pick a number');
  return;
}
var inputLowercase = window.confirm ('Do you need lower case letters?');
var inputUpperCase = window.confirm ('Need upper cases?');
var inputNumber = window.confirm ('Should we add numbers?');
var inputEspecialChar = window.confirm ('Do you want especial characters?');

var characters = "";
if (inputLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
if (inputUpperCase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if (inputNumber) characters += '0123456789';
if (inputEspecialChar) characters += '!@#$%^&*';

for ( var i = 0; i < passwordLenght; i++) {
  password += characters.charAt(Math.floor(Math.random() * characters.length));
}
return password;



};

// Write password to the #password input
function writePassword() {
  // console.log('function');
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  // console.log(passwordText);
  passwordText.value = password;



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




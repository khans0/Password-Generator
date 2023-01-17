// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt("Enter the desired length of your password (between 10 and 64 characters):"))


  // Validate password length
  while(length < 10 || length > 64) {
    alert("Password length must be between 10 and 64 characters. Please try again.")
    var length = parseInt(prompt("Enter the desired length of your password (between 10 and 64 characters):"))
  }
  var hasSpecialCharacters = confirm("Click OK to include special characters in your password.")
  var hasNumericCharacters = confirm("Click OK to include numeric characters in your password.")
  var hasLowerCasedCharacters = confirm("Click OK to include lowercase characters in your password.")
  var hasUpperCasedCharacters = confirm("Click OK to include uppercase characters in your password.")


// Validate at least one character type selected
  if(!hasSpecialCharacters && !hasNumericCharacters && !hasLowerCasedCharacters && !hasUpperCasedCharacters) {
    alert("You must select at least one character type. Please try again.")
    return getPasswordOptions()
  }


// Return as an object
  return {
    length,
    hasSpecialCharacters,
    hasNumericCharacters,
    hasLowerCasedCharacters,
    hasUpperCasedCharacters
  }
}

// Get random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// Generate password with user input
function generatePassword() {
  
// Get options
  var options = getPasswordOptions()
  var result = []
  var possibleCharacters = []
  var guaranteedCharacters = []

  // Add possible characters based on options
if(options.hasSpecialCharacters) possibleCharacters = possibleCharacters.concat(specialCharacters)
if(options.hasNumericCharacters) possibleCharacters = possibleCharacters.concat(numericCharacters)
if(options.hasLowerCasedCharacters) possibleCharacters = possibleCharacters.concat(lowerCasedCharacters)
if(options.hasUpperCasedCharacters) possibleCharacters = possibleCharacters.concat(upperCasedCharacters)

 // Add random possible characters to result
 for(var i = 0; i < options.length; i++) {
  var possibleCharacter = getRandom(possibleCharacters)
  result.push(possibleCharacter)
}
// Add guaranteed characters to the start of result
if(options.hasSpecialCharacters) guaranteedCharacters.push(getRandom(specialCharacters))
if(options.hasNumericCharacters) guaranteedCharacters.push(getRandom(numericCharacters))
if(options.hasLowerCasedCharacters) guaranteedCharacters.push(getRandom(lowerCasedCharacters))
if(options.hasUpperCasedCharacters) guaranteedCharacters.push(getRandom(upperCasedCharacters))

for(var i = 0; i < guaranteedCharacters.length; i++) {
  result[i] = guaranteedCharacters[i]
}

// Return result as a string
return result.join('')
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


// Assignment Code

// 1. Need to choose length of password between 8 and 128 charcters in lenght.
// 1a. if a number less 8 or more than  128 is selected then needs a prompt
// 1b. if not a number is entered then needs a prompt.
// 2. When correct number chosen offer the choice of four variables, Upper & Lowercase, symbols and number.
// 3. Each variable in turn will be yes or no (true or false=boolean)
// 4. Concatonate the answers
// 5. Display the password

var generateBtn = document.querySelector("#generate");

const numbers=[0,1,2,3,4,5,6,7,8,9]
const uppercase=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const symbol=["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " ' ", " ", ' " ', "\\" ];
let pwGen = "";




// generate password
function generatePassword () {

  let lengthChoice = "";
  let userChoices = "";

//request to choose length in digits.
  lengthChoice = prompt ("please choose password length from 8 to 128 characters")
if (lengthChoice <8 || lengthChoice >128) {
  alert ("sorry your password must be more than 8 and less than 128 characters in length")
}
if (isNaN(parseInt(lengthChoice))) {
 alert ("Sorry it needs to be a valid number") 

}

//request to select letters, numbers and symbols.
let checkNumber=confirm("Would you like numbers in your password? Please click OK for yes and cancel for no ")
let checkUcase=confirm("Would you like uppercase letters in your password? Please click OK for yes and cancel for no ")
let checkLcase=confirm("Would you like lowercase letters in your password? Please click OK for yes and cancel for no ")
let checkSymbol=confirm("Would you like any symbols in your password? Please click OK for yes and cancel for no ")
console.log(checkNumber, checkUcase, checkLcase, checkSymbol);

if (checkNumber == true ){
userChoices = userChoices.concat(numbers)
}
  
if (checkUcase == true ){
  userChoices = userChoices.concat(uppercase)
  }
  
if (checkLcase == true ){
    userChoices = userChoices.concat(lowercase) 
    }

if (checkSymbol == true ){
      userChoices = userChoices.concat(symbol) 
      }


if(checkNumber == false && checkUcase == false && checkLcase == false && checkSymbol ==false) {
  alert ("Please select one option")
}

  
if(checkNumber == true || checkUcase == true || checkLcase == true || checkSymbol ==true) {
  alert ("Thank You") 
 
  
}

var passwordText = document.querySelector("#password");
pwGen=writePassword(lengthChoice, userChoices)
document.getElementById("password").innerHTML=pwGen;

// Write password to the #password input

function writePassword(l, userChoices) {
  
  
 // var password = generatePassword("");
  
 var pwGen= "";

  for (let i = 0; i < l; i++) {
  pwGen += userChoices.charAt(Math.floor(Math.random()*userChoices.length));

  }
return pwGen;

//placing the closing bracket here brought the passwordText.Value back to bright blue
}
// passwordText.value = password;
}
// Add event listener to generate button.
generateBtn.addEventListener("click", generatePassword)


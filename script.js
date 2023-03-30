//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Assignment Code

//make arrays of lower and upper letters, number , and symbols
var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];


//return the password var

var characters = [];
// var allCharRandom = [];

//make generatePassword function
const generateFinalPassword = (length,) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
};

//prompt for password length is a number
//if statment if number is above 8 && below 128
function generatePassword() {
  characters = [];
  passwordLength = prompt("How long do you want your password? (Keep password between 8 and 128 characters)"); 
    if (passwordLength >= 8 && passwordLength <= 128){
      alert("Thanks");
    }else{
      alert("Invalid: please choose between 8 and 128!");
    }  

  symbolsQ();
  lettersUpperQ();
  numbersQ();
  lettersQ();
  // check if character is empty?
  if (characters.length === 0) {
    alert("You chose poorly, here's a password!")
    characters = characters.concat(symbols);
    characters = characters.concat(lettersUpper);
    characters = characters.concat(numbers);
    characters = characters.concat(letters);
  }
  // if yes, add all characters to characters
  return generateFinalPassword(passwordLength);  
}
//confirm for lowercase, uppercase, numeric and special characters
function symbolsQ() {
  passwordSymbol = confirm("Do you want special characters? ok = yes cancel = no"); 
    if (passwordSymbol){
      characters = characters.concat(symbols)
      // console.log(characters);   
    } else {

      alert("No special fairy dust for you!");
    }
}

function lettersUpperQ() {
  passwordlettersUpper = confirm("Do you want UPPERCASE letters?  ok = yes cancel = no"); 
    if (passwordlettersUpper){
      characters = characters.concat(lettersUpper)
      // console.log(characters);
    }else {
      alert("NO SOUP FOR YOU!!!");

    }   
}

function lettersQ() {
  var lower = confirm("Do you want a lowercase letters?  ok = yes cancel = no");
    if (lower){
      characters = characters.concat(letters)
      // console.log(characters);
    } else {
      alert("what, little letters not cool enough for you??");

    }
}
// letters();

function numbersQ() {
  var numbs = confirm("Do you want any numbers?  ok = yes cancel = no");
    if (numbs){
      characters = characters.concat(numbers)
      // console.log(characters);
    } else {
      alert("Fine then, no num83r5 up in here!");
    }
    console.log(characters)
    
  } 

// numbers();




//store there response in a variable


//for them saying N to all...in this for loop we would randomly pull characters from the big array
//pull random characters from the array using math.random 

//have a var declared above for loop
//that var += theRandomChar
//return the password var

//edge cases to look out for if they hit no for every ask
// we can use a while loop too
//is not required to select all three criteria num letter chars
//just dont touch the HTML and CSS in this case just JavaScript
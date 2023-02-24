## 3 Boolean (true/false)
True/False values are called 'Booleans'. 
This sections also includes 'conditionals' and 'ternary'.
## Operators 
== 	equal to, e.g. 	if (day == "Monday")
> 	greater than, e.g. 	if (salary > 9000)
< 	less than, e.g.  	if (age < 18)
## Example 1 
const isDogBetter = true; 
isCatBetter = false;

console.log(`${isDogBetter && isCatBetter}`); // false 
console.log(`${isDogBetter || isCatBetter}`); // true because 1st is true
console.log(`${!(isDogBetter && isCatBetter)}`); // true because since true && false cannot be true, so !(true && false) must be true.

## Example 2 
const apples = 20;
const oranges = 30;
console.log(apples == oranges); 
// false 
console.log(apples !== oranges); 
// true

## Example 3 
let myVar = true;
// the opposite of a variable myVar is !myVar
console.log(!myVar ? 'good morning' : 'good evening');
let myVar2 = true;
// the opposite of a variable myVar is !myVar
console.log(myVar2 ? 'good morning' : 'good evening');

//good evening
//good morning

## 3 + 2 
## Boolean + String
## Example 1  
const isDog = true;

isDog == true ? console.log("Pat, pat, good dog"): console.log("Find me a dog to pat!");
// Pat, pat, good dog

## Example 2 
const okMarie = "bread";
okMarie == "cake"? console.log("Let them eat cake") : console.log("Oh, bother");
//Oh, bother

## Example 3 
let login="Director"

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  ''; 
console.log(message)
//Greetings

## Example 4 
const isStudent = false;

console.log(isStudent == true? "Ticket costs €5,00": "Ticket costs €12,00")
//Ticket costs €12,00


## 3 + 4 || 4 + 3
## Boolean + Number 

## Example 1
const apples = 20;
const oranges = 30;
const mangoes = 5;

console.log((mangoes + apples) >= (oranges - mangoes)); 
// true

## Example 2 
function checkAge(age) {
  if(age>18){
    return true
  }else{
    return false
  }
  }
console.log(checkAge(15))
  // false

## Example 3  
  function min(a, b) {
    if(a>b){
      return b
    }else{
      return a
    }
  }
console.log(min(7, 3))
  //3

## Example 4 
let int1 = 1; let int2 = 50;

if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99)) {
    console.log(true);
} else {
    console.log(false);
}
// true

## Example 5
const myNum = 10;

if ((myNum % 3 == 0) && (myNum % 5 == 0)) {
    console.log("Fizzbuzz");
} else if (myNum % 3 == 0) {
    console.log("Fizz");
} else if (myNum % 5 == 0) {
    console.log("Buzz")
} else {
    console.log("What fresh hell is this?") 
    // this is good if the input is, despite all instructions, not a number.
}
//Buzz 


## Boolean + Loop

## Example 6 
function validate(email) {
  let atSymPos;
  let atSymCounter = 0;
  let dotPos;

  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      atSymCounter++;
      atSymPos = i;
      if (atSymPos === dotPos + 1) {
        return false; //checks if "." is directly before "@"
      }
      // inspect code at work: console.log(`@ located at ${atSymPos}`);
    }
    if (email[i] === ".") {
      dotPos = i; // NB: if there are multiple dots, Pos will indicate last dot placement
      // inspect code at work: console.log(`. located at ${dotPos}`);
      if (dotPos === atSymPos + 1) {
        // checks if "." is directly after "@"
        return false;
      }
      if (email[dotPos + 1] === ".") {
        // checks if there are consecutive "."
        return false;
      }
    }
  }

  if (atSymCounter !== 1 || atSymPos === 0 || atSymPos === email.length - 1) {
    //checks if we have exactly 1 "@" character AND that the "@" is NOT first or last character
    return false;
  } else if (
    email[0] === "." ||
    dotPos < atSymPos ||
    dotPos === email.length - 1
  ) {
    // checks if "." is first character, AND if there is no "." after "@", AND "." is NOT last character
    return false;
  } else {
    return true;
  }
}

console.log(validate("j@example.com"));
// Expected output: true
console.log(validate("@example.com)"));
//  Expected output:false

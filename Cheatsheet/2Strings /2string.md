## 2 String 
Any message (what we say, write, type in order to inform about something) is a 'string'. 
A string has single or double quotes, e.g. 'hi', "hi", ' s/he says "hi" ', " s/he says 'hi' " 
JavaScript strings are for storing and manipulating text.


## Declaration
const string1 = "This is a string. It is a message";
let string2="This is also a string. It is another message. Whatever someone says, informs, types or writes is a message"; 
const string3 = new String("A string always has quotation marks");
let text = "We are the so-called \"Vikings\" from the north."; 
let text2 = 'It\'s alright.';

## Main String Methods 
### nameStr.substring()
### Example 1
const parkWalkStr = "I can walk in the park all day!";
console.log(parkWalkStr.substring(18, 22));
// park

### Example 2 
const strPrefix = "Py";

const str = "thon";

if (str.substring(0, 2) == "Py") {
    console.log(str);
} else {
    console.log(`${strPrefix}${str}`);
}
//Python

### nameStr.toUpperCase()
const helloStr = "Hello World";
console.log(helloStr.toUpperCase());
// HELLO WORLD

### nameStr.toLowerCase()
const earthlingsStr = "Hello Earthling";
console.log(earthlingsStr.toLowerCase());
//hello earthling

### nameStr.includes(). Find a letter/character  
const niceShoesStr = "nice shoes";
console.log(niceShoesStr.includes("l")); // false 
console.log(niceShoesStr.includes("n")); // true

### nameStr.length 
### Example 1 
console.log("Nargiza".length) 
//7 

### Example 2 
const programmingLanguage = "JavaScript";
console.log(programmingLanguage.length);
//10 characters in "JavaScript"

## nameStr.concat
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// expected output: "Hello World"

console.log(str2.concat(', ', str1));
// expected output: "World, Hello"

## nameStr.reverse()
const string = "Hello World";
strToArr = string.split("");
strToArr.reverse();
const reversedString = strToArr.join("");
console.log(reversedString);
//dlroW olleH

## 2 + 2 
## String + String 
## Example 1 
const firstName = "Lola";
const city = "Copa-Copacabana";
const job = "showgirl";
console.log(`My name is ${firstName}. I live in ${city} and I am a ${job}`);

## Example 2 
const strPrefix = "Py";

const str = "thon";

if (str.substring(0, 2) == "Py") {
    console.log(str);
} else {
    console.log(`${strPrefix}${str}`);
}
//Python

## 2 + 5 || 5 + 2 
## String + Loop 
for (let i = 0; i < 4; i++) {
    let asteriskStr = "";
    for (let y = 0; y <= i; y++) {
        asteriskStr += "s";
    }
    console.log(asteriskStr);
}
//*
// **
// ***
// ****

## 2 + 4
## String + Number 
## Example 1 
function dogAge(AgeInHumanYears) {
  const DOGGO_YEARS = AgeInHumanYears * 7;
  return `Your doggo is ${DOGGO_YEARS} years old in dog years!`;
}

console.log(dogAge(9));
//Your doggo is 63 years old in dog years!

## Example 2 
function calcLifetimeSupply(currentAge, amountPerDay) {
  const MAX_AGE = 100;
  const AVERAGE_YEAR = 365.25; //simplified calc for leap years
  const SUPPLY_CALC = Math.ceil(
    (MAX_AGE - currentAge) * AVERAGE_YEAR * amountPerDay
  ); 
  return `The snack company should provide you with ${SUPPLY_CALC} units, until you are a ripe old age of ${MAX_AGE}. Happy snacking!`;
}

console.log(calcLifetimeSupply(25, 2));
//The snack company should provide you with 54788 units, until you are a ripe old age of 100. Happy snacking!

## Example 3 
const firstName = "Fran Borg";
const age = 25; 
const year = 2019;
console.log(firstName + " is " + age  + " in " + year)

//Fran Borg is 25 in 2019


## Example 4 

const firstName = "Elloura";

const age = "pineapple";

if (age < 13) {
    console.log(`${firstName} is a child`);
} else if (age < 20) {
    console.log(`${firstName} is a teenager`);
} else if (age < 30) {
    console.log(`${firstName} is a young adult`);
} else if (age >= 30) {
    console.log(`${firstName} is an adult`);
} else {
    console.log("Oi, put in a valid numeric age!");
}
// Oi, put in a valid numeric age! 

## 2 + 3 
## String + Boolean 
## Example 1 
const wordRepeater = x => {
  const words = x.split(" ");
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < words.length; j++) {
      result.push(word);
    }
  }
  return result.join(" ");
}
console.log(wordRepeater("Cat food"));
// Cat Cat food food
console.log(wordRepeater("O M G ?"));
//O O O O M M M M G G G G ? ? ? ?
## Example 2 

function isStrStartOfWord(str, word) {
  const INDEX_END = str.length; 
  const LOWER_CASE_STR = str.toLowerCase();
  const LOWER_CASE_WORD = word.toLowerCase();
  return LOWER_CASE_WORD.substring(0, INDEX_END) === LOWER_CASE_STR; 
}

console.log(isStrStartOfWord("hicc", "hiccough"));
//true
console.log(isStrStartOfWord("spices", "German food uses spices"));
//false

## String + Replace 
## Example 1.1  
.replace()
let fruityStr2 = "Bananas";
let modifiedFruityStr2 = fruityStr2.replace("Bananas", "BBananasB");
console.log(modifiedFruityStr2);
// BBananasB
## Example 1.2 
const oldStr = "Bananas";
const firstChar = oldStr[0];
const newStr = `${firstChar}${oldStr}${firstChar}`
console.log(newStr);
//BBananasB
## Example 2 
function camelize(str) {
  return str
    .split("-") // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(""); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

console.log(camelize("background-color"))
//backgroundColor

## Example 3 
const boogieNightsStr = "BoogieWoogie";
const firstLetter = boogieNightsStr[0];
const lastLetter = boogieNightsStr[boogieNightsStr.length - 1];
const remainderString = boogieNightsStr.substring(1, boogieNightsStr.length - 1);
console.log(lastLetter + remainderString + firstLetter);
//eoogieWoogiB

## String + Extract 
## Example 1 
const getFirstWord = x => x.split(" ")[0]
console.log(getFirstWord("Hello World"));
//Hello 

## Example 2 

function showFirstAndLast(array) {
    const currentArray = array.map(element => element.substring(0, 1) + element.substring(element.length - 1));
    return currentArray;
}
console.log(showFirstAndLast(['colt', 'matt', 'tim', 'udemy']));
[ 'ct', 'mt', 'tm', 'uy' ]

 
## Example 3 
function isWaldoHere(str) {
  const LOWER_CASE_STR = str.toLowerCase(); // prep: includes() is case-sensitive
  return LOWER_CASE_STR.includes("waldo");
}
console.log(isWaldoHere("where is Wally?"));
//false
console.log(isWaldoHere("I found you Waldo!"));
//true
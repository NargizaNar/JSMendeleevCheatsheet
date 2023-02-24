## 2 String 
Any message (what we say, write, type in order to inform about something) is a 'string'. 
A string has single or double quotes, e.g. 'hi', "hi"
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
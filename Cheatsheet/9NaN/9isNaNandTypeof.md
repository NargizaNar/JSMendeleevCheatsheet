## isNaN()
The global NaN property is a value representing Not-A-Number.
## Example 
function sanitise(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}

console.log(sanitise('1'));
// Expected output: "1"

console.log(sanitise('NotANumber'));
// Expected output: NaN

## Other examples: 
console.log(isNaN("hello"));// true 
console.log(isNaN(3)); // false 
console.log(typeof NaN); // number
isNaN(new Date()); // false; Date objects can be converted to a number (timestamp)
isNaN(new Date().toString()); // true; 
console.log(Infinity / Infinity);// NaN

## isNan()+Number 
function milliseconds(x) {
  if (isNaN(x)) {
    return 'Not a Number!';
  }
  return x * 1000;
}

console.log(milliseconds('100F'));
// expected output: "Not a Number!"

console.log(milliseconds('0.0314E+2'));
// expected output: 3140

## Typeof
The typeof operator returns a string indicating the type of the operand's value.
In JavaScript there are 5 different data types that can contain values:

  -string
  -number
  -boolean
  -object
  -function

There are 6 types of objects:

  -Object
  -Date
  -Array
  -String
  -Number
  -Boolean

And 2 data types that cannot contain values:

  - null
  - undefined

## Example 
console.log(typeof 42);
// Expected output: "number"

console.log(typeof 'blubber');
// Expected output: "string"

console.log(typeof true);
// Expected output: "boolean"

console.log(typeof undeclaredVariable);
// Expected output: "undefined"

## 2 + 9 
## String + typeof 
## Example 1 
const isString = x => typeof x === "string";
console.log(isString("Cat"));
//true
console.log(isString(Symbol("Wheeeee")));
//false
console.log(isString(Number.EPSILON));
//false

## Example 2
//arrow function that takes in two parameters and returns true if both of them are strings.
const areStrings = (a,b) => typeof a === typeof b && typeof b === typeof "";
console.log(areStrings("Cat", "Cat"));
//true
console.log(areStrings("Cat", Symbol("Wheeeee")));
//false
console.log(areStrings("Cat", Number.EPSILON));
//false

## Example 3 
const explode = x => typeof x.split === "function" ? x.split('') : null;
console.log(explode("Cat"));
// [ 'C', 'a', 't' ]
console.log(explode(41));
//null
console.log(explode(""));
//[]
console.log(explode("R & D"));
//[ 'R', ' ', '&', ' ', 'D' ] 

## 6 + 9 
## Array + typeof 
const len = x => typeof x === "string" || Array.isArray(x) ? x.length : null;
console.log(len("xx"));
//2
console.log(len(""));
//0
console.log(len([1]));
//1
console.log(len({}));
//0

## 4 + 9 
## Number + typeof 
function printExponentialValues(x, y) {
    if ((typeof x !== "number") || (typeof y !== "number")) {
        console.log("x or y is not a number");
    }
    let exponentResult = 1;
    let values = "";
    for (let i = 0; i < y; i++) {
            exponentResult *= x;
            values += `${exponentResult} `;
        }
    console.log(values);
}

printExponentialValues(3, 5);
// 3 9 27 81 243 
printExponentialValues(3, 'n');
//x or y is not a number




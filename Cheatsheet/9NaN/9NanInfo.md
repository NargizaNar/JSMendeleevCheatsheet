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
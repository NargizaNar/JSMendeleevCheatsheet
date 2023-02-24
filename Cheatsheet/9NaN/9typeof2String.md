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

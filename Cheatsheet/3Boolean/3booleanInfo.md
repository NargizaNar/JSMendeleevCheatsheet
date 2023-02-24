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

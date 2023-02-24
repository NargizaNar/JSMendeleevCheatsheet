## 10 Function 

A JavaScript function is a block of code designed to perform a particular task. A function is executed when "something" invokes it (calls it).

# Example 
// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
  return p1 * p2;
}
console.log(myFunction(4, 3))
//12

Functions can be long, shortened, and short. For example, we have "BoogieWoogie", which is our input. And we want to get "eoogieWoogiB" as an output. 

## Option 1: Long function 
function makeBoogieNights1 (string) {
    const firstLetter = string[0];
    const lastLetter = string[string.length - 1];
    const remainderString = string.substring(1, string.length - 1);

    return lastLetter + remainderString + firstLetter;
}
console.log(makeBoogieNights1("BoogieWoogie"));
//eoogieWoogiB

## Option 2: Shortend Function

function makeBoogieNights2 (string) {
    return string[string.length - 1] + string.substring(1, string.length - 1) + string[0];
}
console.log(makeBoogieNights2("BoogieWoogie"));
//eoogieWoogiB

## Option 3: One liner Arrow Function

## Example 1
let myFunction = (a, b) => a * b;
## Example 2 
hello = () => "Hello World!"; 
## Example 3
const makeBoogieNights3 = (string) => string[string.length - 1] + string.substring(1, string.length - 1) + string[0];
console.log(makeBoogieNights3("BoogieWoogie"));
//eoogieWoogiB

### Function scope (local, global)
 let fruit = "banana"

 function printFavoriteFruit() {
     fruit = "watermelon"
    console.log("My favorite fruit is: " + fruit);
 }

 printFavoriteFruit()
 // My favorite fruit is: watermelon//, local, within the function scope

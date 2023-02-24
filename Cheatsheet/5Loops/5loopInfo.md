## 5 Loop 
Loops offer a quick and easy way to do something repeatedly. 

## Types of loops

## 1 for - loops through a block of code a number of times
## Example 
let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);
// Expected output: "012345678"

## 2 for/in - loops through the properties of an object
## Example 
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

<!-- Expected output:
 "a: 1"
 "b: 2"
 "c: 3" -->

## 3 for/of - loops through the values of an iterable object
## Example 
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

<!-- Expected output: "a"
"b"
"c" -->

## 4 while - loops through a block of code while a specified condition is true
## Example 1 

let n = 0;

while (n < 3) {
  n++;
}

console.log(n);
// Expected output: 3

## Example 2 
while (i < 10) {
  text += "The number is " + i;
  i++;
}
<!-- Expected output: The number is 0
The number is 1
The number is 2
The number is 3
The number is 4
The number is 5
The number is 6
The number is 7
The number is 8
The number is 9 -->

## 5 do/while - also loops through a block of code while a specified condition is true
## Example 
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345" 
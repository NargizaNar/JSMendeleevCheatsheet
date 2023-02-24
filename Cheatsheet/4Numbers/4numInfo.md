## Number 

There are different types of numbers: 
-integer, e.g. 1, 2, 3
- float, e.g. 1.5
- primeNumbers, e.g. 7 because it can be diveded only by itself without a remainder
- absolute numbers. 

## Declarations 
 let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals 
 let x = 123e5;    // 12300000
let y = 123e-5;   // 0.00123 

## Main methods with numbers 
## Example 1
console.log(Math.min(-1, 0, 1, 2, 3, 4));
//-1

## Example 2 
console.log(Math.max(-1, 0, 1, 2, 3, 4));
// 4
## Example 2.1
const largestNum = (a,b,c,d,e) => Math.max(a,b,c,d,e);
console.log(largestNum(1,2,3,2,1));
//3 

## Example 3 
console.log(Math.ceil(326.76));
//327

## Example 4 
console.log(Math.floor(3321.32321));
//3321

## Example 5
console.log(Math.floor(Math.random() * 6) + 1)
3321
//2

## Example 6
console.log((0.1 * 0.2).toFixed(2));
//0.02

## Example 7 
let aleezaGame1 = 89;

let aleezaGame2 = 120;

let aleezaGame3 = 103;

const laraGame1 = 116;

const laraGame2 = 94;

const laraGame3 = 123;

let aleezaTeamAve = Math.round((aleezaGame1 + aleezaGame2 + aleezaGame3) / 3);

console.log(`Aleeza's team scored an average ${aleezaTeamAve}`);

let laraTeamAve = Math.round((laraGame1 + laraGame2 + laraGame3) / 3);

console.log(`Lara's team scored an average ${laraTeamAve}`);
// Aleeza's team scored an average 104
// Lara's team scored an average 111 


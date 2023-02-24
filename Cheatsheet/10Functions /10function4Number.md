## Function + Number 
### Example 1: 
function sumIntFrom1ToN(int) {
  let sum = 0;
  for (let i = 0; i <= int; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumIntFrom1ToN(25));
//325

### Example 2: 
function sumOfCubes(a, b, c) {
  return a ** 3 + b ** 3 + c ** 3;
}
console.log(sumOfCubes(1, 5, 9));
// 855 

## Example 3.1 
function multiply(a, b) {
  console.log(a * b);
}

multiply(7, 5);
//35
## Example 3.2
const myMultiply = function(a, b) {
  console.log(a * b);
};

myMultiply(21, 3); 
//63 
## Example 3.3  
const myMultiplyFunc = (a, b) => console.log(a * b);
myMultiplyFunc(4, 31)
//124 

## Example 4.1 
function remainderOfDivision1(a, b) {
    console.log(a % b);
}

remainderOfDivision1(23, 5);
// 3

## Example 4.2
const remainderOfDivision2 = function(a, b) {
    console.log(a % b);
}

remainderOfDivision2(11, 3);
//2

## Example 4.3 
const remainderOfDivision3 = (a, b) => console.log(a % b);
remainderOfDivision3(125, 10);
//5

## Example 5 
const exponent = (num1, num2) => {
    for (let i = 1; i <= num2; i++) {
        let result = Math.pow(num1, i);
        console.log(`${num1} ^ ${i} is ${result}`);
    }
};
//console.log(result);

exponent(2, 8);

<!-- 2 ^ 1 is 2
2 ^ 2 is 4
2 ^ 3 is 8
2 ^ 4 is 16
2 ^ 5 is 32
2 ^ 6 is 64
2 ^ 7 is 128
2 ^ 8 is 256 -->

## Example 6
const  createBase = (x) => {
    return function(y){
        return x+y 
        
    }
}
const addSix = createBase(6);
const anony =()=>({x:addSix,y:10})
console.log(addSix(10))
// 16


## Loop + Number 

## Example 1 
function pow(x, n) {
    let result = x;
  for(let i=1;i<n;i++){
    result *= x
  }
  return result
  }
console.log(pow(1, 100))
  //1
## Example 2 
let sumOneToTwenty = 0;
for (let i= 1; i <= 20; i ++) {
    sumOneToTwenty += i;
}
console.log(sumOneToTwenty);
// Expected output: 210

## Example 3 
let sumOfMultiplesOfThreeAndFive = 0;

for (let i = 1; i <= 1000; i ++) {
    if (i % 3 == 0 && i % 5 == 0) {
        sumOfMultiplesOfThreeAndFive += i;
    }
}

console.log(sumOfMultiplesOfThreeAndFive);
// Expected output: 33165

## Example 4
const starter = 100; 

for (let i = 1; i <= 500/starter; i++) {
    console.log(starter * i);
}
// Expected output: 100, 200, 300, 400, 500  

## Example 5
for (let i = 0; i <= 10;) {
        console.log(i);
        i += 2;
}
// Expected output:0, 2, 4... 10

## Example 6
for (let i = 9; i >=0;) {
    console.log(i);
    i --;
} 
// Expected output:9, 8, 7... 0 

## Example 7 
let runCount = 0;
for (let i = 0; i <= 4;) {
    console.log(i);
    if ((i === 4) && (runCount <= 1)) {
        i = 0;
        runCount++;
    } else {
        i++;
    }
}
// Expected output:0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

## Example 8
let count = 1;
for (let i = 1; i <= 4;) {
    console.log(i);
    if ((count !== 0) && (count % 3 === 0)) {
        i++;
        count = 0;
    } 
    count++;
}

// Expected output:1 1 1 2 2 2 3 3 3 4 4 4

## Example 9 
for (let i = 0; i <= 10; i ++) {
    console.log(`${i} * 9 = ${i * 9}`);
}
for (let i = 0; i <=10; i++) {
    for (let y = 0; y <=10; y++) {
        const multiplier = i * y;
        console.log(`${i} * ${y} = ${multiplier}`);
    }
}
// Expected output:  0 * 9 = 0
// Expected output: 1 * 9 = 9, etc

## Example 10 
function pow(x, n) {
    let result = x;
  for(let i=1;i<n;i++){
    result *= x
  }
  return result
  }
console.log(pow(1, 100))
  //1
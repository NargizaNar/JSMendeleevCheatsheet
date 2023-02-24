## Loop + Array 

## Example 1 
const ARR_Q2 = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for (let i = 0; i < ARR_Q2.length; i++) {
   console.log(`row ${i}`);
   for (let y = 0; y < ARR_Q2[i].length; y++) {
       console.log(` ${ARR_Q2[i][y]}`);
   }
}
 <!-- Expected output: row 0
  1
  2
  1
  24
 row 1
  8
  11
  9
  4
row 2
  7
  0
  7
  27
 row 3 .. etc -->


## Example 2 
const ARR_Q3a = [];

for (let i = 1; i <= 4; i++) {
   for (let y = 1; y <= 3; y++) {
       let strNums = i.toString();
       ARR_Q3a.push(strNums);
   }
}

console.log(ARR_Q3a.join(" "));
// Expected output: 1 1 1 2 2 2 3 3 3 4 4 4

## Example 3 
const ARR_Q3b = [];

for (let i = 0; i <= 2; i++) {
   for (let y = 0; y <= 4; y++) {
       strNums = y.toString();
       ARR_Q3b.push(strNums);
   }
}

console.log(ARR_Q3b.join(" "));
// Expected output: 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

## Example 4 

const largestNumInArray = x => {
  let max = null; // yeah this does not work if all the inputs are <0
  for (let i = 0; i < x.length; i++) {
    if (x[i] > max) {
      max = x[i];
    }
  }
  return max;
}
console.log(largestNumInArray([1,6,83,91,0,-4,1337,5]));
// 1337

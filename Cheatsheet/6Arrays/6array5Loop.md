## Array + Loop 
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
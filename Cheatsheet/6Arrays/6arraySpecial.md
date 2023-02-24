## Arr + Special 
function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); 
// 3,1 (matching values) 
console.log( arr ); 
//[5, 3, 8, 1];

## BUT 
function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    
    }
  }
return arr
  
}

let array = [5, 3, 8, 1];

//filterRangeInPlace(array, 1, 4); // removed the numbers except from 1 to 4
console.log(filterRangeInPlace(array, 1, 4));
//[ 3, 1 ]
console.log(array);
// [3, 1]
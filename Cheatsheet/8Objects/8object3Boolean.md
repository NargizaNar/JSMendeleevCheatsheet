## Object + Boolean
## Example 1 
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}

console.log(isEmptyObject({}));
//true
console.log(isEmptyObject({ a: "a" }));
//false 

## Example 2 
function isSymmetrical(num) {
  const numForwards = num.toString();
  const numSplit = numForwards.split('');
  const reverse = numSplit.reverse();
  const numReverse = reverse.join('');

  return numForwards === numReverse ? true : false;
}

console.log(isSymmetrical(111)); 
// true

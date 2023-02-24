## Function + Array 
## Example 1
function amplifyMultiplesOfFour(num) {
  const numArr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 4 === 0) {
      let ampByTen = i * 10;
      numArr.push(ampByTen);
    } else {
      numArr.push(i);
    }
  }

  return numArr;
}

console.log(amplifyMultiplesOfFour(8)); 
// [1, 2, 3, 40, 5, 6, 7, 80]

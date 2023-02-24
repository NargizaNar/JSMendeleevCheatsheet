## Object + Char 
function isFourLetters(arr) {
  const fourLetterArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 4) {
      fourLetterArr.push(arr[i]);
    }
  }

  return fourLetterArr;
}

console.log(isFourLetters(['Deer', 'Duck', 'Dog', 'Elephant'])); 
// [ 'Deer', 'Duck' ]
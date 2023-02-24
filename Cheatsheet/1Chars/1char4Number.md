## Char + Number 
## Example 1 
function countOccurrences(str, letter) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      counter++;
    }
  }
  return counter;
}

console.log(countOccurrences("this is a string", "i"));
//3
## Example 2 
function getLongestWord(str) {
    let words = str.split(' ');
    let maxLength = 0;
    let longestWord = null;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
            longestWord = words[i];
        }
    }
    return longestWord;
}

console.log(getLongestWord("this is one of my strings"));
//strings
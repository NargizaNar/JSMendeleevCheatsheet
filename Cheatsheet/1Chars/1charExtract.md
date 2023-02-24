## Char + Extract 
## Example 1
const firstLetters = x => {
  const arr = x.split(" ");
  let out = "";
  for (let i = 0; i < arr.length; i++) {
    out += arr[i][0];
  }
  return out;
}
console.log(firstLetters("What the fruit"));
//Wtf

## Example 2.1 
function vowelCount(string) {
    const vowelArray = ["a", "e", "i", "o", "u"];
    const countObject = {};
    const currentArray = [...string.toLowerCase()];
eachRight 
    vowelArray.forEach(vowel => {
        let count = currentArray.filter(letter => letter === vowel);
        if (count.length > 0) {
            countObject[vowel] = count.length;
        };
    });
    return countObject;
}

console.log(vowelCount('Elie')); // {e:2,i:1};

## Example 2.2 
function vowelCount(string) {
    const vowelArray = ["a", "e", "i", "o", "u"];
    const countObject = {};
    const currentArray = [...string.toLowerCase()];

    currentArray.forEach((letter) => {
        if (vowelArray.includes(letter)) {
            countObject[letter] = (countObject[letter] || 0) + 1;
        }
    });
    return countObject;
}

console.log(vowelCount('Elie')); // {e:2,i:1};



## String + Loop || Loop + String

## Example 1 
const wordRepeater = x => {
  const words = x.split(" ");
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < words.length; j++) {
      result.push(word);
    }
  }
  return result.join(" ");
}
console.log(wordRepeater("Cat food"));
// Cat Cat food food
console.log(wordRepeater("O M G ?"));
//O O O O M M M M G G G G ? ? ? ?

## String + Boolean 
## Example 1 

function isStrStartOfWord(str, word) {
  const INDEX_END = str.length; 
  const LOWER_CASE_STR = str.toLowerCase();
  const LOWER_CASE_WORD = word.toLowerCase();
  return LOWER_CASE_WORD.substring(0, INDEX_END) === LOWER_CASE_STR; 
}

console.log(isStrStartOfWord("hicc", "hiccough"));
//true
console.log(isStrStartOfWord("spices", "German food uses spices"));
//false

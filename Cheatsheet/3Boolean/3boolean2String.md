## Boolean + String
## Example 1  
const isDog = true;

isDog == true ? console.log("Pat, pat, good dog"): console.log("Find me a dog to pat!");
// Pat, pat, good dog

## Example 2 
const okMarie = "bread";
okMarie == "cake"? console.log("Let them eat cake") : console.log("Oh, bother");
//Oh, bother

## Example 3 
let login="Director"

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  ''; 
console.log(message)
//Greetings

## Example 4 
const isStudent = false;

console.log(isStudent == true? "Ticket costs €5,00": "Ticket costs €12,00")
//Ticket costs €12,00

## Example 5

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



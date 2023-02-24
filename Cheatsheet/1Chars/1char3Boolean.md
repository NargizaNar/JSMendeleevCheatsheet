## Char + Boolean 
## Example 1 
const foo = x => x[x.length-1] === "o"
console.log(foo(""));
//false
console.log(foo("Bravo"));
//true
console.log(foo("Blanket"));
//false
## Example 2 
function isEqualNumXandOs(str) {
  const LOWER_CASE_STR = str.toLowerCase();
  let countX = 0;
  let countO = 0;
  for (let i = 0; i < str.length; i++) {
    if (LOWER_CASE_STR[i] === "x") {
      countX++;
    } else if (LOWER_CASE_STR[i] === "o") {
      countO++;
    }
  }
  if (countX === 0 && countO === 0) {
    return true;
  } else if (countX === countO) {
    return true;
  } else if (countX !== countO) {
    return false;
  }
}

console.log(isEqualNumXandOs("ooxx"));
//true
console.log(isEqualNumXandOs("xooxx"));
//false
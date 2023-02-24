## Boolean + Loop

## Example 6 
function validate(email) {
  let atSymPos;
  let atSymCounter = 0;
  let dotPos;

  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      atSymCounter++;
      atSymPos = i;
      if (atSymPos === dotPos + 1) {
        return false; //checks if "." is directly before "@"
      }
      // inspect code at work: console.log(`@ located at ${atSymPos}`);
    }
    if (email[i] === ".") {
      dotPos = i; // NB: if there are multiple dots, Pos will indicate last dot placement
      // inspect code at work: console.log(`. located at ${dotPos}`);
      if (dotPos === atSymPos + 1) {
        // checks if "." is directly after "@"
        return false;
      }
      if (email[dotPos + 1] === ".") {
        // checks if there are consecutive "."
        return false;
      }
    }
  }

  if (atSymCounter !== 1 || atSymPos === 0 || atSymPos === email.length - 1) {
    //checks if we have exactly 1 "@" character AND that the "@" is NOT first or last character
    return false;
  } else if (
    email[0] === "." ||
    dotPos < atSymPos ||
    dotPos === email.length - 1
  ) {
    // checks if "." is first character, AND if there is no "." after "@", AND "." is NOT last character
    return false;
  } else {
    return true;
  }
}

console.log(validate("j@example.com"));
// Expected output: true
console.log(validate("@example.com)"));
//  Expected output:false

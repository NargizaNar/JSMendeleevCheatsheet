## String + Number 
## Example 1 
function dogAge(AgeInHumanYears) {
  const DOGGO_YEARS = AgeInHumanYears * 7;
  return `Your doggo is ${DOGGO_YEARS} years old in dog years!`;
}

console.log(dogAge(9));
//Your doggo is 63 years old in dog years!

## Example 2 
function calcLifetimeSupply(currentAge, amountPerDay) {
  const MAX_AGE = 100;
  const AVERAGE_YEAR = 365.25; //simplified calc for leap years
  const SUPPLY_CALC = Math.ceil(
    (MAX_AGE - currentAge) * AVERAGE_YEAR * amountPerDay
  ); 
  return `The snack company should provide you with ${SUPPLY_CALC} units, until you are a ripe old age of ${MAX_AGE}. Happy snacking!`;
}

console.log(calcLifetimeSupply(25, 2));
//The snack company should provide you with 54788 units, until you are a ripe old age of 100. Happy snacking!

## Example 3 
const firstName = "Fran Borg";
const age = 25; 
const year = 2019;
console.log(firstName + " is " + age  + " in " + year)

//Fran Borg is 25 in 2019


## Example 4 

const firstName = "Elloura";

const age = "pineapple";

if (age < 13) {
    console.log(`${firstName} is a child`);
} else if (age < 20) {
    console.log(`${firstName} is a teenager`);
} else if (age < 30) {
    console.log(`${firstName} is a young adult`);
} else if (age >= 30) {
    console.log(`${firstName} is an adult`);
} else {
    console.log("Oi, put in a valid numeric age!");
}
// Oi, put in a valid numeric age! 

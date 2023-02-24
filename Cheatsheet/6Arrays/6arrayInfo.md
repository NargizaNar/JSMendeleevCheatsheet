## Array + Info 
The Array object enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

### Declaration
let numArray= [ 4, 46, 7, 57, 8, 10 ]; 
const cars = ["Saab", "Volvo", "BMW"];

### Main Array Methods 


    concat()
    copyWithin()
    every()
    filter()
    flat()
    flatMap()
    forEach()
    indexOf()
    lastIndexOf()
    map()
    reduce()
    reduceRight()
    reverse()
    slice()
    some()
    sort()
    splice()

# Examples 

## nameArray.map()
## Example 1
const getSquareRoot = (arrayOfNumbers) => arrayOfNumbers.map(el => Math.sqrt(el));
console.log(getSquareRoot([1, 2, 3])) 
//[ 1, 1.4142135623730951, 1.7320508075688772 ]

## Example 2 
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
const mappedArray = arrayOfNumbers.map(el => el + 1);
console.log(mappedArray);
//[ 4, 46, 7, 57, 8, 10 ] 

## Example 3 
function addKeyAndValue(array, key, value) {
    return array.map(element => {
        element[key] = value;
        return element;
    });
}
console.log(addKeyAndValue([{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }], 'title', 'instructor'));
// [
//   { name: 'Elie', title: 'instructor' },
//   { name: 'Tim', title: 'instructor' },
//   { name: 'Matt', title: 'instructor' },
//   { name: 'Colt', title: 'instructor' }
// ]

## nameArray.reduce()
const sumUp = (arrayOfNumbers) => arrayOfNumbers.reduce((cur, acc) => cur + acc);
console.log(sumUp([1, 2, 3]))
//6

## nameArray.filter()
function filterEvens(array) {
    return array.filter(el => el % 2 === 0);
}
console.log(filterEvens([1, 2, 3, 4, 5, 6]));
//[ 2, 4, 6 ]

### nameArray.sort()
## Example 1
function copySorted(arr) {
    return arr.slice().sort();
  }
  
  let array = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(array);
  
console.log(sorted);
  //[ 'CSS', 'HTML', 'JavaScript' ]
console.log(array);
  //[ 'HTML', 'JavaScript', 'CSS' ]

## Example 2 
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log(arr);
//[ 8, 5, 2, 1, -10 ]

## Example 3 
const arrayOfNumbers = [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];
const sortNumbers = numberArray => {
  return numberArray.sort();
};
console.log(sortNumbers(arrayOfNumbers));
//[
//   1, 2, 2, 3, 4,
//   5, 6, 7, 8, 9
// ]

## Example 4
const arrayOfNames = ["fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];
const sortNames = namesArray => {
  const sortedNames = namesArray.sort((a, b) => a.localeCompare(b));
  return sortedNames;
};
console.log(sortNames(arrayOfNames));
//[ 'Ale', 'Bleda', 'fran', 'Hadi', 'Jenna', 'Leon' ]

## Example 5 
const sortArrayLength = arrayOfStrings => {
  const sortedArray = arrayOfStrings.sort((a, b) => {
    if (a.length < b.length) {
      return -1;
    }
    if (b.length < a.length) {
      return 1;
    }
    return 0;
  });
  return sortedArray;
};
console.log(sortArrayLength(["hey", "there", ",", "you're", "sorting"]));
//[ ',', 'hey', 'there', "you're", 'sorting' ]
### nameArray.length 

### Example 1
const euroCities = ["Paris", "London", "Rome", "Prague", "Valletta"];
console.log(euroCities.length); // 5
### Example 2 
const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3

## nameArray.concat()
const euroCities = ["Paris", "London", "Rome", "Prague", "Valletta"];
const asianCities = ["Hong Kong", "Taiwan", "Seoul", "Osaka", "Manila"];
const worldCities = euroCities.concat(asianCities);
console.log(worldCities)
<!-- [
  'Paris',    'London',
  'Rome',     'Prague',
  'Valletta', 'Hong Kong',
  'Taiwan',   'Seoul',
  'Osaka',    'Manila'
] -->
## nameArray.reverse ()
const euroCities = ["Paris", "London", "Rome", "Prague", "Valletta"];
const asianCities = ["Hong Kong", "Taiwan", "Seoul", "Osaka", "Manila"];
const worldCities = euroCities.concat(asianCities);
console.log(worldCities.reverse());

  <!-- ['Manila',    'Osaka',
  'Seoul',     'Taiwan',
  'Hong Kong', 'Valletta',
  'Prague',    'Rome',
  'London',    'Paris'
] -->

## nameArray.splice()
const worldCities = ["Paris", "London", "Tashkent", "Berlin", "Norwich"];
worldCities.splice(1, 0, "Washington");
console.log(worldCities);
//[ 'Paris', 'Washington', 'London', 'Tashkent', 'Berlin', 'Norwich' ], added Washington 
## nameArray.join()
const worldCities = ["Paris", "London", "Tashkent", "Berlin", "Norwich"];
console.log(worldCities.join(", "));//Paris, London, Tashkent, Berlin, Norwich
console.log(worldCities.join(" + "));//Paris + London + Tashkent + Berlin + Norwich

## nameArray.filter()
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
function filterFriends(friendsArray, key) {
    return friendsArray.filter(el => el.includes(key));
}
console.log(filterFriends(friends, "i"))
//[ 'rika', 'oliver', 'itamar' ]
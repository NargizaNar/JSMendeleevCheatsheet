## Object
The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.
## Example 
const object1 = { a: 'foo', b: 42, c: {} };

console.log(object1.a);
// Expected output: "foo"

const a = 'foo';
const b = 42;
const c = {};
const object2 = { a: a, b: b, c: c };

console.log(object2.b);
// Expected output: 42

const object3 = { a, b, c };

console.log(object3.a);
// Expected output: "foo"

## Object.seal(objectName);
// A sealed object has a fixed set of properties: new properties cannot be added, existing properties cannot be removed, their enumerability and configurability cannot be changed, and its prototype cannot be re-assigned. Values of existing properties can still be changed as long as they are writable.
## Object.freeze(objectName); 
// you can not add new item and also you cannot change the value of the Old one

## 8 + 8 
## Object + Object 
## Example 1 
const person = {name: "John"}
const job = {role: "Teacher"}

const employee = {...person, ...job}
console.log(employee)
//{ name: 'John', role: 'Teacher' }

## Example 2  
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

## Example 3 
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

console.log(usersMapped)
// [
//   { fullName: 'John Smith', id: 1 },
//   { fullName: 'Pete Hunt', id: 2 },
//   { fullName: 'Mary Key', id: 3 }
// ]
console.log(usersMapped[1].id); // 2
console.log(usersMapped[1].fullName); // Pete Hunt

## Example 4 
const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12,
    printDetails() {
      return `${this.firstName} ${this.lastName} is a student in class ${this.class}`;
    }
  };
  
console.log(student.printDetails());
  //John Smith is a student in class 12

## Example 5   
let firstObject = { firstName: 'John' };
let secondObject = { lastName: 'Smith' };

function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

console.log(mergeObjects(firstObject, secondObject)); 
// { firstName: 'John', lastName: 'Smith' }

## 8 + 1
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
## 8 + 2 
## Object + String 
## Example 1 
unction toCamelCase(snakeStr) {
  const splitStr = snakeStr.split('_');

  const camelCaseArray = [];
  for (let i = 0; i < splitStr.length; i++) {
    if (i === 0) {
      camelCaseArray.push(splitStr[i]);
    } else {
      const firstChar = splitStr[i].slice(0, 1).toUpperCase();
      const remainder = splitStr[i].slice(1);
      camelCaseArray.push(firstChar + remainder);
    }
  }

  return camelCaseArray.join('');
}

console.log(toCamelCase('this_is_francesca_borg')); 
// thisIsFrancescaBorg


## Example 2 
const myBooks = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
  }
];

for (let i = 0; i < myBooks.length; i++) {
  console.log(`${myBooks[i].title} by ${myBooks[i].author}`);
}

for (let i = 0; i < myBooks.length; i++) {
  let book = myBooks[i];
  let bookInfo = book.title + '" by ' + book.author;
  if (book.alreadyRead) {
    console.log('You already read "' + bookInfo);
  } else {
    console.log('You still need to read "' + bookInfo);
  }
}
// The Design of EveryDay Things by Don Norman
// The Most Human Human by Brian Christian
// You still need to read "The Design of EveryDay Things" by Don Norman
// You already read "The Most Human Human" by Brian Christian 


## Example 3 
function getMonthName(num) {
  if (num < 1 || num > 12) return 'Invalid input';

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return months[num - 1];
}

console.log(getMonthName(8)); 
// 'August'

## 8 + 4 
## Object + Number 
## Example 1 
function isWhole(int1,int2,int3,int4) {
    return Number.isInteger((int1+int2+int3+int4)/4) 
}
console.log(isWhole(...[1, 2, 3, 6]));
//true
console.log(isWhole(...[1.5, 2, 3, 6]));
//false 
## Example 2 
function unique(arr) {
  const uniqueNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    if (arr.indexOf(currentElement) === arr.lastIndexOf(currentElement)) {
      uniqueNumbers.push(currentElement);
    }
  }

  return uniqueNumbers;
}

console.log(unique([3, 3, 3, 7, 3, 3, 5])); // [7, 5]
## Example 3 
function isWithinRange(num, obj) {
   if (num >= obj.min && num <= obj.max) {
       return true;
   } else {
       return false;
   }
}

console.log(isWithinRange(4, { min: 4, max: 5 }));
//true
## Example 4 
function freeShipping(object) {
    const orderArray = Object.values(object);
    let total = 0;
    for (let i = 0; i < orderArray.length; i ++) {
        total += orderArray[i];
    }
    return total > 50;
}
console.log(freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }));
//false 

## Example 5 
function countLetters(str) {
    const strToArr = str.split("");
    const letterCount = {};
    for (let i = 0; i < strToArr.length; i ++) {
        if (letterCount.hasOwnProperty(strToArr[i])) {
            letterCount[strToArr[i]]++;
        }  else {
            letterCount[strToArr[i]] = 1;
        }
    }
    return letterCount;
}

console.log(countLetters("woolloomooloo"));
//{ w: 1, o: 8, l: 3, m: 1 }

## 8 + 6 
## Object + Array 
## Example 1 
function getKeysAndValues(obj) {
  const keyArray = Object.keys(obj);
  const valueArray = Object.values(obj);
  return [keyArray, valueArray];
}

console.log(getKeysAndValues({ a: 1, b: 2, c: 3 })); 
//[ [ 'a', 'b', 'c' ], [ 1, 2, 3 ] ]

## Example 2 
const myObjects = {
  cats: 1,
  dogs: 2,
  turtles: 4,
};

function getKeyValuePairs(object) {
  return Object.entries(object);
}

console.log(getKeyValuePairs(myObjects)); 
// [ [ 'cats', 1 ], [ 'dogs', 2 ], [ 'turtles', 4 ] ]

## Example 3 
const scrabbleHand = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
];

function calcMaxScrabbleScore(tiles) {
    let total = 0;
    for (let i = 0; i < tiles.length; i++) {
        total += tiles[i]['score'];
    }
    return total;
}

console.log(calcMaxScrabbleScore(scrabbleHand));
//28

## 8 + 5 
## Object + Loop 
## Example 1
const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
for (let i = 0; i < programming.languages.length; i ++) {
    console.log(programming.languages[i]);
};
// JavaScript
// Python
// Ruby

## Example 2 
const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
const myKeysArr = Object.keys(programming);
for (const key of myKeysArr) {
    console.log(key);
}
// languages
// isChallenging
// isRewarding
// difficulty
// jokes

## Example 3 
const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
};
const myValuesArr = Object.values(programming);
for (const values of myValuesArr) {
    console.log(values);
}
//[ 'JavaScript', 'Python', 'Ruby' ]
//true
//true
//8

## 8 + 3 
## Object + Boolean
## Example 1 
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}

console.log(isEmptyObject({}));
//true
console.log(isEmptyObject({ a: "a" }));
//false 

## Example 2 
function isSymmetrical(num) {
  const numForwards = num.toString();
  const numSplit = numForwards.split('');
  const reverse = numSplit.reverse();
  const numReverse = reverse.join('');

  return numForwards === numReverse ? true : false;
}

console.log(isSymmetrical(111)); 
// true

## Object + Replace 
## Example 1 
const job = {role: "Teacher"}
job.role = "Plumber"
console.log(job)
//{ role: 'Plumber' }
## Example 2 
let person = {
  firstName: 'Michael',
  lastName: 'Smith',
  citizenship: 'Germany',
  city: 'Berlin',
  gender: 'male',
  job: 'driver',
  age: 28,
  height: 178,
  'eye colour': 'brown',
};

function getKeyValueObjects(person) {
  const result = [];
  for (const key in person) {
    let keyValue = {};
    keyValue[key] = person[key];
    result.push(keyValue);
  }

  return result;
}

console.log(getKeyValueObjects(person)); 
// [
  { firstName: 'Michael' },
  { lastName: 'Smith' },
  { citizenship: 'Germany' },
  { city: 'Berlin' },
  { gender: 'male' },
  { job: 'driver' },
  { age: 28 },
  { height: 178 },
  { 'eye colour': 'brown' }
]
## Example 3
const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.difficulty = 7;
console.log(programming);
//{
  languages: [ 'JavaScript', 'Python', 'Ruby' ],
  isChallenging: true,
  isRewarding: true,
  difficulty: 7,
  jokes: 'http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke'
}
## Example 4 
const stayCation = {
  location: 'berlin',
  status: 'occupied',
};

function switchedCopy(object) {
  const keyValuePairs = Object.entries(object);

  let reversedArrays = [];
  for (let i = 0; i < keyValuePairs.length; i++) {
    reversedArrays.push(keyValuePairs[i].reverse());
  }

  return Object.fromEntries(reversedArrays);
}

console.log(switchedCopy(stayCation)); 
//{ berlin: 'location', occupied: 'status' }
## Example 5 

function code(str) {
  const lowerStr = str.toLowerCase();
  const letters = lowerStr.split('');

  const hackerLetters = ['a', 'e', 'i', 'o', 's'];
  const replacements = ['4', '3', '1', '0', '5'];

  for (let i = 0; i < letters.length; i++) {
    const index = hackerLetters.indexOf(letters[i]);
    if (index !== -1) {
      letters[i] = replacements[index];
    }
  }

  return letters.join('');
}

console.log(code('hi. how are you'));
//h1. h0w 4r3 y0u

## Example 6 
const recipe = {
  name: "cakes",
  author: "Fran",
  preparationTime: "2 hours",
  ingredients: {
    sugar: "3 cups",
    butter: "1 cup",
    flour: "2.5 cups"
  },
  showIngredients() {
    return Object.values(this.ingredients).forEach(item=>console.log(item));
  }
};
recipe.ingredients.ginger = "10g";
console.log(recipe.ingredients);
recipe.ingredients.ginger = "30g";
console.log(recipe.ingredients);
//{ sugar: '3 cups', butter: '1 cup', flour: '2.5 cups', ginger: '30g' }

## Object + Remove 

 const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
};
delete programming.languages;
console.log(programming);
//{ isChallenging: true, isRewarding: true, difficulty: 8 }


## Object + Add 
## Example 1 
const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
programming.isFun = true;
console.log(programming);
//{
  languages: [ 'JavaScript', 'Python', 'Ruby' ],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes: 'http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke',
  isFun: true
}

## Example 2 

const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("Go");
console.log(programming);
//{
  languages: [ 'JavaScript', 'Python', 'Ruby', 'Go' ],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes: 'http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke'
//}
## Example 3 
const recipe = {
  name: "cakes",
  author: "Fran",
  preparationTime: "2 hours",
  ingredients: {
    sugar: "3 cups",
    butter: "1 cup",
    flour: "2.5 cups"
  },
  showIngredients() {
    return Object.values(this.ingredients).forEach(item=>console.log(item));
  }
};
recipe.ingredients.ginger = "10g";
console.log(recipe.ingredients);
//{ sugar: '3 cups', butter: '1 cup', flour: '2.5 cups', ginger: '10g' }

## Object + Extract 
const doggo = {
  name: "Toby",
  breed: "Yorkshire and Scottish terrier mix",
 
  favoriteFoods: ["meats", "doggy biscuits", "bones"],
};
console.log(doggo.favoriteFoods[1]);
//doggy biscuits
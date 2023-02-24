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

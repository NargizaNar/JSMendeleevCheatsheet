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

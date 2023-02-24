<!--moved to Object + Replace 
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
//{ sugar: '3 cups', butter: '1 cup', flour: '2.5 cups', ginger: '10g' } -->

## Function + Object 
const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
};
programming.worthwhile = () => {
  if (programming.isChallenging && programming.isRewarding) {
    return `Learning the programming languages: ${programming.languages.join(', ')} is rewarding and challenging`;
  } 
  return false
};

console.log(programming.worthwhile())
 //Learning the programming languages: JavaScript, Python, Ruby is rewarding and challenging


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

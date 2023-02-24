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

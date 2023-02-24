## Array + Remove 
## Example 1 
### nameArray.slice(position,position)
const asianCities = ["Hong Kong", "Taiwan", "Seoul", "Osaka", "Manila"];
const citiesArr = asianCities.slice(1, 4);
console.log(citiesArr);
//[ 'Taiwan', 'Seoul', 'Osaka' ], created variable 'citiesArr'

## Example 2 
const euroCities = ["Paris", "London", "Rome", "Prague", "Valletta"];
euroCities.pop();
console.log(euroCities);
//[ 'Paris', 'London', 'Rome', 'Prague' ], removed Valletta 

### Example 3 
const euroCities = ["Paris", "London", "Rome", "Prague", "Valletta"];
euroCities.splice(2, 1);
console.log(euroCities);
//[ 'Paris', 'London', 'Prague', 'Valletta' ], 'Rome' removed


## Function + Special 
## Callback Function 
## Example 1 
function greetMessage(name){
    console.log(`Good Morning, ${name}`)
}
greetMessage("John") // print "Good Morning, John"


function greetUsers(array,callback){
    array.forEach(user=>{
        callback(user)
    })
}


greetUsers(["John","Peter","Mark"], greetMessage)
<!-- Good Morning, John
Good Morning, John
Good Morning, Peter
Good Morning, Mark -->

## Example 2 
function squareNumber(number){
return number*number
}

function square(array,callback){
return array.map(num=> callback(num))
}

console.log(square([1,2,3,4,5],squareNumber))
//[ 1, 4, 9, 16, 25 ]


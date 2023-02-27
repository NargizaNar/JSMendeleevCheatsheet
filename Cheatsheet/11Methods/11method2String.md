## String length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
//26 

## String slice()
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
// Banana

## String substring()
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);
//Banana

## String substr()
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
// Banana

## String replace() and 
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
//Please visit W3Schools !


## String replaceAll() 
let text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
//I love dogs. Dogs are very easy to love. Dogs are very popular.

## String toUpperCase()
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
### Example 
<p id="demo">Hello World!</p>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML =
  text.toUpperCase();
}
</script>
//HELLO WORLD!

## String toLowerCase()
let text1 = "Hello World!";       // String
let text2 = text1.toLowerCase();  // text2 is text1 converted to lower
### Example 
<p id="demo">Hello World!</p>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML =
  text.toLowerCase();
}
</script>
//hello world!

## String concat()
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
### Example 
<script>
let text1 = "Hello";
let text2 = "World!";
let text3 = text1.concat(" ",text2);
document.getElementById("demo").innerHTML = text3;
</script>
//Hello World!

## String trim()
let text1 = "      Hello World!      ";
let text2 = text1.trim();
### Example 
<script>
let text1 = "     Hello World!     ";
let text2 = text1.trim();

document.getElementById("demo").innerHTML =
"Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;
</script>

//Length text1 = 22
// Length text2 = 12

## String trimStart()
let text1 = "     Hello World!     ";
let text2 = text1.trimStart();
### Example 
<script>
let text1 = "     Hello World!     ";
let text2 = text1.trimStart();

document.getElementById("demo").innerHTML =
"Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;
</script>
//Length text1 = 22
//Length text2 = 17

## String trimEnd()
let text1 = "     Hello World!     ";
let text2 = text1.trimEnd();
### Example 
<script>
let text1 = "     Hello World!     ";
let text2 = text1.trimEnd();

document.getElementById("demo").innerHTML =
"Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;
</script>
//Length text1 = 22
//Length text2 = 17

## String padStart()
let text = "5";
let padded = text.padStart(4,"x");
### Example 
<script>
let numb = 5;
let text = numb.toString();
document.getElementById("demo").innerHTML = text.padStart(4,0);
</script>
//0005

## String padEnd()
let text = "5";
let padded = text.padEnd(4,"x");
### Example 
<script>
let text = "5";
text = text.padEnd(4,"0");

document.getElementById("demo").innerHTML = text;
</script>

//5000

## String charAt()
let text = "HELLO WORLD";
let char = text.charAt(0);
### Example 
let text = "HELLO WORLD";
let char = text.charAt(0);
//H

## String split()
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe

### Example
let text = "Hello";
const myArr = text.split("");

text = "";
for (let i = 0; i < myArr.length; i++) {
  text += myArr[i] + "<br>"
}
// 
H
e
l
l
o

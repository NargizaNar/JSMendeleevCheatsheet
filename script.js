function display(val){

document.getElementById('result').value += val

return val

}

function evaluate(inputStr) {
    switch (true) {
        case inputStr === "char+string" || inputStr === "string+char":
            return "../Cheatsheet/1Chars/1char2String.md";
        case inputStr === "char+boolean" || inputStr === "boolean+char":
            return "../Cheatsheet/1Chars/1char3Boolean.md";
        case inputStr === "char+number" || inputStr === "number+char":
            return "../Cheatsheet/1Chars/1char4Number.md";
        case inputStr === "char+loop" || inputStr === "loop+char":
            return "../Cheatsheet/1Chars/1char5Loop.md";
        case inputStr === "char+compare" || inputStr === "compare+char":
            return "../Cheatsheet/1Chars/1charCompare.md";
        //replaced one line below: case inputStr === "char+info" || "info+char":
        case inputStr === "char":
            return "../Cheatsheet/1Chars/1charInfo.md";
        case inputStr === "char+extract" || inputStr === "extract+char":
            return "../Cheatsheet/1Chars/1charExtract.md";
        case inputStr === "char+replace" || inputStr === "replace+char":
            return "../Cheatsheet/1Chars/1charReplace.md";
        case inputStr === "char+special" || inputStr === "special+char":
            return "../Cheatsheet/1Chars/1charSpecial.md";
//// !!!case inputStr === "string+string" :
           //// return "../Cheatsheet/2Strings/2string2String.md";
        case inputStr === "string+string":
            return "../Cheatsheet/2Strings/2string2String.md";
        // merged with 3boolean2String.md: case inputStr === "string+boolean"|| inputStr === "boolean+string":
        //     return "../Cheatsheet/2Strings/2string3Boolean.md"
        // merged with 4num2String: case inputStr === "string+number" || inputStr === "number+string":
            //return "../Cheatsheet/2Strings/2string4Number.md";
        // merged with see 5Loops/5loop2String.md: case inputStr === "string+loop" || inputStr === "loop+string":
          //  return "../Cheatsheet/2Strings/2string5Loop.md";
//!!case inputStr === "string+extract" || inputStr === "extract+string":
            //return "../Cheatsheet/2Strings/2stringExtract.md";
        //replaced one line below: case inputStr === "string+info" || inputStr === "info+string":
//!!case inputStr === "string":
           // return "../Cheatsheet/2Strings/2stringInfo.md";
//!!case inputStr === "string+replace" || inputStr === "replace+string":
            //return "../Cheatsheet/2Strings/2stringReplace.md";
        case inputStr === "boolean+string" || inputStr === "string+boolean":
            return "../Cheatsheet/3Boolean/3boolean2String.md";
        // merged with 4number3Boolean:  case inputStr === "boolean+number"|| inputStr === "number+boolean":
        //     return "../Cheatsheet/3Boolean/3boolean4Number.md" 
        case inputStr === "boolean+loop" || inputStr === "loop+boolean":
            return "../Cheatsheet/3Boolean/3boolean5Loop.md";
        case inputStr === "boolean+compare" || inputStr === "compare+boolean":
            return "../Cheatsheet/3Boolean/3booleanCompare.md";
        //repalced one line below: case inputStr === "boolean+info" || inputStr === "info+boolean":
        case inputStr === "boolean":
            return "../Cheatsheet/3Boolean/3booleanInfo.md";
        case inputStr === "boolean+special" || inputStr === "special+boolean":
            return "../Cheatsheet/3Boolean/3booleanSpecial.md";
        case inputStr === "number+boolean" || inputStr === "boolean+number":
            return "../Cheatsheet/4num3Boolean.md";
        case inputStr === "number+string" || inputStr === "string+number":
            return "../Cheatsheet/4num2String.md";
        case inputStr === "number+number":
            return "../Cheatsheet/4num4Num.md";
        // merged with see 5loop4Number.md: case inputStr === "number+loop"|| inputStr === "loop+number":
        //     return "../Cheatsheet/4num5Loop.md"
        case inputStr === "number+array" || inputStr === "array+number":
            return "../Cheatsheet/4num6Array.md";
        case inputStr === "number+compare" || inputStr === "compare+number":
            return "../Cheatsheet/4numCompare.md";
        //replaced one line below: case inputStr === "number+info" || inputStr === "info+number":
        case inputStr === "number":
            return "../Cheatsheet/4numInfo.md";
        case inputStr === "number+replace" || inputStr === "replace+number":
            return "../Cheatsheet/4numReplace.md";
       case inputStr === "loop+string"|| inputStr === "string+loop":
            return "../Cheatsheet/5Loops/5loop2String.md"
        case inputStr === "loop+boolean" || inputStr === "boolean+loop":
            return "../Cheatsheet/5Loops/5loop3Boolean.md";
        case inputStr === "loop+number" || inputStr === "number+loop":
            return "../Cheatsheet/5Loops/5loop4Number.md";
        case inputStr === "loop+array" || inputStr === "array+loop":
            return "../Cheatsheet/5Loops/5loop6Array.md";
        //replace one line below: case "loop+info" || inputStr === "info+loop":
        case inputStr === "loop":
            return "../Cheatsheet/5Loops/5loopInfo.md";
        // merged with 4number6Array.md: case inputStr === "array+number"|| inputStr === "number+array":
        //     return "../Cheatsheet/6Arrays/6array4Number.md"
        // merged with  5loop6Array.md : case inputStr === "array+loop"|| inputStr === "loop+array":
        //     return "../Cheatsheet/6Arrays/6array5Loop.md"   
        // reaplaced with Array + Replace: case inputStr === "array+Add" || inputStr === "Add+array":
            //return "../Cheatsheet/6Arrays/6arrayAdd.md";
        case inputStr === "array+extract" || inputStr === "extract+array":
            return "../Cheatsheet/6Arrays/6arrayExtract.md";
        //replaced with a line below: case inputStr === "array+info" || inputStr === "info+array":
        case inputStr === "array":
            return "../Cheatsheet/6Arrays/6arrayInfo.md";
        case inputStr === "array+remove" || inputStr === "remove+array":
            return "../Cheatsheet/6Arrays/6arrayRemove.md";
        case inputStr === "array+replace" || inputStr === "replace+array":
            return "../Cheatsheet/6Arrays/6arrayReplace.md";
        case inputStr === "array+special" || inputStr === "special+array":
            return "../Cheatsheet/6Arrays/6arraySpecial.md";
        case inputStr === "class+string" || inputStr === "string+class":
            return "../Cheatsheet/7Classes/7class2String.md";
        case inputStr === "class+boolean" || inputStr === "boolean+class":
            return "../Cheatsheet/7Classes/7class3Boolean.md";
        case inputStr === "class+number" || inputStr === "number+class":
            return "../Cheatsheet/7Classes/7class4Number.md";
        // replaced with a combination  Class + Replace: case inputStr === "class+add" || inputStr === "add+class":
          //  return "../Cheatsheet/7Classes/7classAdd.md";
       // replaced with a line below: case inputStr === "class+info" || inputStr === "info+class":
        case inputStr === "class":
            return "../Cheatsheet/7Classes/7classInfo.md";
        case inputStr === "class+replace" || inputStr === "replace+class":
            return "../Cheatsheet/7Classes/7classReplace.md";
        case inputStr === "class+special" || inputStr === "special+class":
            return "../Cheatsheet/7Classes/7classSpecial.md";
        case inputStr === "object+char" || inputStr === "char+object":
            return "../Cheatsheet/8Objects/8object1Char.md";
        case inputStr === "object+string" || inputStr === "string+object":
            return "../Cheatsheet/8Objects/8object2String.md";
        case inputStr === "object+boolean" || inputStr === "boolean+object":
            return "../Cheatsheet/8Objects/8object3Boolean.md";
        case inputStr === "object+number" || inputStr === "number+object":
            return "../Cheatsheet/8Objects/8object4Number.md";
        case inputStr === "object+loop" || inputStr === "loop+object":
            return "../Cheatsheet/8Objects/8object5Loop.md";
        case inputStr === "object+array" || inputStr === "array+object":
            return "../Cheatsheet/8Objects/8object6Array.md";
        case inputStr === "object+object":
            return "../Cheatsheet/8Objects/8object8Object.md";
        //replaced with a combination Object+Replace : case inputStr === "object+add" || inputStr === "add+object":
          //  return "../Cheatsheet/8Objects/8objectAdd.md";
        case inputStr === "object+extract" || inputStr === "extract+object":
            return "../Cheatsheet/8Objects/8objectExtract.md";
        //replaced with a line below: case inputStr === "object+info" || inputStr === "info+object":
        case inputStr === "object":
            return "../Cheatsheet/8Objects/8objectInfo.md";
        case inputStr === "object+remove" || inputStr === "remove+object":
            return "../Cheatsheet/8Objects/8objectRemove.md";
        case inputStr === "object+replace" || inputStr === "replace+object":
            return "../Cheatsheet/8Objects/8objectReplace.md";
        case inputStr === "isNaN+number" || inputStr === "number+NaN":
            return "../Cheatsheet/9NaN/9isNaN4Number.md";
        //replaced with a line below: case inputStr === "isNaN+info" || inputStr === "info+NaN":
        case inputStr === "isNaN":
            return "../Cheatsheet/9NaN/9isNaNInfo.md";
        case inputStr === "isNaN+string" || inputStr === "string+NaN":
            return "../Cheatsheet/9NaN/9isNaN2String.md";
        case inputStr === "typeof+string" || inputStr === "string+typeof":
            return "../Cheatsheet/9NaN/9typeof2String.md";
        case inputStr === "typeof+number" || inputStr === "number+typeof":
            return "../Cheatsheet/9NaN/9typeof4Number.md";
        case inputStr === "typeof+array" || inputStr === "array+typeof":
            return "../Cheatsheet/9NaN/9typeof6Array.md";
// !!!!!case inputStr === "typeof+array" || inputStr === "array+typeof":
            //return "../Cheatsheet/9NaN/9typeof6Array.md";
        //moved to NaN info: case inputStr === "typeof+info" || inputStr === "info+typeof":
//!!! merged with NaN info: case inputStr === "typeof":
           // return "../Cheatsheet/9NaN/9typeofInfo.md";
        case inputStr === "function+char" || inputStr === "char+function":
            //replaced: return "../Cheatsheet/10Functions/10function1Char.md";
            return "../Cheatsheet/1Chars/1char10Function.md";
        case inputStr === "function+string" || inputStr === "string+function":
            return "../Cheatsheet/10Functions/10function2String.md";
        case inputStr === "function+boolean" || inputStr === "boolean+function":
            // !!replaced: return "../Cheatsheet/10Functions/10function3boolean.md";
            return "../Cheatsheet/3Boolean/3boolean10Function.md";
        case inputStr === "function+number" || inputStr === "number+function":
            // !! replaced: return "../Cheatsheet/10Functions/10function4Number.md";
        case inputStr === "function+number" || inputStr === "number+function":
            return "../Cheatsheet/4Numbers/4num10Function.md";
        case inputStr === "function+array" || inputStr === "array+function":
            return "../Cheatsheet/10Functions/10function6Array.md";
        case inputStr === "function+object" || inputStr === "object+function":
            return "../Cheatsheet/10Functions/10function8Object.md";
        case inputStr === "function+loop" || inputStr === "loop+function":
            return "../Cheatsheet/10Functions/10function5Loop.md";
        //replaced with a line below: case inputStr === "function+info" || inputStr === "info+function":
        case inputStr === "function":
            return "../Cheatsheet/10Functions/10functionInfo.md";
        case inputStr === "function+special" || inputStr === "special+function":
            return "../Cheatsheet/10Functions/10functionSpecial.md";
        case inputStr === "method+object" || inputStr === "object+method":
            return "../Cheatsheet/11Methods/11method8Object.md";
        case inputStr === "method+string"|| inputStr === "string+method":
            return "../Cheatsheet/11Methods/11method2String.md";
        //replaced with a line below: case inputStr === "method+info" || inputStr === "info+method":
        case inputStr === "method":
            return "../Cheatsheet/11Methods/11methodInfo.md";
        case inputStr === "info, press = ":
            return "../Cheatsheet/11Methods/GeneralInfo.md";
        default:
            return "No info added yet";
    }    
}

function solve(){

    let result = document.getElementById('result').value
    console.log("result", result)
    
    let imgPath = evaluate(result);
        // information = evaluate("loop+string")
        // information = "../5loop2String.md"
    console.log("imgPath", imgPath)

    // Show as image
    // document.getElementById('screen').innerHTML = "<img src=\""+imgPath+"\" width=\"400px\" height=\"150px\">";
    
    // Download
    document.getElementById('screen').innerHTML = "<a href=\""+imgPath+"\" download> Download Now </a>"
    
    // document.getElementById('screen').innerHTML = "<iframe src=\"../5Loops/5loop2String.md\" width=\"500\" height=\"400\"></iframe>";
}



function clearScreen() {
    document.getElementById('screen').innerHTML = `
    <div class = "innerscreen">

        <input type='text' id='result' class='screeninner' style="text-align: center; width: 14rem; height: 3rem; font-size: 20px"></td>

    </div>
    `
    

document.getElementById('result').value = ''

}
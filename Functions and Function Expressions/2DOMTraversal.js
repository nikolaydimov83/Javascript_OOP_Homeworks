//Will implement it with recursion

function htmlParser(){
    this.selector = ".birds";
let htmlDoc=document.querySelectorAll(this.selector)
function textToPrint(element,blankspace){
    let text=blankspace+element.tagName+`: `;
    if (element.id){
        text+=`id="${element.id}"`
    }
    if (element.className){
        text+=`class="${element.className}"`
    }
    return text;
}
let parsedText='';
function elementTraversal(element,blankspace){
    let newBlankspace;
    let arrayOfChildren=element.childNodes
    
    for (let child of arrayOfChildren){
        if (child.tagName){
            parsedText+=textToPrint(child,blankspace)+`
`;
        
            newBlankspace=' '+blankspace
        }
        
        elementTraversal(child,newBlankspace);
    }
    return parsedText;
}

function getParsedByQuerySelector(){
    
    parsedText='';
    for (let i of htmlDoc){
    parsedText+=elementTraversal(i,'')
}
console.log(parsedText)
return parsedText;
}
return {
    getParsedByQuerySelector: getParsedByQuerySelector
   
}
}


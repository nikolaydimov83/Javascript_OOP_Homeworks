let specialConsole=(function(){
    function writeLine(textToPrint,placeholder){
        let arrayOfPlaceholderTexts=[]
        arrayOfPlaceholderTexts=writeLine.arguments;
        let arrayOfPlaceholderTexts1=[];
        for (let i in arrayOfPlaceholderTexts){
            if (i!=='0'){
                arrayOfPlaceholderTexts1.push(arrayOfPlaceholderTexts[i]);
            }
            
        }
        if (textToPrint.search(/{[0-9]+}/)!==-1){
        let arraySplitByPlaceholders=textToPrint.split(/{[0-9]+}/gi)
        arraySplitByPlaceholders=arraySplitByPlaceholders.filter(function(x){return x!==""})
        if(arraySplitByPlaceholders.length!==arrayOfPlaceholderTexts1.length){
            throw Error('Placeholders in text and place holder arguments in function are different!');
        }
        for (let i in arraySplitByPlaceholders){
            arraySplitByPlaceholders[i]+=arrayOfPlaceholderTexts1[i];
        }
       
        return arraySplitByPlaceholders.join('');
        }
        else{
            console.log(textToPrint)
            return textToPrint
        } 

    }
    return{
        writeLine:writeLine
    }
})()
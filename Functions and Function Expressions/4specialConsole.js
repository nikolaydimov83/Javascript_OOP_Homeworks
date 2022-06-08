let specialConsole=(function(){
    function writeLine(textToPrint,placeholder){
        let arrayOfPlaceholderTexts=writeLine.arguments.shift();
        let arraySplitByPlaceholders=textToPrint.split(/{[0-9]+}/)
        for (let i in arraySplitByPlaceholders){
            arraySplitByPlaceholders[i]+=arrayOfPlaceholderTexts[i];
        }
        return arraySplitByPlaceholders.join('');
    }
    return{
        writeLine:writeLine
    }
})()
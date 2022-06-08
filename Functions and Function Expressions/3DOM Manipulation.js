let domManipulator=(function(){
    function addToParent(selector,elementType,text){
        let parent=document.getElementById(selector);
        let child=document.createElement(elementType);
        child.innerText=text;
        child.id="d";
        child.className="d"
        parent.appendChild(child);
    }
    function removeSelectedChild(selector){
        let child=document.getElementById(selector);
        child.remove();
    }
    function addEventHandler(nodeSelector,eventType,handler){
        let element=document.getElementById(nodeSelector);
        element.addEventListener(eventType,handler)
        
    }
    function retriveElementsByCSSSelect(selector){
        return document.querySelectorAll(selector)
    }
    return{
        addToParent:addToParent,
        removeSelectedChild:removeSelectedChild,
        addEventHandler:addEventHandler,
        retriveElementsByCSSSelect:retriveElementsByCSSSelect
    }
})()

let _arrayOfChildren= new WeakMap();
let _ownSiblingID=new WeakMap();
let _title= new WeakMap();
let _divWrapper=new WeakMap();
let _parentId=new WeakMap();


class Container{
constructor(title){

    _arrayOfChildren.set(this,[]);
    _title.set(this,title);
    _ownSiblingID.set(this,0);
}

get arrayOfChildren(){
    return _arrayOfChildren.get(this)
}
get title(){
    return _title.get(this)
}
set title(value){
    if (typeof(value)==="string"&&typeof(value)==="number"){
        _title.set(this,value);
    }
    else{
        throw new Error('You are trying to input title in wrong format')
    }
    
}
get divWrapper(){
    return _divWrapper.get(this)
}
set divWrapper(value){
    _divWrapper.set(this,value);
}

createInitialDivPackage(){
    let button=document.createElement('button');
    button.addEventListener('click',ev=>{
        this.addNewElement();
    })
    let input=document.createElement('input');
    input.type='text';
    input.placeholder='Section Title...';
    button.innerText='Add';
    let divWrapper=document.createElement('div');
    let containerHeading=document.createElement('h3');
    containerHeading.innerText=this.title;

    divWrapper.id=this.assignNewID();
    this.assignClass(button,input,divWrapper);
    this.divWrapper=divWrapper;
    this.wrapElementsTodiv(containerHeading,button,input,divWrapper);
    document.body.appendChild(divWrapper);
    return divWrapper
    
}
addNewElement(){   
    let divID=this.assignNewID();
    let newTitle=document.getElementById(divID).getElementsByTagName('input')[0].value;
    let newSiblingID=this.arrayOfChildren.length;
    let newSection= new Section(newTitle,null,newSiblingID);
    newSection.divWrapper=newSection.createDivPackage();
    this.arrayOfChildren.push(newSection);
    document.getElementById(divID).appendChild(newSection.divWrapper);
    
}
assignElementsClass(button,input,divWrapper){
    button.className=this.constructor.name.toLowerCase();
    input.className=this.constructor.name.toLowerCase();
    divWrapper.className=this.constructor.name.toLowerCase();
}
wrapElementsTodiv(heading,button,input,divWrapper){
    divWrapper.appendChild(heading)
    divWrapper.appendChild(button);
    divWrapper.appendChild(input);

}
assignNewID(){
    return `${this.constructor.name}Child-${this.ownSiblingID}`;
}
assignClass(button,input,divWrapper){
    button.className=this.constructor.name.toLowerCase();
    input.className=this.constructor.name.toLowerCase();
    divWrapper.className=this.constructor.name.toLowerCase();
}

}
class Section extends Container{
    constructor(title,divWrapper,ownSiblingID){
          super(title)
    _divWrapper.set(this,divWrapper);   
    _ownSiblingID.set(this,ownSiblingID);
    _arrayOfChildren.set(this,[]);
    
    }
    get ownSiblingID(){
        return _ownSiblingID.get(this);
    
    }
    get divWrapper(){
        return _divWrapper.get(this);
    }
    set divWrapper(value){
        _divWrapper.set(this,value);
    }
    createDivPackage(){
        let button=document.createElement('button');
        button.addEventListener('click',ev=>{
            this.addNewElement();
        })
        let input=document.createElement('input');
        input.type='text';
        input.placeholder='Type task...';
        button.innerText='+';
        
        let childTitle=document.createElement('h4');
        childTitle.innerText=this.title;
        let divWrapper=document.createElement('div');
        divWrapper.id=this.assignNewID();
        this.wrapElementsTodiv(childTitle,button,input,divWrapper)
        
        this.assignClass(button,input,divWrapper);
        return divWrapper
    }
    addNewElement(){   
        let idSection=`${this.constructor.name}Child-${this.ownSiblingID}`;
        let newTitle=document.getElementById(idSection).getElementsByTagName('input')[0].value;
        let newSiblingID=this.arrayOfChildren.length;
        let parentId=this.ownSiblingID;
        let newSection=new Item(newTitle,null,newSiblingID,parentId)
        newSection.divWrapper=newSection.createDivPackage();
        this.arrayOfChildren.push(newSection);
        let idHolder=this.assignNewID();
        document.getElementById(idHolder).appendChild(newSection.divWrapper);
       
        
    }
    
}

class Item extends Section{
    constructor(title,divWrapper,ownSiblingID,parentId){
        super(title,divWrapper, ownSiblingID)
        _parentId.set(this,parentId);
    }
    get parentId(){
        return _parentId.get(this);
    
    }
    assignNewID(){
        return `${this.parentId}-${this.constructor.name}-${this.ownSiblingID}`;
    }
    createDivPackage(){

        let checkBox=document.createElement('input');
        checkBox.type='checkbox';
        checkBox.name=this.assignNewID();
        checkBox.id=`check-box ${this.assignNewID()}`;
        let listenForChange=checkBox.addEventListener('change',ev=>{
            this.checkTaskCompleted(checkBox.id)
        })
        let childTitle=document.createElement('label');
        childTitle.innerText=this.title;
        childTitle.setAttribute("for",`check-box ${this.assignNewID()}` );
        let divWrapper=document.createElement('div');
        
        divWrapper.appendChild(checkBox);
        divWrapper.appendChild(childTitle);
        divWrapper.id=this.assignNewID();
        
        this.assignClass(divWrapper,checkBox,childTitle);
        return divWrapper
    }  
    checkTaskCompleted(id){
        let checkBox=document.getElementById(id)
            if (checkBox.checked){
                checkBox.parentNode.style.backgroundColor ='#90EE90'
        }else{
                checkBox.parentNode.style.backgroundColor ='#ffffff'
        }
    }
}
let a =new Container('Списък със задачи на Ники');
a.createInitialDivPackage()
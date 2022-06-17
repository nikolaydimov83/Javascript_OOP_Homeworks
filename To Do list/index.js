let _arrayOfChildren= new WeakMap()
let _ownSiblingID=new WeakMap()
let _title= new WeakMap()
let _divWrapper=new WeakMap()
let _parent=new WeakMap()


class Container{
constructor(title){

    _arrayOfChildren.set(this,[]);
    _title.set(this,title);
    //this.createInitialDivPackage();

}

get arrayOfChildren(){
    return _arrayOfChildren.get(this)
}
get title(){
    return _title.get(this)
}
set title(value){
    _title.set(this,value);
}
get divWrapper(){
    return _divWrapper.get(this)
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
    input.placeholder='Type section Title...';
    button.innerText='Add Section';
    let divWrapper=document.createElement('div');
    let containerHeading=document.createElement('h3');
    containerHeading.innerText=this.title;
    divWrapper.appendChild(containerHeading);
    divWrapper.appendChild(button);
    divWrapper.appendChild(input);
    divWrapper.id='container';
    this.assignClass(button,input,divWrapper);
    this.divWrapper=divWrapper;
    document.body.appendChild(divWrapper);
    return divWrapper
    
}
addNewElement(){   
    let newTitle=document.getElementById('container').getElementsByTagName('input')[0].value;
    let newSiblingID=this.arrayOfChildren.length;
    let newSection= new Section(newTitle,null,newSiblingID);
    this.arrayOfChildren.push(newSection);
    newSection.divWrapper=newSection.createDivPackage();
    this.arrayOfChildren=newSection.divWrapper;
    document.getElementById('container').appendChild(newSection.divWrapper);
    
}
assignElementsClass(button,input,divWrapper){
    button.className=this.constructor.name.toLowerCase();
    input.className=this.constructor.name.toLowerCase();
    divWrapper.className=this.constructor.name.toLowerCase();
}
wrapElementsTodiv(button,input,divWrapper){
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
    //let ownSiblingID =this.arrayOfChildren.length;    
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
        button.innerText='Add item';
        let checkBox=document.createElement('input');
        checkBox.type='checkbox';
        let childTitle=document.createElement('h4');
        childTitle.innerText=this.title;
        let divWrapper=document.createElement('div');
        divWrapper.appendChild(childTitle);
        divWrapper.appendChild(button);
        divWrapper.appendChild(input);
        divWrapper.appendChild(checkBox)
        divWrapper.id=this.assignNewID();
        this.assignClass(button,input,divWrapper);
        return divWrapper
    }
    addNewElement(){   
        let idSection=`${this.constructor.name}Child-${this.ownSiblingID}`;
        let newTitle=document.getElementById(idSection).getElementsByTagName('input')[0].value;
        let newSiblingID=this.arrayOfChildren.length;
        let newSection=new Item(newTitle,null,newSiblingID)
        this.arrayOfChildren.push(newSection);
        newSection.divWrapper=newSection.createDivPackage();
        this.arrayOfChildren=newSection.divWrapper;
        let idHolder=this.assignNewID();
        document.getElementById(idHolder).appendChild(newSection.divWrapper);
       
        
    }
    
}

class Item extends Section{
    constructor(title,divWrapper,ownSiblingID){
        super(title,divWrapper, ownSiblingID)
    }
    
}
let _arrayOfChildren= new WeakMap()
let _ownSiblingID=new WeakMap()
let _title= new WeakMap()
let _divWrapper=new WeakMap()


class Container{
constructor(title){

    _arrayOfChildren.set(this,[]);
    _title.set(this,title);
    this.createDivPackage();

}

get arrayOfChildren(){
    return _arrayOfChildren.get(this);
}
get title(){
    return _title.get(this)
}
set title(value){
    _title.set(this,value)
}
get divWrapper(){
    return _divWrapper.get(this)
}
set divWrapper(value){
    _title.set(this,value)
}

createDivPackage(){
    let button=document.createElement('button');
    button.addEventListener('click',ev=>{
        this.addNewElement()
    })
    let input=document.createElement('input');
    input.type='text';
    let divWrapper=document.createElement('div');
    divWrapper.innerText=this.title;
    divWrapper.appendChild(button);
    divWrapper.appendChild(input);
    divWrapper.id='container';
    this.assignClass(button,input,divWrapper);
    this.divWrapper=divWrapper;
    document.body.appendChild(divWrapper);
    
}
addNewElement(){   
    let newTitle=document.getElementById('container').getElementsByTagName('input')[0].value
    this.arrayOfChildren.push(new Section([],newTitle,divWrapper,this.arrayOfChildren.length));
    
}
assignElementsClass(button,input,divWrapper){
    button.className=this.constructor.name.toLowerCase()
    input.className=this.constructor.name.toLowerCase()
    divWrapper.className=this.constructor.name.toLowerCase()
}
wrapElementsTodiv(button,input,divWrapper){
    divWrapper.appendChild(button);
    divWrapper.appendChild(input)

}
assignNewID(){
    return `${this.constructor.name}Child-${this.arrayOfChildren.length}`
}
assignClass(button,input,divWrapper){
    button.className=this.constructor.name.toLowerCase()
    input.className=this.constructor.name.toLowerCase()
    divWrapper.className=this.constructor.name.toLowerCase()
}

}
class Section extends Container{
    constructor(title,divWrapper, ownSiblingID){
          super(title)
    _divWrapper.set(this,divWrapper);    
    _ownSiblingID.set(this,ownSiblingID);
    _arrayOfChildren.set(this,[])
    }
    get ownSiblingID(){
        return _ownSiblingID.get(this);
    
    }
    get divWrapper(){
        return _divWrapper.get(this)
    }
    set divWrapper(value){
        _title.set(this,value)
    }
    createDivPackage(){
        let button=document.createElement('button');
        let input=document.createElement('input');
        input.type='text';
        let checkBox=document.createElement('input')
        checkBox.type='checkbox';
        let divWrapper=document.createElement('div');
    
        divWrapper.appendChild(button);
        divWrapper.appendChild(input);
        divWrapper.appendChild(checkBox)
        divWrapper.id=this.assignNewID();
        this.assignClass(button,input,divWrapper);
    }
    addNewElement(){   
        let idSection=`${this.constructor.name}Child-${this.ownSiblingID}`
        let newTitle=document.getElementById(idSection).getElementsByTagName('input')[0].value
        this.arrayOfChildren.push(new Item(newTitle,divWrapper,this.arrayOfChildren.length));
        parent=document.getElementById()
        
    }
    
}

class Item extends Section{
    constructor(title,divWrapper, ownSiblingID){
        super(title,divWrapper, ownSiblingID)
    }
    
}
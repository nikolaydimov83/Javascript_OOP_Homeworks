let _arrayOfChildren= new WeakMap()
let _title= new WeakMap()
let _button=new WeakMap()
let _textField=new WeakMap()
let _classOfObject=new WeakMap()
let _ownSiblingID=new WeakMap()

class Container{
constructor(arrayOfChildren,title,button, textField,classOfObject){
    arrayOfChildren=[]
    _arrayOfChildren.set(this,arrayOfChildren)

    title='New list'  
    _title.set(this,title)

    button=createButton(this.constructor.name,'btn-cntr')
    _button.set(this, button)
    textField=createTextInput('input-cntr')

    _textField.set(this,textField)
    classOfObject=this.constructor.name
    _classOfObject.set(this, classOfObject)
}

get arrayOfChildren(){
    return _arrayOfChildren.get(this);

}
createButton(){
    let button=document.createElement('button')
    switch (this.constructor.name){
        case'Container':
        button.innerText='New Section'
        button.id=`cont-btn`
        break
        case'Section':
        button.innerText='+'
        button.id=`section-btn-${this.ownSiblingID}`
        break
        case'Item':
        button=document.createElement('input')
        button.setAttribute("type", "checkbox");
        button.id=`item-btn-${this.ownSiblingID}`
        break
        default:
            throw Error('You are trying to assign button to unknown type of Element')
    }
    return button
        
}
createTextInput(tagName,id){
    let input=document.createElement('input')
    switch (tagName){
        case'Container':
        input.placeholder='Title...'
        input.id='cont-btn'
        break
        case'Section':
        input.placeholder='Add item...'
        input.id=`section-btn-${this.ownSiblingID}`
        break
        default:
            throw Error('You are trying to assign input to unknown type of Element')
    }
    return input
        
}
addNewElement(){
    let elementType=this.constructor.name;
    switch (elementType){
        case 'Container':
            let newElementArrayID=this.arrayOfChildren.length
            this.arrayOfChildren.push(new Section([],this.textField,'btn','textfield','class',newElementArrayID))
            break
        case 'Section':
            break
        case 'Item':
            break
    }
}
}
class Section extends Container{
    constructor(arrayOfChildren,title,button,textField,classOfObject,ownSiblingID){
          super(arrayOfChildren,title,button,textField,classOfObject)
          
          _ownSiblingID.set(this,ownSiblingID)

    }
    get arrayOfChildren(){
        return _ownSiblingID.get(this);
    
    }
    
}

class Items extends Section{
    constructor(arrayOfChildren,title,button,textField,classOfObject,ownSiblingID){
        super(arrayOfChildren,title,button,textField,classOfObject,ownSiblingID)
    }
    
}
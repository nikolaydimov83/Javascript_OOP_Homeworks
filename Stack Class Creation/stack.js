let _stackHolder=new WeakMap()
class Stack{
    constructor(stackArray) {
        _stackHolder.set(this,stackArray)
    }

peek(){
    let stackAsArray=_stackHolder.get(this)
    return stackAsArray[stackAsArray.length-1]
}
pop(){
    let stackAsArray=_stackHolder.get(this);
    if (stackAsArray.length>0){
        let removedItem=stackAsArray.pop();
        _stackHolder.set(this,stackAsArray)
        return removedItem
    }else{
        throw Error('Stack is empty! Cannot pop anymore!')
    }
    
}
count(){
    let stackAsArray=_stackHolder.get(this)
    return stackAsArray.length
}
}

let a=new Stack([1,2,3]) 
let _name=new WeakMap;
let _area=new WeakMap;
let _location=new WeakMap;
let _isFurnitured=new WeakMap;
function checkInputIsNumberInRng(input,start,end){
if (typeof input==='number'&&start<=number&&number<=end&&Number.isInteger(input)){
    return true
} else {throw new RangeError(`The input should be an integer number in range between ${start}-${end}`)}
}
function checkInputIsString(input) {
    if (typeof input ==='string'){
        return true
    }else{throw new TypeError('The input must be string')}
}

function parseBoolianInput(input) {
    if (input ==='true'){
        return true
    }else if(input==='false'){
        return false
    }
    else{throw new TypeError('The input must be either "true" or "false"')}
}


class Estate{
    constructor(name,area,location,isFurnitured){
        if(checkInputIsString){
            _name.set(this,name)
        }
        if (checkInputIsNumberInRng){
            _area.set(this,area)
        }
        if(checkInputIsString){
            _location.set(this,location)
        }
        let parsedBoolian=parseBoolianInput(isFurnitured);
        _isFurnitured.set(this,parsedBoolian)
    }
}

boolean
function isHexaDecimal(hexaNumber){
    if (hexaNumber.length===7&&hexaNumber.match(/#[a-f0-9A-F]{6}/)){
        return true
    }else{
        return false
    }
}


class Shapes{
    constructor(x,y,color){
        this.x=x
        this.y=y
        if (isHexaDecimal(color)){
            this.color
        }else{
            throw Error('Color must be in Hexadecimal format')
        }
        
    }
}

let a=new Shapes(1,2,"#456FFF");
console.log(a);
function isHexaDecimal(hexaNumber){
    if (hexaNumber.length===7&&hexaNumber.match(/#[a-f0-9A-F]{6}/)){
        return true
    }else{
        return false
    }
}


class Shape{
    constructor(x,y,color){
        this.x=x
        this.y=y
        if (isHexaDecimal(color)){
            this.color=color;
        }else{
            throw Error('Color must be in Hexadecimal format')
        }
        
    }
    draw(){
        console.log('Waiting to draw')
    }
}
class Circle extends Shape{
    
    constructor(x,y,color,radius){
        super(x,y,color)
        this.radius=radius;
    }
}
Circle.prototype.draw=function(ctx,x,y,r,color){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

class Rectangle extends Shape{
    
    constructor(x,y,color,width,heigth){
        super(x,y,color)
        this.width=width;
        this.heigth=heigth;
    }
}

class Triangle extends Shape{
    
    constructor(x1,y1,x2,y2,x3,y3,color){
        super(x1,y1,color)
        this.x2=x2;
        this.y2=y2;
        this.x3=x3;
        this.y3=y3;
    }
}

class Sector extends Shape{
    
    constructor(x1,y1,x2,y2,color){
        super(x1,y1,color)
        this.x2=x2;
        this.y2=y2;
    }
}

class Point extends Shape{
    
    constructor(x1,y1,color){
        super(x1,y1,color)
        
    }
}

let a=new Shape(1,2,"#456FFF");
console.log(a);
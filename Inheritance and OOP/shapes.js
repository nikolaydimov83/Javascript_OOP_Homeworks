function isHexaDecimal(hexaNumber){
    if (hexaNumber.length===7&&hexaNumber.match(/#[a-f0-9A-F]{6}/)){
        return true
    }else{
        
        throw new TypeError('Color must be in Hexadecimal format')
    }
}
function isPositiveNumber(number,_weakmapValue){
    if (typeof number==='number'&&number>=0){
        _weakmapValue.set(this,number)
        
    }else if (typeof number==='string'){
        throw {message:'The input cannot be string. Please provide positive tumber',
                errorType:'wrongFormatNumericProperties',
                coderStuff:new TypeError('Wrong color') 
            }
    } else if (number<0){
        throw {message:'The input cannot be a negative number. Please provide positive tumber',
        errorType:'wrongRange',
        coderStuff:new TypeError('Wrong color')  
        }
    }
}
const _color=new WeakMap()
const _x1=new WeakMap()
const _y1=new WeakMap()
const _x2=new WeakMap()
const _y2=new WeakMap()
const _x3=new WeakMap()
const _y3=new WeakMap()
const _radius=new WeakMap()
const _width=new WeakMap()
const _heigth=new WeakMap()
class Shape{
    constructor(x1,y1,color){
        
        isPositiveNumber.call(this,x1,_x1);
        isPositiveNumber.call(this,y1,_y1);  

        if (isHexaDecimal(color)){
             _color.set(this,color)
             
        }else{
            throw {message:'Color must be in Hexadecimal format',
                    errorType:'WrongColorFormat',
                    coderStuff:new TypeError('Wrong color')   
        }
        }
     
    }
    
    set color(value) {
        if (isHexaDecimal(value)){

            _color.set(this,value);
        }else{
            throw Error('Color must be in Hexadecimal format')
        }
    }
    get color(){
        return _color.get(this)
    }
    draw(){
        console.log('Waiting to draw')
    }
    displayObjectProperties(){
        let objectOfShapePropValues={
            'type':this.constructor.name,
            'x1':this.x1,
            'y1':this.y1,
            'color':this.color
        }
        return objectOfShapePropValues
    }

    set x1(value){
        isPositiveNumber(value,_x1);
    }
    get x1(){
        return _x1.get(this)
    }
    set y1(value){
        isPositiveNumber(value,_y1);
    }
    get y1(){
        return _y1.get(this)
    }

    
}
class Circle extends Shape{
    
    constructor(x1,y1,color,radius){
        super(x1,y1,color)
        isPositiveNumber.call(this,radius,_radius);
        
    }
    set radius(value){
        isPositiveNumber.call(this,value,_radius);
    }
    get radius(){
        return _radius.get(this)
    }
    displayObjectProperties(){
        let newObjectOfShapePropValues = super.displayObjectProperties()
        newObjectOfShapePropValues.radius=this.radius;
        return newObjectOfShapePropValues
    }
}
Circle.prototype.draw=function(ctx){
    ctx.beginPath();
    ctx.arc(this.x1, this.y1, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
}


class Rectangle extends Shape{
    
    constructor(x1,y1,color,width,heigth){
        super(x1,y1,color)
        isPositiveNumber.call(this,width,_width)
        isPositiveNumber.call(this,heigth,_heigth)

    }
    set width(value){
        isPositiveNumber.call(this,value,_width);
    }
    get width(){
        return _width.get(this)
    }
    set heigth(value){
        isPositiveNumber.call(this,value,_heigth);
    }
    get heigth(){
        return _heigth.get(this)
    }
    displayObjectProperties(){
        let newObjectOfShapePropValues = super.displayObjectProperties()
        newObjectOfShapePropValues.width=this.width;
        newObjectOfShapePropValues.heigth=this.heigth;
        return newObjectOfShapePropValues
    }
}

Rectangle.prototype.draw=function(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x1,this.y1,this.width,this.heigth);
}


class Triangle extends Shape{
    
    constructor(x1,y1,x2,y2,x3,y3,color){
        super(x1,y1,color)
        isPositiveNumber.call(this,x2,_x2);
        isPositiveNumber.call(this,y2,_y2);
        isPositiveNumber.call(this,x3,_x3);
        isPositiveNumber.call(this,y3,_y3);

    }
    set x2(value){
        isPositiveNumber(value,_x2);
    }
    get x2(){
        return _x2.get(this)
    }
    set y2(value){
        isPositiveNumber(value,_y2);
    }
    get y2(){
        return _y2.get(this)
    }

    set x3(value){
        isPositiveNumber(value,_x3);
    }
    get x3(){
        return _x3.get(this)
    }
    set y3(value){
        isPositiveNumber(value,_y3);
    }
    get y3(){
        return _y3.get(this)
    }
    displayObjectProperties(){
        let newObjectOfShapePropValues = super.displayObjectProperties()
        newObjectOfShapePropValues.x2=this.x2;
        newObjectOfShapePropValues.y2=this.y2;
        newObjectOfShapePropValues.x3=this.x3;
        newObjectOfShapePropValues.y3=this.y3;
        return newObjectOfShapePropValues
    }
}

Triangle.prototype.draw=function(ctx){
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2,this.y2)
    ctx.lineTo(this.x3,this.y3)
    ctx.closePath()
    ctx.fillStyle = this.color;
    ctx.fill();
}

class Sector extends Shape{
    
    constructor(x1,y1,x2,y2,color){
        super(x1,y1,color)
        isPositiveNumber.call(this,x2,_x2)
        isPositiveNumber.call(this,y2,_y2)
    }
    set x2(value){
        isPositiveNumber(value,_x2);
    }
    get x2(){
        return _x2.get(this)
    }
    set y2(value){
        isPositiveNumber(value,_y2);
    }
    get y2(){
        return _y2.get(this)
    }
    displayObjectProperties(){
        let newObjectOfShapePropValues = super.displayObjectProperties()
        newObjectOfShapePropValues.x2=this.x2;
        newObjectOfShapePropValues.y2=this.y2;
        return newObjectOfShapePropValues
    }
}
Sector.prototype.draw=function(ctx){
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2,this.y2)
    ctx.strokeStyle = this.color;
    ctx.stroke();
}

class Point extends Shape{
    
    constructor(x1,y1,color){
        super(x1,y1,color)

        
    }
}
Point.prototype.draw=function(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x1,this.y1,1,1);
    
}


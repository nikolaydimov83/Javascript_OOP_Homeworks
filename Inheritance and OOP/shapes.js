function isHexaDecimal(hexaNumber){
    if (hexaNumber.length===7&&hexaNumber.match(/#[a-f0-9A-F]{6}/)){
        return true
    }else{
        return false
    }
}
function isPositiveNumber(number,_weakmapValue){
    if (typeof number==='number'&&number>=0){
        _weakmapValue.set(this,number)
    }else{
        throw Error(`${number} must be positive Number`)
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
            throw Error('Color must be in Hexadecimal format')
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


/*let canvas=document.getElementById('canvas');
let ctx=canvas.getContext("2d");
let shape=new Shape(10,15,'#120fff');
let circle=new Circle(30,30, "#120fff",10)


let rectangle=new Rectangle(70,50,'#120fff',10,10)

let triangle=new Triangle(0,0,30,150,50,50,"#ccc000")

let line=new Sector(0,0,70,70,"#ff0000")
let point = new Point(200,100,"#ff0000")

circle.draw(ctx)
rectangle.draw(ctx);
triangle.draw(ctx)
point.draw(ctx);
line.draw(ctx)*/
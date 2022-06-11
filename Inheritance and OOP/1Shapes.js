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
        this.setColor(color)
        /*if (isHexaDecimal(color)){
            this.color=color;
        }else{
            throw Error('Color must be in Hexadecimal format')
        }*/
     
    }

    setColor(color) {
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
Circle.prototype.draw=function(ctx){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
}

class Rectangle extends Shape{
    
    constructor(x,y,color,width,heigth){
        super(x,y,color)
        this.width=width;
        this.heigth=heigth;
    }
}

Rectangle.prototype.draw=function(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y,this.width,this.heigth);
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

Triangle.prototype.draw=function(ctx){
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x2,this.y2)
    ctx.lineTo(this.x3,this.y3)
    ctx.closePath()
    ctx.fillStyle = this.color;
    ctx.fill();
}

class Sector extends Shape{
    
    constructor(x1,y1,x2,y2,color){
        super(x1,y1,color)
        this.x2=x2;
        this.y2=y2;
    }
}
Sector.prototype.draw=function(ctx){
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
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
    ctx.fillRect(this.x,this.y,1,1);
    
}

class Point1 extends Shape{
    
    constructor(x1,y1,color){
        super(x1,y1,color)

    }
}
let canvas=document.getElementById('canvas');
let ctx=canvas.getContext("2d");
let circle=new Circle(30,30, "#120fff",10)
circle.draw(ctx)

let rectangle=new Rectangle(70,50,'#120fff',10,10)
rectangle.draw(ctx);
let triangle=new Triangle(0,0,30,150,50,50,"#ccc000")
triangle.draw(ctx)
let line=new Sector(0,0,70,70,"#ff0000")
let point = new Point(200,100,"#ff0000")
point.draw(ctx);
line.draw(ctx)

let point1=new Point1(10,10,'#bbbddd')
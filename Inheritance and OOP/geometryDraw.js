let _arrayOfFigures=new WeakMap();
let _canvasID=new WeakMap();
let _ctx=new WeakMap();
let _selectedFigure=new WeakMap();
let _figureIsBeingMovedUp=new WeakMap()
class GeometryDraw{
    
    constructor(arrayOfFigures,canvasID, selectedFigure='-1',figureIsBeingMovedUp=false){
        _arrayOfFigures.set(this,arrayOfFigures)
        _canvasID.set(this,canvasID)
        _selectedFigure.set(this,selectedFigure)
        _figureIsBeingMovedUp.set(this,figureIsBeingMovedUp)
        
    }
    set selectedFigure(value){
        _selectedFigure.set(this,value) 
    }
    get selectedFigure(){
        return _selectedFigure.get(this) 
    }
    set arrayOfFigures(value){
        _arrayOfFigures.set(this,value) 
    }
    get arrayOfFigures(){
        return _arrayOfFigures.get(this) 
    }
    set canvasID(value){
        _canvasID.set(this,value)
    }
    get canvasID(){
        return _canvasID.get(this);
    }
   makeFigurePropertiesInvisible(...resources){
    for (let key in resources){
        resources[key].style.visibility='hidden'
    }
   }
   makeFigurePropertiesVisible(...resources){
    for (let key in resources){
        resources[key].style.visibility='visible'
    }
   }
   visualizeForm(){
        let x1,x2,x3,y1,y2,y3,width,heigth,color,radius,type;    
        x1=document.getElementById('x1')
        x2=document.getElementById('x2')
        x3=document.getElementById('x3')
        y1=document.getElementById('y1')
        y2=document.getElementById('y2')
        y3=document.getElementById('y3')
        width=document.getElementById('width')
        heigth=document.getElementById('heigth')
        radius=document.getElementById('radius')
        type=document.getElementById('type').value
        this.makeFigurePropertiesInvisible(x1,x2,x3,y1,y2,y3,width,heigth,radius)
        switch (type){
            case "point":
                this.makeFigurePropertiesVisible(x1,y1)
            break
            case "line":
                this.makeFigurePropertiesVisible(x1,y1,x2,y2)
            break
            case "triangle":
                this.makeFigurePropertiesVisible(x1,y1,x2,y2,x3,y3)
            break
            case "rectangle":
                this.makeFigurePropertiesVisible(x1,y1,width,heigth)
            break
            case "circle":
                this.makeFigurePropertiesVisible(x1,y1,radius)
            break
            default:
                throw Error('Wrong figure')
                break
        }
   }
    parseForm(){
        let x1,x2,x3,y1,y2,y3,width,heigth,color,radius,type;
        x1=Number(document.getElementById('x1').value)
        x2=Number(document.getElementById('x2').value)
        x3=Number(document.getElementById('x3').value)
        y1=Number(document.getElementById('y1').value)
        y2=Number(document.getElementById('y2').value)
        y3=Number(document.getElementById('y3').value)
        width=Number(document.getElementById('width').value)
        heigth=Number(document.getElementById('heigth').value)
        color=document.getElementById('color').value
        radius=Number(document.getElementById('radius').value)
        type=document.getElementById('type').value
        switch (type){
            case "point":
                return new Point(x1,y1,color)
            break
            case "line":
                return new Sector(x1,y1,x2,y2,color)
            break
            case "triangle":
                return new Triangle(x1,y1,x2,y2,x3,y3,color)
            break
            case "rectangle":
                return new Rectangle(x1,y1,color,width,heigth)
            break
            case "circle":
                return new Circle(x1,y1,color,radius)
            break
            default:
                throw Error('Wrong figure')
                break
        }
    }
    addFigure(){
        this.arrayOfFigures.push(this.parseForm());
    }
    removeFigure(){
        let idToRemove=this.selectedFigure
        this.arrayOfFigures.splice(Number(idToRemove),1)
        
        this.selectedFigure=-1;
        
    }
    moveUpFigure(){
        let idToMoveUp=this.selectedFigure
        _figureIsBeingMovedUp.set(this,true)
        if(idToMoveUp>0){
            let intermediateVariable=this.arrayOfFigures[Number(idToMoveUp)-1]
            this.arrayOfFigures[Number(idToMoveUp)-1]=this.arrayOfFigures[Number(idToMoveUp)]
            this.arrayOfFigures[Number(idToMoveUp)]=intermediateVariable;
            this.selectedFigure=idToMoveUp-1
        }else if(idToMoveUp===0){
            let intermediateVariable=this.arrayOfFigures[Number(idToMoveUp)]
            this.arrayOfFigures.shift();
            this.arrayOfFigures.push(intermediateVariable);
            this.selectedFigure=this.arrayOfFigures.length-1;
        }

    }
    moveDownFigure(){
        
        let idToMoveDown=this.selectedFigure
        if(idToMoveDown>-1&&idToMoveDown<this.arrayOfFigures.length-1){
            let intermediateVariable=this.arrayOfFigures[Number(idToMoveDown)+1]
            this.arrayOfFigures[Number(idToMoveDown)+1]=this.arrayOfFigures[Number(idToMoveDown)]
            this.arrayOfFigures[Number(idToMoveDown)]=intermediateVariable;
            this.selectedFigure=idToMoveDown+1
        }else if (idToMoveDown===this.arrayOfFigures.length-1){
            let intermediateVariable=this.arrayOfFigures[Number(idToMoveDown)]
            this.arrayOfFigures.pop();
            this.arrayOfFigures.unshift(intermediateVariable);
            this.selectedFigure=0;
        }

    }
    
    selectFigure(domElementID){
        this.initializeAllFigures()
        if (this.selectedFigure>=0){
        let domElementOld=document.getElementById(this.selectedFigure);
        domElementOld.style.color ='#000000';
    }
        if (domElementID!=='information'){
            let domElement=document.getElementById(domElementID);
            domElement.style.color = '#ff0000'
            this.selectedFigure = Number(domElement.id)
        }

    }
    drawCanvas(){
       
        let canvas=document.getElementById(this.canvasID)
        let ctx=canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        for (let i in this.arrayOfFigures){
            this.arrayOfFigures[i].draw(ctx);
        }
        

 
    }
    initializeAllFigures(){
        let infoDiv=document.getElementById('information')
        infoDiv.innerHTML=''
        infoDiv.innerText='Figures drawn:'
        for (let i in this.arrayOfFigures){
            let logParagraph = document.createElement('p');
            logParagraph.setAttribute("id", i);
            let figurePropertyValues=this.arrayOfFigures[i].displayObjectProperties()
            for (let j in figurePropertyValues){
                logParagraph.innerText+=`${figurePropertyValues[j]} `
            }
            infoDiv.appendChild(logParagraph)
        } 
        if (this.selectedFigure>=0){
        let domElement=document.getElementById(this.selectedFigure);
        domElement.style.color = '#ff0000'
        }

    }
}

let geoAPI=new GeometryDraw([],'canvas');
let addButon = document.getElementById('add')
let removeButton=document.getElementById('remove')
let infoDiv=document.getElementById('information')
let upButton=document.getElementById('up')
let downButton=document.getElementById('down')
let selectFigure=document.getElementById("type")
geoAPI.visualizeForm()
let listenForFigureAdd=addButon.addEventListener('click',event => {
geoAPI.addFigure()
geoAPI.drawCanvas()
geoAPI.initializeAllFigures()
})

let listenTypeFigure=selectFigure.addEventListener('input',event=>{
    
    geoAPI.visualizeForm();
})
let listenForFigureRemove=removeButton.addEventListener('click',event=>{
    
    geoAPI.removeFigure();
    geoAPI.drawCanvas()
    geoAPI.initializeAllFigures()
})
let listenForChoice=infoDiv.addEventListener('click',event => {
    let domElementID=event.target.id;
    
    geoAPI.selectFigure(domElementID);
    })
let listenForMoveUp=upButton.addEventListener('click',event=>{
    geoAPI.moveUpFigure();
    geoAPI.drawCanvas();
    geoAPI.initializeAllFigures();
})

let listenForMoveDown=downButton.addEventListener('click',event=>{
    geoAPI.moveDownFigure();
    geoAPI.drawCanvas();
    geoAPI.initializeAllFigures();
})


let _name=new WeakMap;
let _area=new WeakMap;
let _location=new WeakMap;
let _isFurnitured=new WeakMap;
let _rooms=new WeakMap;
let _hasElevator=new WeakMap;
let _floors=new WeakMap;
let _width=new WeakMap;
let _heigth=new WeakMap;
let _estate=new WeakMap;
let _price=new WeakMap
let _arrayOfEstates = new WeakMap;
let _arrayOfSalesOffers=new WeakMap;
let _arrayOfRentOffers=new WeakMap;
function checkInputIsNumberInRng(input,start,end){
if (typeof input==='number'&&start<=input&&input<=end&&Number.isInteger(input)){
    return true
} else {throw new RangeError(`The input should be an integer number in range between ${start}-${end}`);}
}

function checkIfEstate(estate){
    if (estate instanceof Estate){
        return true;
    }else{
        throw new TypeError('You shold enter valid real estate')
    }
}
function checkInputIsString(input) {
    if (typeof input ==='string'&&input.length>0){
        return true;
    }else{throw new TypeError('The input must be non-empty string')}
}

function parseBoolianInput(input) {
    if (input ==='true'){
        return true;
    }else if(input==='false'){
        return false;
    }
    else{throw new TypeError('The input must be either "true" or "false"');}
}


class Estate{
    constructor(name,area,location,isFurnitured){
        if(checkInputIsString(name)){
            _name.set(this,name);
        }
        if (checkInputIsNumberInRng(area,0,10000)){
            _area.set(this,area);
        };
        if(checkInputIsString(location)){
            _location.set(this,location);
        }
        let parsedBoolian=parseBoolianInput(isFurnitured);
        _isFurnitured.set(this,parsedBoolian);
    }
    /**
     * @param {string} value
     */
    set name(value){
        if(checkInputIsString(value)){
            _name.set(this,value);
        }
    }
    get name(){
        return _name.get(this);
    }
    set area(value){
        if (checkInputIsNumberInRng(value,0,10000)){
            _area.set(this,value);
        }
    }
    get area(){
        return _area.get(this);
    }
    set location(value){
        if(checkInputIsString(value)){
            _location.set(this,value);
        }
    }
    get location(){
        return _location.get(this);
    }
    set isFurnitured(value){
        let parsedValue=parseBoolianInput(value);
        _isFurnitured.set(this,parsedValue);
    }
    get isFurnitured(){
        return _isFurnitured.get(this);
    }
}

class House extends Estate{
    constructor (name,area,location,isFurnitured, floors){
        super(name,area,location,isFurnitured)
        if (checkInputIsNumberInRng(floors,0,10)){
            _floors.set(this,floors);
    } 
}
set floors(value){
    if (checkInputIsNumberInRng(value,0,10)){
        _floors.set(this,value);
    }
}
get floors(){
    return _floors.get(this);
}
}

class Garage extends Estate{
    constructor (name,area,location,isFurnitured, width,heigth){
        super(name,area,location,isFurnitured)
        if (checkInputIsNumberInRng(width,0,500)){
            _width.set(this,width);
    } 

    if (checkInputIsNumberInRng(heigth,0,500)){
        _heigth.set(this,heigth);
} 
}
set width(value){
    if (checkInputIsNumberInRng(value,0,500)){
        _width.set(this,value);
    }
}
get width(){
    return _width.get(this);
}

set heigth(value){
    if (checkInputIsNumberInRng(value,0,500)){
        _heigth.set(this,value);
    }
}
get heigth(){
    return _heigth.get(this);
}
}
class BuildingEstate extends Estate{
    constructor (name,area,location,isFurnitured, rooms, hasElevator){
        super(name,area,location,isFurnitured)
        if (checkInputIsNumberInRng(rooms,0,100)){
            _rooms.set(this,rooms);
        }
        let parsedBoolian=parseBoolianInput(hasElevator);
        _hasElevator.set(this,parsedBoolian);
    }
    set hasElevator(value){
        let parsedValue=parseBoolianInput(value);
        _hasElevator.set(this,parsedValue);
    }
    get hasElevator(){
        return _hasElevator.get(this);
    }

    set rooms(value){
        if (checkInputIsNumberInRng(value,0,100)){
            _rooms.set(this,value);
        }
    }
    get rooms(){
        return _rooms.get(this);
    }
}

class Apartment extends BuildingEstate{
    constructor (name,area,location,isFurnitured, rooms, hasElevator){
        super(name,area,location,isFurnitured,rooms, hasElevator);
    }

}

class Office extends BuildingEstate{
    constructor (name,area,location,isFurnitured, rooms, hasElevator){
        super(name,area,location,isFurnitured,rooms, hasElevator);
    }

}
class Offer{
    constructor(estate,price){
        if(checkIfEstate(estate)){
            _estate.set(this,estate);
        }
        if (checkInputIsNumberInRng(price,1,9999999999999)){
            _price.set(this,price);
        }
    }
    set price(value){
        if (checkInputIsNumberInRng(value,1,9999999999999)){
            _price.set(this,value);
        }
    }
    get price(){
        return _price.get(this);
    }

    set estate(value){
        if(checkIfEstate(value)){
            _estate.set(this,value);
        }
    }
    get estate(){
        return _estate.get(this);
    }
}

class RentOffer extends Offer{
    constructor(estate,price){
        super(estate,price);
    }
    
}

class SaleOffer extends Offer{
    constructor(estate,price){
        super(estate,price);
    }
    
}

class Engine{
    constructor(){
        _arrayOfEstates.set(this,[]);
        _arrayOfRentOffers.set(this,[]);
        _arrayOfSalesOffers.set(this,[]);
       
    }

    ;
    get _arrayOfRentOffers(){
        return _arrayOfRentOffers.get(this);
    }
    get _arrayOfSalesOffers(){
        return _arrayOfSalesOffers.get(this);
    }
    createApartment(name,area,location,isFurnitured,numberOfRooms,hasElevator){
        let newApartment=new Apartment(name,area,location,isFurnitured,numberOfRooms,hasElevator)
        _arrayOfEstates.get(this).push(newApartment);
        console.log(_arrayOfEstates.get(this));
    }

    createOffice (name,area,location,isFurnitured,numberOfRooms,hasElevator){
    let newOffice=new Office(name,area,location,isFurnitured,numberOfRooms,hasElevator);
    _arrayOfEstates.get(this).push(newOffice);
    }
    createHouse (name, area, location, isFurnitured, numberOfFloors){
        let newHouse=new House(name,area,location,isFurnitured,numberOfFloors);
        _arrayOfEstates.get(this).push(newHouse);
    }
    createGarage (name,area,location,isFurnitured,width,height){
        let newGarage=new Garage(name,area,location,isFurnitured,width,height);
        _arrayOfEstates.get(this).push(newGarage);
    }
}

let apartment=new Apartment('Dream Apartment',58,'Lyulin','true',2,'true');
let house=new House('Dream House',120,'Kambanite','true',2);
let engine=new Engine();


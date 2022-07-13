let _name=new WeakMap();
let _area=new WeakMap();
let _location=new WeakMap();
let _isFurnitured=new WeakMap();
let _rooms=new WeakMap();
let _hasElevator=new WeakMap();
let _floors=new WeakMap();
let _width=new WeakMap();
let _heigth=new WeakMap();
let _estate=new WeakMap();
let _price=new WeakMap();
let _arrayOfEstates = new WeakMap();
let _arrayOfSalesOffers=new WeakMap();
let _arrayOfRentOffers=new WeakMap();
let _statusLog=new WeakMap();

function logText(input){
    if (input instanceof Estate){
        return `created ${input.constructor.name} with unique ID: ${input.name}`
    }else{
        return `created ${input.constructor.name} with unique ID: ${input.estate.name}`
    }
    
}
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
        _statusLog.set(this,[]);
    }

    get _arrayOfSalesOffers(){
        return _arrayOfSalesOffers.get(this);
    }
    createApartment(name,area,location,isFurnitured,numberOfRooms,hasElevator){
        let newApartment=new Apartment(name,area,location,isFurnitured,numberOfRooms,hasElevator)
        this.checkIfEstateIsInArrayByNameAndPush(newApartment,_arrayOfEstates);
    }

    createOffice (name,area,location,isFurnitured,numberOfRooms,hasElevator){
    let newOffice=new Office(name,area,location,isFurnitured,numberOfRooms,hasElevator);
    this.checkIfEstateIsInArrayByNameAndPush(newOffice,_arrayOfEstates);
    }
    createHouse (name, area, location, isFurnitured, numberOfFloors){
        let newHouse=new House(name,area,location,isFurnitured,numberOfFloors);
        this.checkIfEstateIsInArrayByNameAndPush(newHouse,_arrayOfEstates);
    }
    createGarage (name,area,location,isFurnitured,width,height){
        let newGarage=new Garage(name,area,location,isFurnitured,width,height);
        this.checkIfEstateIsInArrayByNameAndPush(newGarage,_arrayOfEstates);
    }
    changeNameOfObjectInArrayOfEstatesByIndex(index,newValue){
        if (checkInputIsString(newValue)&&_arrayOfEstates.get(this).length>index){
            _arrayOfEstates.get(this)[index].name=newValue;
        }
        
    }
    
    checkIfEstateIsInArrayByNameAndPush(estate,_array){
    
        if (!(this.findEstateByName(estate.name))){
        let string=logText(estate);
        _statusLog.get(this).push(string);
        _array.get(this).push(estate);
    }else{
        _statusLog.get(this).push(`Unccessfully tried to create ${estate.constructor.name} with name:${estate.name}. Estate with this name already exists`);
        throw new ReferenceError('You already have estate with that unique name. Please choose another name')
    }
    }
    findEstateByName(estateName){
        let arrayOfEstates=this.getArrayOfEstates();
        let foundEstate=[]
        for (const key in arrayOfEstates) {
            if (Object.hasOwnProperty.call(arrayOfEstates, key)) {
                const element = arrayOfEstates[key];
                if (element.name===estateName){
                    foundEstate.push(element);
                }
                
            }
        }
        
        return foundEstate[0];
    }
    createRentOffer (estateName, rentPrice){
        let estate=this.findEstateByName(estateName);
        if (estate){
            let offer=new SaleOffer(estate,rentPrice);
            let string=logText(offer);
            _statusLog.get(this).push(string);
            _arrayOfRentOffers.get(this).push(offer);
        } else{
            _statusLog.get(this).push(`Unccessfully tried to create rent offer with name:${estateName}. Estate with this name not present in estates DBase`)
            throw new RangeError('There is no property with such name in database');
        }
    }
    createSalesOffer (estateName, salePrice){
        let estate=this.findEstateByName(estateName);
        if (estate){
            let offer=new SaleOffer(estate,salePrice);
            let string=logText(offer);
            _statusLog.get(this).push(string);
            _arrayOfSalesOffers.get(this).push(offer);
        } else{
            _statusLog.get(this).push(`Unccessfully tried to create sale offer with name:${estateName}. Estate with this name not present in estates DBase`)
            throw new RangeError('There is no property with such name in database');
        }
    }
    getArrayOfEstates(){
        return _arrayOfEstates.get(this);
        
    }
    getArrayOfRentOffers(){
        return _arrayOfRentOffers.get(this)
    }
    getArrayOfSalesOffers(){
        return _arrayOfSalesOffers.get(this)
    }
    status(){
        return _statusLog.get(this);
    }
    getSalesOffersByLocation(location){
        let arrayOfSales=[];
        _arrayOfSalesOffers.get(this).forEach(sale => {if (sale.estate.location===location){arrayOfSales.push(sale)}
        arrayOfSales.sort(function(a,b){
            if(a.estate.name>b.estate.name){return 1}
            if(a.estate.name<b.estate.name){return -1}
            return 0;
        })
        });
        return arrayOfSales
    }
    getRentOffersByLocation(location){
        let arrayOfRent=[];
        _arrayOfRentOffers.get(this).forEach(sale => {if (sale.estate.location===location){arrayOfRent.push(sale)}
        });
        arrayOfRent.sort(function(a,b){
            if(a.estate.name>b.estate.name){return 1}
            if(a.estate.name<b.estate.name){return -1}
            return 0;
        })
        return arrayOfRent
    }
    findRentsByPrice(minPrice,maxPrice){
        let arrayOfRent=[];
        _arrayOfRentOffers.get(this).forEach(sale => {if (sale.price>=minPrice&&sale.price<=maxPrice){
            arrayOfRent.push(sale)
        }
        });
        arrayOfRent.sort(function(a,b){
            
            if(a.price===b.price){
                if(a.estate.name>b.estate.name){return 1}
                if(a.estate.name<b.estate.name){return -1}
                return 0;
            }else{
                return a.price-b.price;
            }
        });
        return arrayOfRent;
    } 
}

let apartment=new Apartment('Dream Apartment',58,'Lyulin','true',2,'true');
let house=new House('Dream House',120,'Kambanite','true',2);
let engine=new Engine();
engine.createOffice('office1',26,'Lyulin','true',3,'true');
engine.createHouse('house1',123,'mladost','true',3);
engine.createGarage('garage1',23,'mladost','true',80,70);
engine.createApartment('ap1',56,'Lyulin','true',2,'true')
engine.createOffice('office2',26,'Lyulin','true',3,'true');
engine.createOffice('z',26,'Lyulin','true',3,'true');
engine.createRentOffer('garage1',100);

engine.createSalesOffer('office1',100000);
engine.createSalesOffer('office2',100000);
engine.createSalesOffer('ap1',100000);
engine.createSalesOffer('house1',100000);

engine.createRentOffer('z',100);
engine.createRentOffer('office1',300);
engine.createRentOffer('office2',800);
engine.createRentOffer('ap1',100000);
engine.createRentOffer('house1',100000);


let arr1=engine.getArrayOfRentOffers();
let arr2=engine.getArrayOfSalesOffers();
engine.getRentOffersByLocation('Lyulin').forEach(sale=>{console.log(sale.estate.name)});
engine.findRentsByPrice(100,800).forEach(sale=>{console.log(sale.estate.name)});


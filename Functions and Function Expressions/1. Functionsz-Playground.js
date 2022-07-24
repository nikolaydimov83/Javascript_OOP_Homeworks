function wrapperFunction(){
    function playWithFunctions(ar1,ar2,ar3){
        this.ar1=555;
        console.log(`Number of arguments accepted by the Function: `+playWithFunctions.length);
        console.log('Array with arguments actually loaded: '+playWithFunctions.arguments)
        ar1Type=typeof ar1;
        ar2Type=typeof ar2;
        ar3Type=typeof ar3;
        console.log(`Type argument1 `+ar1Type);
        console.log(`Type argument2 `+ar2Type);
        console.log(`Type argument3 `+ar3Type);
        console.log(this.ar1)
        
    }
    playWithFunctions.call();
}

let b=new wrapperFunction()
b.ar1=777;
console.log(`Before`+b.ar1);
wrapperFunction.call(b,[]);
console.log(`After`+b.ar1);

function privateArguments(a,b,c){
    let privateArgument1;
    let privateArgument2;
    this.c=c;
    let getPrivateArgument1=function getPrivateArgument1 (){
        privateArgument1=a+b;
        return privateArgument1;
    }
    function getPrivateArgument2(){
        console.log(this.c)
        console.log(a)
        privateArgument2=a+this.c
        return privateArgument2;
    }
    return {
        getPrivateArgument1:getPrivateArgument1,
        getPrivateArgument2:getPrivateArgument2
    }
}
let trial=new privateArguments(5,6,7);
console.log(trial.getPrivateArgument1);
console.log(trial.getPrivateArgument2);
trial.c=55;

console.log(trial.getPrivateArgument2());
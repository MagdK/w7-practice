
function inIt(mathFunction) { //paraméterek mindig function scopeok
    var a = 5;
    var b = 6;

    
    if (a < b){
        let c = mathFunction(b, a)
        console.log(c);
       /*  (function() {
            var c = b - a;
            console.log(c);
        })();   */
    }else{
        let c = mathFunction(a, b)
        console.log(c);
    /*     (function (){
            var c = a - b;
        })(); */
    };

    //console.log(c);
    //console.log(c);
    //a c látszódik az if után
}

const inItC = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
}

const inItD = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
}

inIt(inItD);

//készítsétek el a szokásos load eseményt új brachbe events néven és csináljatok egy formot, és a formban legyen 3 input mező, be is lehet css elni szöveges input mezők legyenek, egy gomb legyen benne és az input mezőkre mindegyikre input eseményt tegyetek rá, mindegyik inputon legyen input esemény, clgolja ki az értékét az input mezőnek, js ből adjuk hozzá a root id divhez a formot , clg az input eseményre az input mezők értékét
//15.50


// EGYSZERU FUGGVENY
/* function inIt() {
    var a = 50;     // parameterek function scope-ban
    var b = 6;

    console.log(c);

    if(a < b) {
        function inItC() {
            var c = b - a;
        };
        inItC();

    } else {
        function inItC() {
            var c = a - b;
        }
        inItC();
    };

    console.log(c);
};

inIt(); */




// Hogyan hivjuk meg a fuggvenyeket, ha nem adunk nekik nevet? Erre a regi idokben volt egy ugynevezett IFE? nevu dolgot. Immediatly-invoked function expressions

/* function inIt() {
    var a = 50;
    var b = 6;

    // console.log(c);

    if(a < b) {
        (function() {
            var c = b - a;
            console.log(c);
        })();

    } else {
        (function() {
            var c = a - b;
            console.log(c);
        })();
    };

    console.log(c);     // hibat dob, reference error
};

inIt(); */


/* 
Miert fontos ezt tudnunk? Ha feladatkent kapjuk melohelyen, hogy regi kodot frissitsuk fel, akkor ez alapjan meg tudjuk tenni.

(function(){

})(); 

Azert erdekes meg ez nekunk, mert ez egy onlefuttato callback function. IIFE - bele van rakva egy zarojelbe es a masodik zarojle biztositja azt, hogy ez a fuggveny le is fusson. Ez az egyik ilyen callback logikanak a csucsa, kitaljesedese. 

*/




// CALLBACK PELDA
function inIt(mathFunction) {
    var a = 5;
    var b = 6;

    // console.log(c);

    if(a < b) {
        let c = mathFunction(b, a);
        /* (function() {
            var c = b - a;
        })();
        */
        console.log(c);

    } else {
        let c = mathFunction(a, b);
        /* (function() {
            var c = a - b;
        })(); */
        console.log(c);
    };

};

const inItC = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
};

const inItD = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
}

inIt(inItD);


/* 

Elonye ennek a megoldasnak: nem akarok foglalkozni azzal, hogy hivjak es hol is van az a fuggveny, amit en fel szeretnek hasznalni. Boven eleg az, hogy a meghivas helyen letezik. Ha visszagondolunk az esemenyekre, ott is ez van. Minden mast ki tudunk szervezni kivulre. 

Q? Math function scope-ja - function scope - parameterek mindig function scope-pal rendelkeznek. 

Ha mas muveletet szeretnenkvegezni a es b-vel,  nem kell azzal foglalkozni hol van, hol letezik, hol nem, szimplant atirom az inItC-t inItD-re

*/


// Feladat szunetre: készítsétek el a szokásos load eseményt új brachbe events néven és csináljatok egy formot, és a formban legyen 3 input mező, be is lehet css elni szöveges input mezők legyenek, egy gomb legyen benne és az input mezőkre mindegyikre input eseményt tegyetek rá, mindegyik inputon legyen input esemény, clgolja ki az értékét az input mezőnek, js ből adjuk hozzá a root id divhez a formot , clg az input eseményre az input mezők értékét


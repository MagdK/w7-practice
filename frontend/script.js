/* 
Ha minden input mezonek van nem tulajdonsagot, akkor a consolban az url utan latni fogjuk, hanyadik inputba mit irtam: 
?input1=hello&input2=szia&input3=szevasz
Ha az emailunket elmentene, nem lenne adatvedelmi szempontbol okes. 

Send-re kattintva mi tortenik? Uj oldalt probal betolteni (network ful, Preserve log-ra kattintva, headers reszen nezzuk meg mit ir ki)

 */
const formHTML = () => {
    return `
    <form>
        <input name="input1" id="input1" type="text" />
        <input name="input2" id="input2" type="text" />
        <input name="input3" id="input3" type="text" />
        <select name="animals" id="animals">
            <option value="both5555">Both</option>
            <option value="cats5555">Cats</option>
            <option value="dogs5555">Dogs</option>
        </select>
        <button>Send</button>
    </form>
    `;
};

function loadEvent() {
    console.log("load");
    const rootElement = document.getElementById("root");

    rootElement.insertAdjacentHTML("beforeend", formHTML());

    //formot belementjuk egy valtozoba
    const form = rootElement.querySelector("form");

    //input esemény ezzel kapjuk el
    const inputList = document.querySelectorAll("input");

    // FOROF ciklussal menjunk vegig az inputokon. Esemenyfigyelo ket dolgot szeretne kapni - esemeny nevet, es egy callback fundtiont is szeretnenk atadni neki. Erdekessegg ,hogy pont input a neve az esemenynek. Irjunk ide egy anonim fuggvenyt. Valamint kell nekunk a function-unk event parametere.
    /*     
    for (const input of inputList) {
        input.addEventListener("input", function(event) {                   
            console.log(event.target.value);        
            // event.target.value => vissza fogja adni az erteket a targetunknek
        });
    }
    */


    // MAP - forof helyett
    /* 
    Map utani resz ugy nez ki, mint egy IIFE - Immediately-invoked Function Expression
    Array.from => kollekciobol csinal egy array-t 
    
    Fontos kulonbseg map es forof ciklus kozott: forof vegigiteral mindnen, ami iteralhato. Map ennel problemasabb, tombre van szuksege!!!
    
    MAP nagy elony, ohgy egy tombot ad vissza. Ebbe a tombbe barmit bele tudunk pakolni. Nem kell meg kulon egy tombot kesziteni, mert a map elkesziti nekunk.
    
    */

    console.log(typeof inputList); // (inputList) => NodeList, (typeof inputList) => object
    console.log(Array.isArray(inputList)); // => false

    Array.from(inputList).map(function(input){
        // ugyanaz, mint a forof belseje
        input.addEventListener("input", function(event) {
            console.log(event.target.value);
        });
    });

    // Submit eventet nem tehetunk gombra, hanem magara a form-ra kell mindig ratenni. Adunk egy submit parametert es egy masodik parametert, ami egy callback function
    // rootElement.querySelector("form").addEventListener("submit", function(event) { // => rovidithetjuk, mert a form mar valtozo
    // Select event
    form.querySelector("select").addEventListener("input", function(event){
        console.log(event.target.value);
    });
    form.addEventListener("submit", function(event) {
        //meg kell hivni egy metodust, ami megakadalyozza a submit esemeny alapertelmezett lefutasi eloirasat - prevent default
        event.preventDefault();
        console.log(event.target); // => ott lesz a form tag, a mi targetunk a console-ban
    });

    
    


    // //sumbit event
    // form.addEventListener("submit", function(e){               //form a sor elején: már elmentettük egy változóba
    //     e.preventDefault()
    //     console.log(e.target);
    // }) 
    
    

}
window.addEventListener("load", loadEvent);




//formok esetében nem click event hanem submit event
//sumbit eseményt NEM a gombra tesszük hanem a formra

/* 
queryselectorAll es map - olvassak utana
https://www.w3schools.com/jsref/event_onclick.asp
html attributumkent ne rakjunk ra onclick eventet elementekre TILOS!
object.addEventListener("click", myScript);
 */
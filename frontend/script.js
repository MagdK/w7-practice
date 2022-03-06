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

async function loadEvent() {
    // console.log("load");
    const rootElement = document.getElementById("root");

    rootElement.insertAdjacentHTML("beforeend", formHTML());

    //belementjük a formot egy változóba
    const form = rootElement.querySelector("form");

    //input event
    const inputList = document.querySelectorAll("input");

    /* 
    for (const input of inputList) {
        input.addEventListener("input", function(e) {                   // ugyanaz mint a map pár sorral lejjebb
            console.log(e.target.value);
        })
    }
    }
    */

    Array.from(inputList).map(function(input){
        input.addEventListener("input", function(e) {
            // console.log(e.target.value);
        });
    });

    
    //select event 
    form.querySelector("select").addEventListener("input", function(e){
        // console.log(e.target.value);
    });


    //sumbit event
    form.addEventListener("submit", function(e){               //form elol: mar elmentettuk valtozoba
        e.preventDefault()
        // console.log(e.target);
    });

    const nasaApiKey = "1mTCOFLk0Nof1ZPgSEShro6KaAHddyvNnq8rIoLT";

    const requestedDate = "2000-01-01";
    
    const apod = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}&date=${requestedDate}`);

    //console.log(apod);

    const apodJson = await apod.json(); //jason metodus, amit meghivunk rajta, ezzel atkonvertaljuk

    // console.log(apodJson.explanation); //(apodJson.explanation) => szep hosszu szuveg megjelenik a console-ban


    // Metodusok egyebkent onmaguktol is el tudnak inditani ujabb metodusokat. Ezt a lancolatot nem elemezzuk, de ranezunk hogyan lehet ezt a fetch-et hasznalni.
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}&date=${requestedDate}`).then(
        function (apodResponse) {
            console.log(apodResponse);
            apodResponse.json().then(
                function(apodResponseJson) {
                    console.log(apodResponseJson.explanation);
                }
            )
        }
    )

};
window.addEventListener("load", loadEvent);

//returnöl a fetch - obj értékpárokat
//metódusok is lehetnek elmentve egy egy kulcsra és ez a then


//formok esetében nem click event hanem submit event
//sumbit eseményt NEM a gombra tesszük hanem a formra


/* 
PROMISE

!!!nem a mostani vizsgak reszei!!!
Az egesz fetch alatt van egy masik reteg, ezt ugy hivjuk h,goy promise-ok. 
Promisok azt segitik, hogy kulonbozo async muveletek, barmi amire varni kell, hogy a js tudja meddig kell varni pl egy fetcheles eredmenyere. 

Harom allapota van egy promise-nak
1. PENDING Teljesult, nem teljesult? - igereteinknek a valos eletben is ilyen statuszai vannak. Ez csak igeret

Lezarodik az igeret, ezutan:

2. Teljesult
3. Nem teljesult

Amikor teljesul, azt onnan latjuk, hogy nem dob hibat a promise. Ha nem teljesul, hibat dob. 
 */
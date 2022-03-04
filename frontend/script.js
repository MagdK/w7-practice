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
    const rootElement = document.getElementById("root")

    rootElement.insertAdjacentHTML("beforeend", formHTML())

    //belementjük a formot egy változóba
    const form = rootElement.querySelector("form")

    //input esemény
    const inputList = document.querySelectorAll("input")

    /* 
    for (const input of inputList) {
        input.addEventListener("input", function(e) {                   ugyanaz mint a map pár sorral lejjebb
            console.log(e.target.value);
        })
    }
    }
    */

    Array.from(inputList).map(function(input){
        input.addEventListener("input", function(e) {
            console.log(e.target.value);
        })
    })

    
    //select esemény 
    form.querySelector("select").addEventListener("input", function(e){
        console.log(e.target.value);
    })


    //sumbit esemény
    form.addEventListener("submit", function(e){               //form a sor elején: már elmentettük egy változóba
        e.preventDefault()
        console.log(e.target);
    })
    

}
window.addEventListener("load", loadEvent);




//formok esetében nem click event hanem submit event
//sumbit eseményt NEM a gombra tesszük hanem a formra



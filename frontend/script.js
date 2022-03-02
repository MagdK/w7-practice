// Ezek nagyjabol azok a lepcsok, amik minden feladat vaza - nagy projekteknel
// Prepare data - 2-es lepes-re epul a legtobb codewars projekt - business logic

// 1 Get data
// 2 Prepare data
// 3 Components = HTML elements we would like to add to the document later
// 4 Render = add the components to the document



// 1 Get data
// ez itt az object constructorunk
function Month(name, id, nth, days) {
    this.name = name;
    this.id = id;
    this.nth = nth;
    this.days = days;
}

const months = [
    new Month('January', 'jan', '1', '31'),
    new Month('February', 'feb', '2', '28'),
    new Month('March', 'mar', '3', '31'),
    new Month('April', 'apr', '4', '30'),
    new Month('May', 'may', '5', '31'),
    new Month('June', 'jun', '6', '30'),
    new Month('July', 'jul', '7', '31'),
    new Month('August', 'aug', '8', '31'),
    new Month('September', 'sep', '9', '30'),
    new Month('October', 'oct', '10', '31'),
    new Month('November', 'nov', '11', '30'),
    new Month('December', 'dec', '12', '31'),
]
// console.log(months[0].name);
// console.log(months);



// 2 Prepare data
// Komponensek azok a dolgok, amik ismetlodnek tobbszor az oldalon es a legkisebb egyseg
// scope a parameterekenel most function scope alabb(id, h1,days)

const monthSection = (id, h1, days) => {
    return `
    <section id="${id}">
        <h1>${h1}</h1>
        <div class="days">${days}</div>
    </section>
    `;
}



// 3 Components = HTML elements we would like to add to the document later

const dayCard = (year, month, day) => {
    return `
    <div class="card">
        <time>${year}</time>
        <time>${month}</time>
        <time>${day}</time>
        <button class="card-btn">Get day name</button>
    </div>
    `
}

const dayCards = (month, callDayCard) => {
    let toReturn = "";
    for (let i = 1; i <= month.days; i++) {
        // uj fogalom - callback fuggveny - nem ott futtatjuk, ahol szeretnenk hasznalni, hane majd kesobb, amikor itt az ideje lefuttatni
        toReturn += callDayCard(2022, month.nth, i);
    }
    return toReturn;
}
// console.log(dayCards(months[0], dayCard));




// 4 Render = add the components to the document

const loadEvent = _ => {
    // loadevent parametere mar foglalt - akarmit is irunk be, minden esemeny eseteben - ez a parameter csak ezt az egy objectet adja vissza. Benne van a target, path stb. 
    // az alavonas a () zarojelek helyere - error kezelest igy szoktak megoldani - ebben az esetben az alavonas azt jelenti, hogy mi nem fogjuk hasznalni a parametereket
    
    let content = ""

    for (const month of months) {
        content += monthSection(month.id, month.name, dayCards(month, dayCard));
    }  
    document.getElementById("root").insertAdjacentHTML("beforeend", content);
    
   /*  function cardButtonClickEvent(event) {
        console.log(event.target.parentElement);
        event.target.parentElement.cardList.toggle("clicked")
    }

    // Click event - event handling
    const cardList = document.querySelectorAll(".card");

    for (const card of cardList) {
        // console.log(card);
        card.querySelector("button").addEventListener("click", cardButtonClickEvent)
    } */
    function clickEvent(event){
        // console.log(event.target);
        // console.dir(this.target); // => documentre mutat ra
        if(event.target.classList.contains("card-btn")) {
            console.log("Hello click");
            event.target.innerHTML = "This button was clicked"
        }
    }

    document.addEventListener("click", clickEvent);
}
window.addEventListener("load", loadEvent); // calback fuggveny, nem teszunk zarojelet a vegere, argumentumkent adjuk meg

// feladat szunetre - a script js nek a load eventjebe a rootba a sectionoket rendereljuk bele. a load eventnek nem kell parameter . section-okbe rakjuk bele a daycards componens es mindez keruljon bele a html kodba. 
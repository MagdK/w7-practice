function Country(name, short, population, flag, continent){
    this.name = name;
    this.short = short;
    this.population = population;
    this.flag = flag;
    this.continent = continent;
};

// COMPONENTS

//menu button
const menuButton = _ => {
    return`
        <button id="menuButton">
            <svg width="40" height="40">
                <rect width="20" height="5"/>
                <rect width="20" height="5"/>
                <rect width="20" height="5"/>
            </svg>
            <span>Click</span>
        </button>
    `;
};


const header = (logo, button) => {
    return `
        <header>
            <a id="logo">${logo}</a>
            ${button()}
        </header>    
    `
}

const countryCard = (country) => {
    return `
        <div id="cards">
            <span>${country.name}</span>
            <span>${country.short}</span>
            <span>${country.population}</span>
            <img src="${country.flag}"></img>
            <span>${country.continent}</span>
        </div>
    `;
};

const countryCards = (contentHTML) => {
    return `
    <section class="country-cards">${contentHTML}</sectio>
    `
}




const loadEvent = async _ => {
    // GET DATA
    // 1. GET DATA
    // ez a ket sor belement a valtozoba fetchrol jovo adatot, masodik sorban feldolgozzuk
    // await - az egy aszinkron muvelet, megvarjuk a letoltodest
    // fuggveny neve utan ki kell irni, hogy async, innen tudja, hogy meg kell varni bizonyos letolteseket
    // countryArr bevarja h a countryRes leformazodjon
    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    const countryArr = await countryRes.json();
    // console.log(countryArr[0]);
    // PROCESS DATA
    let countries = countryArr.map(function(country){
        return new Country(country.name.common, country.cca3, country.population, country.flags.svg, country.continents[0])
    });
    // console.log(countries);
    //fuggvenyeket elemeket const-tal mentjuk le
    const rootElement = document.getElementById("root");
    
    rootElement.insertAdjacentHTML("beforeend", header("Countries", menuButton));
    
    let countryHTML = "";
    for (const country of countries) {
        countryHTML += countryCard(country)
    }
    rootElement.insertAdjacentHTML("beforeend", countryCards(countryHTML));

    const getMenuButton = document.getElementById("menuButton")
    getMenuButton.addEventListener("click", (event) => {
        event.target.classList.toggle("clicked")
    });

};

window.addEventListener("load", loadEvent);

// Esemeny gyuruzodes svg - click event

// Esemeny gyuruzodes svg - click event


// Feladat szunetre - jelenitsuk meg kartyakent ezt a kodot. Country-t. Egy komponensbe mentsuk el a countryCard componensbe, ezt hivjuk meg es iteraljon vegig. 
// legyen 3-as lepcso mint tegnap - counrtyCard komponenst - countryCards

// div - cards az id
//countrycard-ba mentett html-t tobbszor rakja be egymas ala


// ne a load eventen belul legyenek a komponensek ,csak a hozzaadasuk
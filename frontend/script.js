function Country(name, short, population, flag, continent) {
    this.name = name
    this.short = short
    this.population = population
    this.flag = flag
    this.continent = continent
};

//Components
const menuButton = () => {
    return `
    <button id="menu-btn">
        <svg width="40" height="40">
            <rect width="20" height="2"/>
            <rect width="20" height="2"/>
            <rect width="20" height="2"/>
        </svg>
        <span>button</span>
    </button>
    `;
};

const header = (logo, button) => {
    return `
    <header>
        <a id="logo">${logo}</a>
        ${button()}
    </header>
    `;
};

//Exercise
const countryCards = (cards) => {
    return `
    <div id="cards">
        ${cards}
    </div>
    `
};

const countryCard = (name, short, population, flag, continent) => {
    return `
    <div>
        <h2>${name}</h2>
        <h2>${short}</h2>
        <p>${population}</p>
        <img src="${flag}"></img>
        <p>${continent}</p>
    </div>
    `;
};



const loadEvent = async () => {
    //Get data
    // ez a ket sor belement a valtozoba fetchrol jovo adatot, masodik sorban feldolgozzuk
    // await - az egy aszinkron muvelet, megvarjuk a letoltodest
    // fuggveny neve utan ki kell irni, hogy async, innen tudja, hogy meg kell varni bizonyos letolteseket
    // countryArr bevarja h a countryRes leformazodjon

    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    const countryArr = await countryRes.json();
    // console.log(countryArr[0])
    //Process data
    let countries = countryArr.map(function (country) {
        return new Country(country.name.common, country.cca3, country.population, country.flags.svg, country.continents[0])
    })
    console.log(countries);
    //fuggvenyeket elemeket const-tal mentjuk le
    const rootElement = document.getElementById("root")
    rootElement.insertAdjacentHTML('beforeend', header("Countries", menuButton));

    //Exercise
    let content = ""
    for (let item of countries) {
        content += countryCard(item.name, item.short, item.population, item.flag, item.continent)
    }

    rootElement.insertAdjacentHTML('beforeend', countryCards(content));

    const menuButton1 = document.getElementById("menu-btn");
    menuButton1.addEventListener('click', (event) => {
        event.target.classList.toggle("clicked")
    });
}

window.addEventListener('load', loadEvent);




// Feladat szunetre - jelenitsuk meg kartyakent ezt a kodot. Country-t. Egy komponensbe mentsuk el a countryCard componensbe, ezt hivjuk meg es iteraljon vegig. 
// legyen 3-as lepcso mint tegnap - counrtyCard komponenst - countryCards

// div - cards az id
//countrycard-ba mentett html-t tobbszor rakja be egymas ala


// ne a load eventen belul legyenek a komponensek ,csak a hozzaadasuk
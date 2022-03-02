function Country(name, short, capital, population, flag, continent) {
    this.name = name;
    this.short = short;
    this.capital = capital;
    this.population = population;
    this.flag = flag;
    this.continent = continent;
}

// Components
const header = (logo) => {
    return `
    <header>
        <a id="logo">${logo}</a>
        <button></button>
    </header>
    `
}



const loadEvent = async _ => {
    // 1. GET DATA
    // ez a ket sor belement a valtozoba fetchrol jovo adatot, masodik sorban feldolgozzuk
    // await - az egy aszinkron muvelet, megvarjuk a letoltodest
    // fuggveny neve utan ki kell irni, hogy async, innen tudja, hogy meg kell varni bizonyos letolteseket
    // countryArr bevarja h a countryRes leformazodjon
    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    const countryArr = await countryRes.json();
    // console.log(countryArr[0]);


    // 2. PROCESS DATA
    let countries = countryArr.map(function (country) {
        return new Country(country.name.common, country.cca3, country.population, country.continents[0], country.flags.svg);

    })
    console.log(countries);
    //fuggvenyeket elemeket const-tal mentjuk le
    const rootElement = document.getElementById("root");
    rootElement.insertAdjacentHTML("beforeend", header("Countries"));


    // CODE FROM WEEK 1 - this works

    for (const country of countryArr) {
        //console.log(country.name.common);
        
        root.insertAdjacentHTML("beforeend", `
            <section>
                <h1>${country.name.common}</h1>
                <p>${country.cca3}</p>
                <p>${country.cca3}</p>
                <p>${country.population}</p>
                <p>${country.continents[0]}</p>
                <p>${country.flags.svg}</p>
            </section>
        `)
        
    }

    let content = ""

   /*  for (const country of countries) {
        content += countrySection(country.name.common,country.cca3, countryCards(country, countryCard));
    }   */
    document.getElementById("root").insertAdjacentHTML("beforeend", content);

}

window.addEventListener("load", loadEvent); 





// Feladat szunetre - jelenitsuk meg kartyakent ezt a kodot. Country-t. Egy komponensbe mentsuk el a countryCard componensbe, ezt hivjuk meg es iteraljon vegig. 
// legyen 3-as lepcso mint tegnap - counrtyCard komponenst - countryCards

// div - cards az id
//countrycard-ba mentett html-t tobbszor rakja be egymas ala


// ne a load eventen belul legyenek a komponensek ,csak a hozzaadasuk
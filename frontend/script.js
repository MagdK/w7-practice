// Programozasban objektum merete nem olyan nagy, de ettol fuggetlenul nagy merete van pl egy tervrajzhoz kepest (hasonlat) - blueprinteket hozunk leszre, tartalommal nem feltoltott valamik. Amikor ezt objektumma formazzuk, ezt a valamit, onnantol kezdve ugy lesz objektum, hogy valami adatot teszunk bele. 
// Object construction - ez a folyamat, amit odafenn leirtunk a Date szocskaal - constructor
// A lenyeg az egeszben, hogy mi is letre tudunk hozni objektumokat ugyanarra a semara. 
// Date az egy building constructor, de mi is tudunk sajatot letrehozni

/* const currentDate = new Date("1999/01/02")

console.log(currentDate); // console.log(typeof currentDate); => object lesz a typeof-ja */





function Book(title, author, year, genre) {
    // ez a tervrajz
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.age = function() {
        // ezzel a metodussal alabb a konyv korat megirtuk
        const d = new Date()
        const currentYear = d.getFullYear()
        return currentYear - this.year
    }
}

const myFavouritBook = new Book('War and peace', 'Tolsztoj', 1867, 'Historical novel');
console.log(myFavouritBook.title); // => War and peace
// this szocska minidig objektumra mutat vissza, ha nem, akkor a globalis window objektumra mutat vissza. Ha objektumma valik, ezert mi tudjuk hasznalni a this szot, ezzel utalunk vissza arra hogy az objektum milyen kulcsokat kapjon meg

const mySecondFavouritBook = new Book('Algebra alapjai', 'Joe Algebra', 1992, 'sci-fi');
console.log(mySecondFavouritBook.age()); // => Algebra alapjai

// Nagyon sok minden construct-orral mukodik. Classok egy masik fele szintaktika. Friss dolgok  a js-en belul, ugyanez a funkcio csak mas a szintaktika. 
// Objektumokon belul vannak metodusok, itt is az object constructor-on belul is tudunk metodust letrehozni




// !!! Menjunk vissza a start coding feladathoz, bankos feladatnal object constructorral hozzuk letre a 3 bank accountot.. Jo feladat lehet gyakorolni ezt a constructort. 
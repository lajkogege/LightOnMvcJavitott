export default class Lampa {
    #allapot;
    #index;

    constructor(index, allapot, szuloELem) {
        //konstruktor beállitja az adattagokat
        this.#index = index;
        this.#allapot = allapot; // true/false

        //hozzuk létre az objektumhoz tartozó HTML elemet a megfelelő helyre
        szuloELem.append(`<div class="lampa"></div>`);
        
        //minden egyes HTML elemhez érdemes készíteni egy nevet, változót
        this.lampaElem = szuloELem.children("div:last-child");

        //állapot beállítása
        this.setSzin();

        //eseménykezelők
        this.lampaElem.on("click", () => {
            //az állapotot fordítva állítjuk, ha rákattintunk
            this.setAllapot(!this.#allapot);
            this.#kattintasTigger("kapcsolas"); // az esemény nevének megadása
        });
    }

    setAllapot(allapot) {
        //az állapotot a controleren keresztül a modelből fogja kapni 
        this.#allapot = allapot;
        this.setSzin();
    }

    setSzin() {
        //az elem állapotától függően hozzáadja a .felkapcs clast ehhez a div elemhez
        if (this.#allapot) {
            this.lampaElem.addClass("felkapcs");
        } else {
            this.lampaElem.removeClass("felkapcs");
        }
    }

    //az a cél, hogy a lámpa objektum meg tudja mondani a játéktérnek, hogy ő kicsoda, hányadik elem
    //létrehozunk egy saját eseményt
    #kattintasTigger(lampaKapcsolas) {
        const e = new CustomEvent("lampaKapcsolas", { detail: this.#index });
        window.dispatchEvent(e);
    }

    // Megjelenítés funkció (nem szükséges, mivel már a konstruktorban kezeljük a DOM elemet)
    #megjelenit() {
        let txt = `<div class="lampa">
            </div>`;
        this.szuloElem.append(txt);
    }
}

/*export default class Lampa {
    #allapot;
    #index;

    constructor(index, allapot, szuloELem) {
        //html tageket az osztályon belül határozzuk meg
        //konstruktor beállitja az adattagokat
        this.#index= index;
        this.#allapot = allapot;//ture/false
        

        //hozzuk létre az objektumhoz tartozó HTML elemet a megfelelő helyre
        szuloELem.append(`<div class="lampa"> </div>`);
        //minden egyes HTML elemhez érdemes késziteni egy nevet, változót
        this.lampaElem= szuloELem.children("div:last-child");

        this.setSzin();

        //eseménykezelők
        this.lampaElem.on("click", () =>{

            this.setAllapot(allapot);
            this.#kattintasTigger();
        })
       

    }

    setAllapot(allapot){
        //az állapotot a controleren kereszutül a modelből fogja kapni 
        this.#allapot= allapot
        this.setSzin();
    }

    setSzin() {
        //az elem állapotátol függően hozzáadja a .felkapcs clast ehhez a div elemhez
        if (this.#allapot) {
            this.lampaElem.addClass("felkapcs");
        }
        else{
            this.lampaElem.removeClass("felkapcs");
        }
    }


  /*  #esemenyKezeleo(){
        this.#divElem.on("click", () => {
            this.#kattintasTigger("kapcsolas");
        })
    }
sss 
//az a cél, hogy a lámpa objektum meg tudja mondani a játlktérnek, hogy ő kicsoda, hányadik elem
//letrehozunk egy saját eseményt
    #kattintasTigger(esemenynev) {
        const e = new CustomEvent(esemenynev, { detail: this.#index })
        window.dispatchEvent(e)
    }

    #megjelenit() {
        let txt = `<div class="lampa">
            </div>        
        `
        this.szuloElem.append(txt);
    }

 

}*/
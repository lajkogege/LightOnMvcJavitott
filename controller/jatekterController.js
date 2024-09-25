import JatekterModell from "../model/jatekterModel.js";
import Jatekter from "../view/Jatekter.js";

class JatekterController {
    constructor() {
        const meret = 3;
        // Példányosítjuk a View-t (nézetet)
        const jatekTer = new Jatekter(meret);

        // Példányosítjuk a modellt
        const jatekterModel = new JatekterModell(meret);

        // Eseménykezelő létrehozása a "lampaKapcsolas" eseményre
        $(window).on("lampaKapcsolas", (event) => {
            let id = event.detail; // Az adott lámpa ID-ja

            // Modellben végrehajtjuk az állapotváltoztatást
            jatekterModel.szomszedokValtoztatasa(id);

            // Lekérjük a modeltől az aktuális állapotot (egy tömböt)
            const tomb = jatekterModel.getJatekteTomb();

            // Átadjuk a tömböt a View-nak, hogy frissítse a lámpák állapotát
            jatekTer.setLampakAllapota(tomb);
        });
    }
}

export default JatekterController;

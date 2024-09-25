class JatekterModell {
    #jatekTerTomb = []
    constructor(meret) {
        this.meret = meret
        //méretet a JatekCotroller.js-ből veszi ahol példányositottuk a játékteret
        //ezzel beálitjuk az alapéretemezett állapotát a tömbnek
        for (let index = 0; index < meret * meret; index++) {
            this.#jatekTerTomb.push(false)
        }
       
    }

    getJatekteTomb() {
        /*modell vissza tudja adni a program állapotárol szoló replenzativ tömböt a controllenek
        ezért létrehozok egy getJatekTomb metodust aminek vissza térési értéke a jatetTerTomb lesz
        */
        return this.#jatekTerTomb;
    }

    szomszedokValtoztatasa(id) {
        //az ID az a elem amire rákatitottunk
        this.#jatekTerTomb[id] = !this.#jatekTerTomb[id]
        //ha rákatitotunk a jatekterTomb id-ik elemeét az ellenkezőjére kell változtatni
        //hiszen ez fogja replezántilni melyi, világit melyik nem
        //az elemek állapotát replezentálo tömben modositunk
       //bal
        if (id % this.meret !== 0) {
            this.#jatekTerTomb[id - 1] = !this.#jatekTerTomb[id - 1]
        }
        //jobb
        if (id % this.meret !== this.meret-1) {
            this.#jatekTerTomb[id + 1] = !this.#jatekTerTomb[id + 1]
        }
        //alsó
        if (id < this.meret * this.meret - this.meret) {
            this.#jatekTerTomb[id + this.meret] = !this.#jatekTerTomb[id + this.meret]
        }
        //felső
        if (id > this.meret) {
            this.#jatekTerTomb[id - this.meret] = !this.#jatekTerTomb[id - this.meret]
        }
    }
}

export default JatekterModell;//exportálni kell hogy elérjem máshol is
import JatekterController from "./controller/jatekterController.js";
//import Jatekter from "../view/jatekter.js"; 

$(function(){
    //A program belépési pontja
    new JatekterController(); //itt példányositjuk a jatekControllert
});
  
/*Ennek a helye a Controlleben van
        $(window).on("kapcsolas", (event) => {
            //console.log(event.detail);
            let id = event.detail;
            //itt változtatjuk meg a program állapotát
            //ujra példányositom a jatekterek a modositott listámmal
            this.#szomszedokValtoztatasa(id);
            new Jatekter(this.#lista);


        });*/
        
    //Ez a MODEL fogja kezelni
   /* #szomszedokValtoztatasa(id) {
        this.#lista[id] = !this.#lista[id];
        if (id % 3 !== 0) {
            this.#lista[id - 1] = !this.#lista[id - 1];
        }
        if (id % 3 !== 2) {
            this.#lista[id + 1] = !this.#lista[id + 1];
        }
        if (id > 2) {
            this.#lista[id - 3] = !this.#lista[id - 3];
        }
        if (id < 6) {
            this.#lista[id + 3] = !this.#lista[id + 3];
        }
    }*/


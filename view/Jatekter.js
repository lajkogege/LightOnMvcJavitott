import Lampa from "../view/Lampa.js";

export default class Jatekter{
    #LampaLista=[];
    constructor(meret){
        this.meret=meret;
        $(":root").css("--palyaMeret", this.meret);
        let szuloElem= $(".jatekter");
        for (let index = 0; index < meret*meret; index++) {
            const lampa = new Lampa(index,false, szuloElem);
            this.#LampaLista.push(lampa);      
          }
    }
    

    setLampakAllapota(tomb){
        console.log(tomb);
        //a tömböt a model állitja be true és false sorozata
        tomb.forEach((element, index) => {
            //listában az index-dik elemének a setAllapotának az rétékét kell meghivnom, igy fogom tudni melyik van fell vagy lekapcsolva
            this.#LampaLista[index].setAllapot(element);
        });
        
    }
}

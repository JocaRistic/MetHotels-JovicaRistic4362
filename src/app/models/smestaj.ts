export class Smestaj {
    brojSmestaja: number;
    brojKreveta: number;
    cena: number;
    ocena: number;
    slika: string;
    id?: number;

    constructor(brojSmestaja: number, brojKreveta: number, cena: number, ocena: number, slika: string, id?: number){
        this.brojSmestaja = brojSmestaja;
        this.brojKreveta = brojKreveta;
        this.cena = cena;
        this.ocena = ocena;
        this.slika = slika;
        this.id = id;
    }
}

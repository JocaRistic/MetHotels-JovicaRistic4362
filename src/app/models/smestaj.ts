export class Smestaj {
    brojSmestaja: number;
    brojKreveta: number;
    cena: number;
    ocena: number;
    slika: string;

    constructor(brojSmestaja: number, brojKreveta: number, cena: number, ocena: number, slika: string){
        this.brojSmestaja = brojSmestaja;
        this.brojKreveta = brojKreveta;
        this.cena = cena;
        this.ocena = ocena;
        this.slika = slika;
    }
}

export class Preporuka {
    idPreporuka: number;
    naziv: string;
    lokacija: string;
    opis: string;
    slika: string;

    constructor(idPreporuka: number, naziv: string, lokacija: string, opis: string, slika:string) {
        this.idPreporuka = idPreporuka;
        this.naziv = naziv;
        this.lokacija = lokacija;
        this.opis = opis;
        this.slika = slika;
    }
}

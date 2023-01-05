import { Component, OnInit } from '@angular/core';
import { Smestaj } from '../models/smestaj';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SmestajCrudService } from '../services/smestaj-crud.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/state/app.state';
import { Observable } from 'rxjs';
import { selectedSmestaji } from '../store/selector/smestaj.selector';
import { GetSmestaji } from '../store/actions/smestaj.actions';
import { SmestajState } from '../store/state/smestaj.state';

@Component({
  selector: 'app-smestaj',
  templateUrl: './add-smestaj-form.component.html',
  styleUrls: ['./add-smestaj-form.component.css']
})
export class SmestajComponent implements OnInit{
  
  public smestaji$: Observable<Smestaj[]>;

  smestajForma: FormGroup;

  constructor(private fb: FormBuilder, private _smestajCrudService: SmestajCrudService, private _store: Store<AppState>){
    this.smestaji$ = this._store.pipe(select(selectedSmestaji));
  }

  ngOnInit(): void {
    this.createFormSmestaj();
    this.posmatranjeVrednosti();
    this._store.dispatch(new GetSmestaji());
  }

  //kreiranje forme pomocu FormBuilder
  createFormSmestaj(){
    this.smestajForma = this.fb.group({
      brojSmestaja: ['', Validators.compose([Validators.required, this.brojValidator])],
      brojKreveta: ['', Validators.compose([Validators.required, this.brojValidator])],
      cena: ['', Validators.compose([Validators.required, this.decimalniBrojValidator])],
      ocena: ['', Validators.compose([Validators.required, this.decimalniBrojValidator])],
      slika: ['', Validators.required]
    })
  }

  //funkcija emituje objekat tipa Smestaj sa podacima unetim u formu
  dodajSmestaj(value: string){
    this.createSmestaj(new Smestaj(parseInt(this.smestajForma.controls['brojSmestaja'].value), parseInt(this.smestajForma.controls['brojKreveta'].value), parseFloat(this.smestajForma.controls['cena'].value), parseFloat(this.smestajForma.controls['ocena'].value), this.smestajForma.controls['slika'].value))

    this.smestajForma.controls['brojSmestaja'].setValue('');
    this.smestajForma.controls['brojKreveta'].setValue('');
    this.smestajForma.controls['cena'].setValue('');
    this.smestajForma.controls['ocena'].setValue('');
    this.smestajForma.controls['slika'].setValue('');

    return false;
  }

  //metod poziva funkciju za dodavanje novog smestaja u bazu iz servisa i dodaje smestaj u listu
  createSmestaj(smestaj: Smestaj) {
    this._smestajCrudService.createSmestaj(smestaj).subscribe((data) => {
      //this.listaSmestaja.push(data);
      this._store.dispatch(new GetSmestaji());
      alert('Smestaj je uspesno dodat.');
    })
  }

  //metod poziva funkciju za brisanje smestaja iz baze i ukoliko je obrisan poziva fju za brisanje smestaja iz liste
  deleteSmestaj(smestaj: Smestaj) {
    this._smestajCrudService.deleteSmestaj(smestaj.id).subscribe((data) => {
      this._store.dispatch(new GetSmestaji());
      alert('Smestaj je uspesno obrisan');
    })
  }

  //proverava da li je broj
  brojValidator(control: FormControl) {
    if (!control.value.match(/^[0-9]*$/)) {
      return {brojValidator: true};
    }else{
      return null;
    }
  }

  //proverava da li je broj ukljucujuci i decimalne brojeve
  decimalniBrojValidator(control: FormControl) {
    if (!control.value.match(/^\d*\.?\d*$/)) {
      return {decimalniBrojValidator: true};
    }else{
      return null;
    }
  }

  //funkcija posmatra vrednosti unete u formi, ukoliko je duzina vrednosti manja
  //od 6 karaktera ispisuje se poruka unutar konzole
  posmatranjeVrednosti(){
    this.smestajForma.controls['brojSmestaja'].valueChanges.subscribe(
      (f: any) => {
        if (f.length < 6) {
          console.log('Vrednost uneta za polje broj smestaja je manja od 6 karaktera')
        }
      }
    );
    this.smestajForma.controls['brojKreveta'].valueChanges.subscribe(
      (f: any) => {
        if (f.length < 6) {
          console.log('Vrednost uneta za polje broj kreveta je manja od 6 karaktera')
        }
      }
    );
    this.smestajForma.controls['cena'].valueChanges.subscribe(
      (f: any) => {
        if (f.length < 6) {
          console.log('Vrednost uneta za polje cena je manja od 6 karaktera')
        }
      }
    );
    this.smestajForma.controls['ocena'].valueChanges.subscribe(
      (f: any) => {
        if (f.length < 6) {
          console.log('Vrednost uneta za polje ocena je manja od 6 karaktera')
        }
      }
    );
    this.smestajForma.controls['slika'].valueChanges.subscribe(
      (f: any) => {
        if (f.length < 6) {
          console.log('Vrednost uneta za polje slika je manja od 6 karaktera')
        }
      }
    );
  }

}

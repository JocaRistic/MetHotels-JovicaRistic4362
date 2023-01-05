import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { AppComponent } from './app.component';
import { SmestajComponent } from './add-smestaj-form/add-smestaj-form.component';
import { PonudaComponent } from './ponuda/ponuda.component';
import { PreporukaComponent } from './preporuka/preporuka.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { BarComponent } from './bar/bar.component';
import { PonudaSmestajCardComponent } from './ponuda-smestaj-card/ponuda-smestaj-card.component';
import { RoomService } from './services/room.service';
import { SmestajCrudService } from './services/smestaj-crud.service';
import { Routes, RouterModule } from '@angular/router';
import { PregledSobeService } from './services/pregled-sobe.service';
import { appReducers } from './store/state/app.state';
import { SmestajEffect } from './store/effects/smestaj.effects';

const routes: Routes = [
  { path: '', redirectTo: 'dodavanje', pathMatch: 'full' },
  { path: 'dodavanje', component: SmestajComponent },
  { path: 'ponuda', component: PonudaComponent },
  { path: 'preporuka', component: PreporukaComponent },
  { path: 'onama', component: ONamaComponent},
  { path: 'smestaj/:id', component: PonudaSmestajCardComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SmestajComponent,
    PonudaComponent,
    PreporukaComponent,
    ONamaComponent,
    BarComponent,
    PonudaSmestajCardComponent
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([SmestajEffect]),
  ],
  providers: [
    RoomService,
    SmestajCrudService,
    PregledSobeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

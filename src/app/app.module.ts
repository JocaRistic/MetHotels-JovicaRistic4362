import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SmestajComponent } from './add-smestaj-form/add-smestaj-form.component';
import { PonudaComponent } from './ponuda/ponuda.component';
import { PreporukaComponent } from './preporuka/preporuka.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { BarComponent } from './bar/bar.component';
import { PonudaSmestajCardComponent } from './ponuda-smestaj-card/ponuda-smestaj-card.component';
import { RoomService } from './services/room.service';
import { SmestajCrudService } from './services/smestaj-crud.service';

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
    HttpClientModule
  ],
  providers: [
    RoomService,
    SmestajCrudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

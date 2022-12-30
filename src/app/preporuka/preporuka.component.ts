import { Component } from '@angular/core';
import { Preporuka } from '../models/preporuka';

@Component({
  selector: 'app-preporuka',
  templateUrl: './preporuka.component.html',
  styleUrls: ['./preporuka.component.css']
})
export class PreporukaComponent {
  listaPreporuka: Preporuka[];

  constructor(){
    this.listaPreporuka = [
      new Preporuka(1, "Ćele-kula", "Generala Milojka Lešjanina 14", "Danas predstavlja monumentalno zdanje muzejskog tipa, koje ne samo da se mora posetiti pri dolasku u Niš, već prestavlja takvu atrakciju da posetioci ponekad dolaze u ovaj kraj samo zbog nje.", "https://bookaweb.s3.eu-central-1.amazonaws.com/assets/60a4dcb5a6e7b.jpg"),
      new Preporuka(2, "Spomenik na Čegru", "Generala Milojka Lešjanina 14", "Na brdu Čegar nadomak Niša stoji spomenik u znak sećanja na komandanta Stevana Sinđelića i njegove vojnike koji su se dostojastveno borili i umrli na ovom mestu. ", "https://bookaweb.s3.eu-central-1.amazonaws.com/media/23772/responsive-images/cegar-3-%281%29___media_library_original_401_267.jpg"),
      new Preporuka(3, "Galerija Sinagoga", "Davidova 2, Niš 18000", "Galerija sinagoga u Nišu je zgrada od velike istorijske i arhitektonske vrednosti, a samim tim, i jedna od najznačajnijih građevina celog grada.", "https://bookaweb.s3.eu-central-1.amazonaws.com/assets/60a4e2bf3c720.jpg")
    ]
  }
}

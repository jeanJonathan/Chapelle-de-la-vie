import { Component } from '@angular/core';
import { ManneService } from './manne.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chapelle-de-la-Vie-site';
  manneDuJour: any;
  constructor(private manneService: ManneService) { }

  ngOnInit(): void {
    // Obtenez la date actuelle
    const currentDate = new Date();

    // Appelez la fonction getManneByWeek du service pour obtenir l'élément correspondant
    this.manneDuJour = this.manneService.getManneByWeek(currentDate);
  }
}


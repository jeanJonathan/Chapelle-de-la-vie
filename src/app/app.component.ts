import { Component } from '@angular/core';
import { ManneService } from './manne.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chapelle-de-la-Vie-site';
  manneDuJourData: any[] = [];
  constructor(private manneService: ManneService) { }

  ngOnInit() {
    // Utilisez le service pour récupérer les données de la Manne du jour lors de l'initialisation du composant
    this.manneDuJourData = this.manneService.getManneDuJour();
  }
}


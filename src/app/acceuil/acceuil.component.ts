import {Component, OnInit} from '@angular/core';
import {ManneService} from "../manne.service";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit{
  manneDuJour: any;
  constructor(private manneService: ManneService) { }

  ngOnInit(): void {
    // Obtenez la date actuelle
    const currentDate = new Date();

    // Appelez la fonction getManneByWeek du service pour obtenir l'élément correspondant
    this.manneDuJour = this.manneService.getManneByWeek(currentDate);
  }

}

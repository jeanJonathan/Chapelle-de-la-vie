// manne.service.ts

import { Injectable } from '@angular/core';
import {getISOWeek} from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class ManneService {
  private manneDuJour: any[] = []; // Tableau de données pour la Manne du jour

  constructor() {
    // Initialisez le tableau de données avec toutes les entrées de la Manne du jour
    // Ajoutez vos données ici
    this.manneDuJour = [
      // Toutes nos entrées de la Manne du jour
      {
        title: 'LA MANNE DU JOUR',
        verse: 'Marc 4:29',
        content: 'Contenu de la Manne du jour 2...',
        citation:'',
        author: 'Auteur 2',
        date: 'Date 2',
        image: 'lien_image_2.jpg'
      },
      {
        title: 'LA MANNE DU JOUR',
        verse: 'Marc 4:28',
        content: 'Car la terre produit d\'elle-même, d\'abord l\'herbe, ensuite l\'épi, puis le grain tout formé dans l\'épi',
        citation: 'Et alors, l\'église s\'est développée, comme un germe dans la terre. D\'abord, l\'église, c\'était une petite herbe.\n' +
          '          Elle est passée par les différentes phases de la justification, de la sanctification, du baptême du Saint-Esprit,\n' +
          '          de la puissance divine, jusqu\'à ce qu\'elle devienne une église mûre, un vrai épi de blé dans le Royaume de Dieu,\n' +
          '          qui a mûri pour le temps de la récolte.',
        author: 'William Marrion Branham',
        date: '62-0713',
        image: '../assets/images/imageAcceuil/paril3.jpg'
      },
      {
        title: 'LA MANNE DU JOUR',
        verse: 'Marc 4:29',
        content: 'Contenu de la Manne du jour 2...',
        citation:'',
        author: 'Auteur 2',
        date: 'Date 2',
        image: 'lien_image_2.jpg'
      },
      {
        title: '',
        verse: '',
        content: 'Contenu de la Manne du jour...',
        citation:'',
        author: 'Auteur ',
        date: 'Date ',
        image: 'lien_image'
      },
    ];
  }

  // Méthode pour obtenir la Manne du jour
  getManneDuJour(): any[] {
    return this.manneDuJour;
  }
  /*si la date de départ est le 18/09/2023, getManneByWeek renverra l'élément du tableau manneDuJour à l'index 0*/
  getManneByWeek(currentWeek: Date): any {
    // Convertissez la date en nombre de semaines (en supposant qu'une semaine a 7 jours)
    const weeksElapsed = Math.floor((currentWeek.getTime() - new Date(currentWeek.getFullYear(), 0, 1).getTime()) / (7 * 24 * 60 * 60 * 1000));

    // Utilisez un modulo 4 pour obtenir un résultat cyclique
    const finalIndex = weeksElapsed % 4;

    // Renvoie l'entrée correspondante
    return this.manneDuJour[finalIndex];
  }

}

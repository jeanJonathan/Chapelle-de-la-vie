import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MotDuPasteurComponent} from "./mot-du-pasteur/mot-du-pasteur.component";
import {ConseilDesDiacresComponent} from "./conseil-des-diacres/conseil-des-diacres.component";
import {ConseilDesAdministrateursComponent} from "./conseil-des-administrateurs/conseil-des-administrateurs.component";
import {EcodimComponent} from "./ecodim/ecodim.component";
import {AcceuilComponent} from "./acceuil/acceuil.component";
import {ChapelleDeLaVieComponent} from "./chapelle-de-la-vie/chapelle-de-la-vie.component";
import {NotreHistoireComponent} from "./notre-histoire/notre-histoire.component";

const routes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'notre-histoire', component: NotreHistoireComponent },
  { path: 'mot-du-pasteur', component: MotDuPasteurComponent },
  { path: 'conseil-des-diacres', component: ConseilDesDiacresComponent },
  { path: 'conseil-des-administrateurs', component: ConseilDesAdministrateursComponent },
  { path: 'ecodim', component: EcodimComponent },
  { path: 'chapelle-de-la-vie', component: ChapelleDeLaVieComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

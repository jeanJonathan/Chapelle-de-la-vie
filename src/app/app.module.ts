import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MotDuPasteurComponent } from './mot-du-pasteur/mot-du-pasteur.component';
import { ConseilDesDiacresComponent } from './conseil-des-diacres/conseil-des-diacres.component';
import { ConseilDesAdministrateursComponent } from './conseil-des-administrateurs/conseil-des-administrateurs.component';
import { EcodimComponent } from './ecodim/ecodim.component';
import { ChapelleDeLaVieComponent } from './chapelle-de-la-vie/chapelle-de-la-vie.component';
import { SermonsComponent } from './sermons/sermons.component';
import { CantiquesComponent } from './cantiques/cantiques.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { NotreHistoireComponent } from './notre-histoire/notre-histoire.component';
import { AudioComponent } from './audio/audio.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    ScheduleComponent,
    AcceuilComponent,
    MotDuPasteurComponent,
    ConseilDesDiacresComponent,
    ConseilDesAdministrateursComponent,
    EcodimComponent,
    ChapelleDeLaVieComponent,
    SermonsComponent,
    CantiquesComponent,
    ActualitesComponent,
    NotreHistoireComponent,
    AudioComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

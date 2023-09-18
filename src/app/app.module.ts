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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    ScheduleComponent,
    AcceuilComponent,
    MotDuPasteurComponent,
    ConseilDesDiacresComponent,
    ConseilDesAdministrateursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

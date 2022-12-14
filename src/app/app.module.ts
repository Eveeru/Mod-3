import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { IntroComponent } from './intro/intro.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NabvardashboardComponent } from './nabvardashboard/nabvardashboard.component';
import { LogoutComponent } from './modals/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentacionComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    IntroComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ErrorComponent,
    DashboardComponent,
    NabvardashboardComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

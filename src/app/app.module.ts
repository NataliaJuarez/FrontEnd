import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> iconos

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
<<<<<<< HEAD
=======
import { BotonLoginComponent } from './components/boton-login/boton-login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
>>>>>>> iconos


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
<<<<<<< HEAD
    FooterComponent
=======
    FooterComponent,
    BotonLoginComponent
>>>>>>> iconos
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    FormsModule
=======
    FontAwesomeModule
>>>>>>> iconos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

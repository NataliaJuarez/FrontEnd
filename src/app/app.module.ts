import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { BotonLoginComponent } from './components/boton-login/boton-login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddExperienceComponent } from './components/add-experience/add-experience.component';
import { AddEducationComponent } from './components/add-education/add-education.component';
import { AddSkillComponent } from './components/add-skill/add-skill.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { EditHomeComponent } from './components/edit-home/edit-home.component';
import { EditAboutComponent } from './components/edit-about/edit-about.component';


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
    FooterComponent,
    BotonLoginComponent,
    AddExperienceComponent,
    AddEducationComponent,
    AddSkillComponent,
    AddProjectComponent,
    EditHomeComponent,
    EditAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

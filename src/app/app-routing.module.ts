import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { AddExperienceComponent } from './components/add-experience/add-experience.component';
import { AddEducationComponent } from './components/add-education/add-education.component';
import { AddSkillComponent } from './components/add-skill/add-skill.component';
import { AddProjectComponent } from './components/add-project/add-project.component';

const routes: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new/experiencia', component: AddExperienceComponent },
  { path: 'new/educacion', component: AddEducationComponent },
  {path: 'new/habilidades', component: AddSkillComponent},
  { path: 'new/proyecto', component: AddProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

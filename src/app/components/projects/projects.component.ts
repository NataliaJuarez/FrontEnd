import { Component } from '@angular/core';
import { proyectos } from 'src/app/modelo/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = new proyectos("","","")   //fijarse los nombres, español o ingles --> decidir


}

import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  //projects = new proyectos("","","");   
  projectsList : any;

  constructor (private proyeService: ProyectosService  ) {}

  ngOnInit(): void {
    this.proyeService.verProyectos().subscribe(data => {
     this.projectsList=data;
     console.log(this.projectsList[0]);
    })
  }

  onDelete(){
    console.log("DELETE!");
  }
  
  onEdit(){
    console.log("EDIT!");
  }
}

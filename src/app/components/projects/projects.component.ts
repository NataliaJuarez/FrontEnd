import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  faTrashCan = faTrashCan;
  faPenToSquare = faPenToSquare;
  faGithub = faGithub;
  faLaptop = faLaptop;
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

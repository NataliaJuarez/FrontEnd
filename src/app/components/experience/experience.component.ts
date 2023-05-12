import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  faTrash = faTrash; 
  faPen = faPen;
  experienciaList : any;

  constructor (private expeService: ExperienciaService  ) {}

  ngOnInit(): void {
    this.expeService.verExperiencia().subscribe(data => {
     this.experienciaList=data;
     this.experienciaList=this.experienciaList.reverse(); //para que muestre el último dato ingresado primero
     console.log(this.experienciaList[0]);
    })
  }

  onDelete(){
    console.log("DELETE!");
  }

  onEdit(){
    console.log("EDIT!");
  }
}

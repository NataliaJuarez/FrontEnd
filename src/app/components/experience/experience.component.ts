import { Component } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { experiencia } from 'src/app/modelo/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
 // experiencia = new experiencia ("",""); me da error al compilar
  faTrash = faTrash; 
  faPen = faPen;



  onDelete(){
    console.log("DELETE!");
  }

  onEdit(){
    console.log("EDIT!");
  }
}

import { Component } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';  
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  faTrash = faTrash; 
  faPen = faPen;
}

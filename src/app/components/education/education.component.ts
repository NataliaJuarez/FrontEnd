import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';  
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { educacion } from 'src/app/modelo/education';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  faTrash = faTrash; 
  faPen = faPen;
  //educacion = new educacion("","",); no se que argumento poner para date

  constructor (private eduService: EducacionService  ) {}

  ngOnInit(): void {
    this.eduService.verEducacion().subscribe(data => {
     // this.educacion=data; quitar las barras de comentario cuando sepa que tipo de argumento es date
     console.log(data);
    })
  }

  onDelete(){
    console.log("DELETE!");
  }
  
  onEdit(){
    console.log("EDIT!");
  }
}

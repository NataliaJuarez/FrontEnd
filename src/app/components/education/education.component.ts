import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';  
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  faTrash = faTrash; 
  faPen = faPen;
  //educacion = new educacion("","", new Date);
  educacionList : any;

  constructor (private eduService: EducacionService  ) {}

  ngOnInit(): void {
    this.eduService.verEducacion().subscribe(data => {
     this.educacionList=data;
     this.educacionList=this.educacionList.reverse(); //para que muestre el último dato ingresado primero
     console.log(this.educacionList[0]);
    })
  }


  onDelete(educacion: EducacionService ){
    console.log("DELETE!");
  }
  
  onEdit(){
    console.log("EDIT!");
  }
}

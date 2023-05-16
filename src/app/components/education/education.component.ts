import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';  
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';

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
  isLogged = false;

  constructor (private eduService: EducacionService, private tokenService: TokenService  ) {}

  ngOnInit(): void {
    this.eduService.verEducacion().subscribe(data => {
     this.educacionList=data;
     this.educacionList=this.educacionList.reverse(); //para que muestre el último dato ingresado primero
     console.log(this.educacionList[0]);
    })

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  onDelete(){
    console.log("DELETE!");
  }
  
  onEdit(){
    console.log("EDIT!");
  }
}
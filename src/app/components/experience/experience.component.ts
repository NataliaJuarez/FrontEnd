import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  faTrash = faTrash; 
  faPen = faPen;
  faPlus = faPlus;

  experienciaList : any;
  isLogged = false;

  constructor (private expeService: ExperienciaService, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.expeService.verExperiencia().subscribe(data => {
     this.experienciaList=data;
     this.experienciaList=this.experienciaList.reverse(); //para que muestre el último dato ingresado primero
     console.log(this.experienciaList[0]);
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

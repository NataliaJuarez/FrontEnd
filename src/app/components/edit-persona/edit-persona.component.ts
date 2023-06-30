import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { persona } from 'src/app/modelo/persona';
import { UiPersonaService } from 'src/app/services/uipersona.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit{
  faXmark = faXmark;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faFloppyDisk = faFloppyDisk;

  @Output() onEditPersona: EventEmitter<persona> = new EventEmitter();

  nombre:string = "";
  apellido:string = "";
  profesion:string = "";
  fotoperfil:string = "";
  imagenbanner:string = "";
  about:string = "";
  ciudad:string = "";
  provincia:string = "";
  pais:string = "";
  mail:string = "";
  redsocial:string = "";
  showEditPersona: boolean=false;
  subscription?: Subscription

  constructor(
    private UiPersonaService: UiPersonaService
  ) { 
    this.subscription = this.UiPersonaService.onToggle()
                              .subscribe(value => this.showEditPersona = value)
  }
  
  ngOnInit(): void {
  }

  onSubmit(){
    if(this.nombre.length === 0){
      alert("Añade tu nombre!");
      return 
    }
    if(this.apellido.length === 0){
      alert("Añade tu apellido!");
      return 
    }
    if(this.profesion.length === 0){
      alert("Añade tu profesión!");
      return 
    }
    if(this.profesion.length === 0){
      alert("Añade tu profesión!");
      return 
    }
    if(this.about.length === 0){
      alert("Añade algo sobre ti!");
      return 
    }
    if(this.ciudad.length === 0){
      alert("Añade tu ciudad!");
      return 
    }
    if(this.provincia.length === 0){
      alert("Añade tu provincia!");
      return 
    }
    if(this.pais.length === 0){
      alert("Añade tu pais!");
      return 
    }
    if(this.ciudad.length === 0){
      alert("Añade tu mail!");
      return 
    }
    if(this.ciudad.length === 0){
      alert("Añade tu red social!");
      return 
    }

    const {nombre,apellido,profesion,fotoperfil,imagenbanner,about,ciudad,provincia,pais,mail,redsocial} = this
    const newPersona = {nombre,apellido,profesion,fotoperfil,imagenbanner,about,ciudad,provincia,pais,mail,redsocial}

    this.onEditPersona.emit(newPersona);

  }


}

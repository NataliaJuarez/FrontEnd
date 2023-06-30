import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { habilidades } from 'src/app/modelo/skills';
import { UiHabilidadesService } from 'src/app/services/uihabilidades.service';
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  faFloppyDisk = faFloppyDisk;
  faXmark = faXmark;

  @Output() onAddEducacion: EventEmitter<habilidades> = new EventEmitter();

  nombre:string = "";
  nivel:string = "";
  showAddHabilidad: boolean=false;
  subscription?: Subscription

  constructor(
    private UiHabilidadesService: UiHabilidadesService
  ) { 
    this.subscription = this.UiHabilidadesService.onToggle()
                              .subscribe(value => this.showAddHabilidad = value)
  }
  
  ngOnInit(): void {
  }

  onSubmit(){
    if(this.nombre.length === 0){
      alert("Añade una habilidad!");
      return 
    }
    if(this.nivel.length === 0){
      alert("Añade un nivel!");
      return 
    }

    const {nombre,nivel} = this
    const newHabilidad = {nombre,nivel}

    this.onAddEducacion.emit(newHabilidad);

  }

}

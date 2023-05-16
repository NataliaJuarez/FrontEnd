import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { educacion } from 'src/app/modelo/education';
import { UiEducacionService } from 'src/app/services/uieducacion.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {
  faXmark = faXmark;
  faFloppyDisk = faFloppyDisk;

  @Output() onAddEducacion: EventEmitter<educacion> = new EventEmitter();

  establecimiento:string = "";
  titulo:string = "";
  anio1:Date = new Date;
  anio2:Date = new Date;
  logo:string = "";
  showAddEducacion: boolean=false;
  subscription?: Subscription

  constructor(
    private UiEducacionService: UiEducacionService
  ) { 
    this.subscription = this.UiEducacionService.onToggle()
                              .subscribe(value => this.showAddEducacion = value)
  }
  
  ngOnInit(): void {
  }

  onSubmit(){
    if(this.establecimiento.length === 0){
      alert("Añade un establecimiento!");
      return 
    }
    if(this.titulo.length === 0){
      alert("Añade un titulo!");
      return 
    }

    const {establecimiento,titulo,anio1,anio2,logo} = this
    const newEducacion = {establecimiento,titulo,anio1,anio2,logo}

    this.onAddEducacion.emit(newEducacion);

  }

}

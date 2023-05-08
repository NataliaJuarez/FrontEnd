import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { educacion } from 'src/app/modelo/education';
import { UiService } from 'src/app/services/ui.service';


@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {

  @Output() onAddEducacion: EventEmitter<educacion> = new EventEmitter();

  establecimiento:string = "";
  titulo:string = "";
  anio:Date = new Date;
  showAddEducacion: boolean=false;
  subscription?: Subscription

  constructor(
    private uiService: UiService
  ) { 
    this.subscription = this.uiService.onToggle()
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

    const {establecimiento,titulo,anio} = this
    const newEducacion = {establecimiento,titulo,anio}

    this.onAddEducacion.emit(newEducacion);

  }

}

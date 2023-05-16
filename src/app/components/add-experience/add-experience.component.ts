import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { experiencia } from 'src/app/modelo/experience';
import { UiExperienciaService } from 'src/app/services/uiexperiencia.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {
  faXmark = faXmark;
  
  @Output() onAddExperiencia: EventEmitter<experiencia> = new EventEmitter();

  empresa: string = "";
  puesto: string = "";
  anio1: Date = new Date;
  anio2: Date = new Date;
  descripcion: string = "";
  showAddExperiencia: boolean = false;
  subscription?: Subscription

  constructor(
    private UiExperienciaService: UiExperienciaService, private router: Router) {
    this.subscription = this.UiExperienciaService.onToggle()
      .subscribe(value => this.showAddExperiencia = value)
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.puesto.length === 0) {
      alert("Añade un puesto!");
      return
    }
    if (this.empresa.length === 0) {
      alert("Añade una empresa!");
      return
    }
    if (this.descripcion.length === 0) {
      alert("Añade una descripción!");
      return
    }

    const { puesto, empresa, anio1, anio2, descripcion } = this
    const newExperiencia = { puesto, empresa, anio1, anio2, descripcion }

    this.onAddExperiencia.emit(newExperiencia);

  }
}

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton-login',
  templateUrl: './boton-login.component.html',
  styleUrls: ['./boton-login.component.css']
})
export class BotonLoginComponent {
  @Output() botonClick = new EventEmitter()

  onClick(){
    this.botonClick.emit();
  }
}

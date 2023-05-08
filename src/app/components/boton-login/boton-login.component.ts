import { Component, Output, EventEmitter } from '@angular/core';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boton-login',
  templateUrl: './boton-login.component.html',
  styleUrls: ['./boton-login.component.css']
})
export class BotonLoginComponent {
  faUser = faUser;
  faCircleUser = faCircleUser;
  @Output() botonClick = new EventEmitter()

  onClick(){
    this.botonClick.emit();
  }
}

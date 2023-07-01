import { Component } from '@angular/core';
import { persona } from 'src/app/modelo/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { mensajes } from 'src/app/modelo/mensajes';
import { MensajesService } from 'src/app/services/mensajes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  persona = new persona("", "", "", "", "", "", "", "", "", "", "");

  msj = new mensajes("", "", "", "");
  nombre:string = "";
  apellido:string = "";
  email:string = "";
  mensaje:string = "";

  mensajeList:any;

  constructor(private perService: PersonaService, private msjService: MensajesService) {}

  ngOnInit(): void {
    this.perService.verMiPerfil().subscribe(data => {
      this.persona = data;
      console.log(data);
    })
  }

  //PARA LOS MENSAJES

  onSubmit(): void {
    const newMensaje = new mensajes(this.nombre, this.apellido, this.email, this.mensaje);
    this.msjService.agregarMensaje(newMensaje).subscribe(
      data => {
        alert("Mensaje enviado correctamente");
      }, err => {
        alert("No se pudo enviar el mensaje");
      }
    )
    if(this.nombre.length === 0){
      alert("Escribe tu nombre!");
      return 
    }
    if(this.email.length === 0){
      alert("Escribe tu mail!");
      return 
    }
    if(this.mensaje.length === 0){
      alert("Escribe un mensaje!");
      return 
    }
  }

}

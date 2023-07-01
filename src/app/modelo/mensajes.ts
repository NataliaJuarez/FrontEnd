export class mensajes {

  id?: number;
  nombre: String;
  apellido: String;
  email: String; 
  mensaje: String;

  constructor(nombre: String, apellido: String, email: String, mensaje: String) {
      this.nombre=nombre;
      this.apellido=apellido;
      this.email=email;
      this.mensaje=mensaje;
  }
}
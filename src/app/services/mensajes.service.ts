import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mensajes } from '../modelo/mensajes';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  url='https://porfolio-natalia.onrender.com/mensajes/';

  constructor(private http:HttpClient) { }

  public verProyectos(): Observable<mensajes> {
    return this.http.get<mensajes>('https://porfolio-natalia.onrender.com/mensajes/ver');  //para ver en postman?
  }

  public agregarMensaje(msj: mensajes): Observable<any> {
    return this.http.post<any>(this.url + 'new', msj);
  }

  public eliminarMensaje(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `delete/${id}`); //para eliminar en postman?
  }
}

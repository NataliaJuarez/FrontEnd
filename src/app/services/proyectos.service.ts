import { Injectable } from '@angular/core';
import { proyectos } from '../modelo/projects';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  url='https://porfolio-natalia.onrender.com';

  constructor(private http:HttpClient) { }

  public verProyectos(): Observable<proyectos> {
    return this.http.get<proyectos>('https://porfolio-natalia.onrender.com/ver/proyectos');
  }
}

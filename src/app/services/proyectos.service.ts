import { Injectable } from '@angular/core';
import { proyectos } from '../modelo/projects';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  url='http://localhost:8080';

  constructor(private http:HttpClient) { }

  public verProyectos(): Observable<proyectos> {
    return this.http.get<proyectos>('http://localhost:8080/ver/proyectos');
  }
}

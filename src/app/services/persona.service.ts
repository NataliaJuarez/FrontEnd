import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../modelo/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url='http://localhost:8080/';

  constructor(private http:HttpClient) { }

  public verMiPerfil(): Observable<persona> {
    return this.http.get<persona>('http://localhost:8080/ver/miperfil');
  }
}

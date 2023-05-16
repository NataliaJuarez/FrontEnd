import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../modelo/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url='https://porfolio-natalia.onrender.com/';

  constructor(private http:HttpClient) { }

  public verMiPerfil(): Observable<persona> {
    return this.http.get<persona>('https://porfolio-natalia.onrender.com/ver/miperfil');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { experiencia } from '../modelo/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url='http://localhost:8080';

  constructor(private http:HttpClient) { }

  public verExperiencia(): Observable<experiencia> {
    return this.http.get<experiencia>('http://localhost:8080/ver/experiencia');
  }
}


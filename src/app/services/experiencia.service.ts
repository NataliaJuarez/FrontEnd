import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { experiencia } from '../modelo/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url='https://porfolio-natalia.onrender.com';

  constructor(private http:HttpClient) { }

  public verExperiencia(): Observable<experiencia> {
    return this.http.get<experiencia>('https://porfolio-natalia.onrender.com/ver/experiencia');
  }
}


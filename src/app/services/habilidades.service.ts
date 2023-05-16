import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { habilidades } from '../modelo/skills';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  url='https://porfolio-natalia.onrender.com';

  constructor(private http:HttpClient) { }

  public verHabilidades(): Observable<habilidades> {
    return this.http.get<habilidades>('https://porfolio-natalia.onrender.com/ver/habilidades');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { educacion } from '../modelo/education';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url='http://localhost:8080';

  constructor(private http:HttpClient) { }

  public verEducacion(): Observable<educacion> {
    return this.http.get<educacion>('http://localhost:8080/ver/educacion');
  }

  

}

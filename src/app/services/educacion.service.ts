import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { educacion } from '../modelo/education';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url='https://porfolio-natalia.onrender.com';

  constructor(private http:HttpClient) { }

  public verEducacion(): Observable<educacion> {
    return this.http.get<educacion>('https://porfolio-natalia.onrender.com/ver/educacion');
  }

  onDelete(educacion:EducacionService): Observable<educacion>{
    return this.http.delete<educacion>('https://porfolio-natalia.onrender.com/delete/educacion/{id}')
  }

  onEdit(educacion:educacion): Observable<educacion>{
    return this.http.delete<educacion>('https://porfolio-natalia.onrender.com/edit/educacion')
  }

  addEducacion(id:number, educacion:educacion): Observable<any>{
    return this.http.post<educacion>('https://porfolio-natalia.onrender.com/new/educacion', educacion)
  }

}

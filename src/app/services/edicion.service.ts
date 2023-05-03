import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class EdicionService {
  private apiUrl = 'http://localhost:4200/edit'

  constructor(
    private http:HttpClient
  ) { }

  
}
